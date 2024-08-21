export const config = {
  stripe: {
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    secretKey: process.env.STRIPE_SECRET_KEY,
    plans: {
      free: {
        priceId: 'price_1PqKcIIoBeUKDVDn9KJ96RIq',
        quota: {
          TASKS: 5,
        },
      },
      pro: {
        priceId: 'price_1PqKcSIoBeUKDVDn2D0Rr8Fd',
        quota: {
          TASKS: 100,
        },
      },
    },
    webhookSecret: process.env.STRIPE_WEBHOOK_SECRET,
  },
}
