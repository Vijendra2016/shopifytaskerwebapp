import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://3381c3642f618140416b73aa24c8b249@o4509138763972608.ingest.us.sentry.io/4509138765021184",

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});