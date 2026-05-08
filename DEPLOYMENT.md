# TAF Modern — IIS Deployment Guide

> **Stack**: Next.js 16 (Standalone) · Node.js 20 LTS · IIS with ARR Reverse Proxy · PM2

---

## Architecture Overview

```
Internet
   │
   ▼
IIS (port 80 / 443)          ← Public-facing web server
   │  web.config ARR rules
   │
   ▼
Node.js localhost:3000        ← Next.js server (managed by PM2)
   │
   ▼
Resend API (email)            ← External service (RESEND_API_KEY required)
```

---

## Prerequisites — One-Time Server Setup

### Step 1 — Install Node.js 20 LTS

1. Download from: https://nodejs.org/en/download (Windows x64 installer)
2. Install with default options — ensure "Add to PATH" is checked
3. Verify: open CMD and run:
   ```
   node --version    # Should output v20.x.x
   npm --version
   ```

### Step 2 — Install IIS ARR + URL Rewrite Modules

**Option A — Web Platform Installer (recommended)**
1. Download Web Platform Installer: https://www.microsoft.com/web/downloads/platform.aspx
2. Search for and install:
   - **Application Request Routing 3.0**
   - **URL Rewrite 2.1**
3. Restart IIS after install

**Option B — Direct downloads**
- URL Rewrite: https://www.iis.net/downloads/microsoft/url-rewrite
- ARR: https://www.iis.net/downloads/microsoft/application-request-routing

### Step 3 — Enable ARR Proxy in IIS

1. Open **IIS Manager**
2. Click the **server node** (top level, not a site)
3. Double-click **Application Request Routing Cache**
4. In the right panel, click **Server Proxy Settings**
5. Check ✅ **Enable proxy**
6. Click **Apply**

### Step 4 — Install PM2 Globally

In an **Administrator** command prompt:
```cmd
npm install -g pm2
npm install -g pm2-windows-startup
pm2-startup install
```

---

## Deployment — Each Release

### Step 5 — Build the Application (on your development machine)

```cmd
cd D:\taf-modern
npm run build
```

After a successful build, the standalone output is in:
```
.next/standalone/           ← Self-contained Node.js server
.next/static/               ← Static CSS/JS assets (must be copied manually)
public/                     ← Public assets (images, docs, etc.)
```

> **⚠️ Important**: After each build, you must manually copy two folders into the standalone directory:
> ```cmd
> xcopy /E /I /Y .next\static .next\standalone\.next\static
> xcopy /E /I /Y public .next\standalone\public
> ```

### Step 6 — Transfer Files to the Server

Copy the following to your server's site directory (e.g., `C:\inetpub\wwwroot\taf-modern\`):

| What to copy | Notes |
|---|---|
| `.next\standalone\` folder | The entire folder — this IS the production app |
| `web.config` | IIS configuration |
| `ecosystem.config.js` | PM2 process config |

**Do NOT copy:**
- `node_modules/` (standalone has its own minimal copy)
- `.env.local` or `.env.production` (set env vars separately — see Step 7)
- `src/` (source code not needed at runtime)

### Step 7 — Set Environment Variables on the Server

**Option A — Windows System Environment Variables (recommended)**
1. Open **System Properties** → **Advanced** → **Environment Variables**
2. Under **System variables**, click **New**:
   - Name: `RESEND_API_KEY`
   - Value: `re_So5oJDLf_qEA5WnKmyDBsju6FXgX2zkfU` *(your actual key)*
3. Click OK, then **restart the PM2 process** (Step 9) for it to take effect

**Option B — .env file in the standalone folder**
1. Create `C:\inetpub\wwwroot\taf-modern\.next\standalone\.env.production`:
   ```
   RESEND_API_KEY=re_So5oJDLf_qEA5WnKmyDBsju6FXgX2zkfU
   PORT=3000
   HOSTNAME=127.0.0.1
   NODE_ENV=production
   ```

### Step 8 — Configure IIS Site

1. Open **IIS Manager**
2. Right-click **Sites** → **Add Website**:
   - **Site name**: `taf-modern`
   - **Physical path**: `C:\inetpub\wwwroot\taf-modern\.next\standalone\`
   - **Binding**: choose HTTP (port 80) or HTTPS (port 443)
   - **Host name**: your domain (e.g., `www.tafutures.com.my`)
3. Click **OK**
4. Copy `web.config` into the site's physical path root

> **For HTTPS**: Bind an SSL certificate to the site in IIS. Use the same site binding dialog, add an HTTPS binding, and select your certificate from the store.

### Step 9 — Start the App with PM2

Open an **Administrator** command prompt in the site's standalone directory:

```cmd
cd C:\inetpub\wwwroot\taf-modern
pm2 start ecosystem.config.js --env production
pm2 save
```

Verify the app is running:
```cmd
pm2 list                          # Should show taf-modern as "online"
pm2 logs taf-modern --lines 50    # Check for startup errors
```

Test directly (before IIS): Open `http://localhost:3000` in a browser on the server.

---

## Verification Checklist

After deployment, verify each of these:

- [ ] `http://localhost:3000` loads on the server (Node.js direct)
- [ ] IIS site loads the homepage via domain/IP
- [ ] Page navigation works (client-side routing, no 404s)
- [ ] Dark mode toggle works
- [ ] All images load correctly
- [ ] Lead/contact form submits successfully (check email inbox)
- [ ] HTTPS loads without mixed-content warnings (if SSL enabled)
- [ ] Mobile viewport renders correctly

---

## Day-to-Day Operations

### Restarting the App After a New Deployment

```cmd
pm2 restart taf-modern
```

### Viewing Logs

```cmd
pm2 logs taf-modern           # Live tail
pm2 logs taf-modern --lines 100   # Last 100 lines
```

Log files are saved to: `.next\standalone\logs\` (as configured in ecosystem.config.js)

### Stopping / Starting

```cmd
pm2 stop taf-modern
pm2 start taf-modern
```

### After Server Reboot

PM2 was registered as a Windows Service (`pm2-startup install` in Step 4), so it will **automatically restart** with all saved processes on server boot. No manual action needed.

---

## Troubleshooting

| Problem | Solution |
|---|---|
| `502 Bad Gateway` in IIS | Node.js process is not running. Run `pm2 list` to check and `pm2 start ecosystem.config.js` |
| Lead form fails silently | `RESEND_API_KEY` env var not set or incorrect. Check with `pm2 logs taf-modern` |
| Images show as broken | Ensure `public/` was copied into `.next\standalone\public\` |
| CSS/JS 404 errors | Ensure `.next\static\` was copied into `.next\standalone\.next\static\` |
| Port 3000 already in use | Change PORT in `ecosystem.config.js` and update `web.config` rewrite URL |
| `ERR_HTTP_HEADERS_SENT` in logs | Usually harmless race condition in Next.js streaming — can be ignored |

---

## Quick-Reference: Full Deployment Script

Save as `deploy.cmd` on your **development machine** and run after each build:

```cmd
@echo off
echo === Building TAF Modern ===
call npm run build

echo === Copying static assets into standalone ===
xcopy /E /I /Y .next\static .next\standalone\.next\static
xcopy /E /I /Y public .next\standalone\public

echo === Copying web.config and ecosystem config ===
copy /Y web.config .next\standalone\web.config
copy /Y ecosystem.config.js .next\standalone\ecosystem.config.js

echo === Done! Transfer .next\standalone\ to the server ===
pause
```
