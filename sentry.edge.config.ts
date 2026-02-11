import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,

  // Set tracesSampleRate to 1.0 to capture 100% of transactions for tracing.
  // Adjust this value in production
  tracesSampleRate: 1.0,

  // Enable structured logging
  enableLogs: true,

  // Enable debug mode in development
  debug: false,

  integrations: [
    // Capture console logs (warn and error levels)
    Sentry.consoleLoggingIntegration({ levels: ["warn", "error"] }),
  ],
});
