import { loadStripe, type StripeElementsOptions } from "@stripe/stripe-js";

export const stripePromise = loadStripe(
  import.meta.env.VITE_STRIPE_API_KEY ?? "",
);

export const getOptions = (clientSecret: string): StripeElementsOptions => ({
  appearance: {
    theme: "flat",
    variables: {
      fontFamily: "'Atkinson Hyperlegible', sans-serif",
    },
  },
  clientSecret,
});
