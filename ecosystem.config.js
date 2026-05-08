/**
 * PM2 Ecosystem Configuration — TAF Modern (Next.js)
 *
 * Usage:
 *   pm2 start ecosystem.config.js           # Start the app
 *   pm2 stop taf-modern                      # Stop the app
 *   pm2 restart taf-modern                   # Restart the app
 *   pm2 logs taf-modern                      # View logs
 *   pm2 save                                 # Save process list
 *   pm2-startup install                      # Register as Windows Service
 */

module.exports = {
  apps: [
    {
      name: "taf-modern",
      script: ".next/standalone/server.js",

      // Environment: production
      env_production: {
        NODE_ENV: "production",
        PORT: 3000,
        HOSTNAME: "127.0.0.1",
        // RESEND_API_KEY is loaded from Windows System Environment Variables
        // or you can set it here (less secure):
        // RESEND_API_KEY: "re_xxxxxxxxxxxxxxxx",
      },

      // Run with production env by default
      env: {
        NODE_ENV: "production",
        PORT: 3000,
        HOSTNAME: "127.0.0.1",
      },

      // Auto-restart settings
      watch: false,           // Do NOT watch files in production (use restart instead)
      autorestart: true,      // Restart if the app crashes
      max_restarts: 10,       // Max restart attempts before giving up
      restart_delay: 3000,    // Wait 3s between restart attempts (ms)
      min_uptime: "5s",       // Consider app stable after 5 seconds

      // Logging
      out_file: "logs/out.log",
      error_file: "logs/error.log",
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      merge_logs: true,

      // Windows compatibility
      interpreter: "node",
    },
  ],
};
