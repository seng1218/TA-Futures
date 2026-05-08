@echo off
REM ============================================================
REM TAF Modern — Production Build + Package Script
REM Run this on your development machine before transferring
REM files to the IIS server.
REM ============================================================

echo.
echo === [1/4] Building TAF Modern (Next.js standalone) ===
call npm run build
if %ERRORLEVEL% neq 0 (
    echo BUILD FAILED. Check errors above.
    pause
    exit /b 1
)

echo.
echo === [2/4] Copying static assets into standalone output ===
xcopy /E /I /Y .next\static .next\standalone\.next\static
xcopy /E /I /Y public .next\standalone\public

echo.
echo === [3/4] Copying server config files into standalone ===
copy /Y web.config .next\standalone\web.config
copy /Y ecosystem.config.js .next\standalone\ecosystem.config.js

echo.
echo === [4/4] Creating logs directory ===
if not exist ".next\standalone\logs" mkdir .next\standalone\logs

echo.
echo ============================================================
echo  BUILD COMPLETE!
echo  Transfer the following folder to your IIS server:
echo    %CD%\.next\standalone\
echo.
echo  Then on the server run:
echo    pm2 restart taf-modern   (or pm2 start ecosystem.config.js)
echo ============================================================
pause
