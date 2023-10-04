import { loadStripe, type StripeElementsOptions } from "@stripe/stripe-js";

export const stripePromise = loadStripe(
  "pk_test_51Nuz8EK4mWBX9EWw6NXGevxD79xNXnbbvck0lCBFRI4NyugTORWY1zbYupk8ZgK9LboJxFitFiOgcJJvWJDbc0AL00PEsU3v2G",
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
