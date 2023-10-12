import { loadStripe, type StripeElementsOptions } from "@stripe/stripe-js";

export const stripePromise = loadStripe(
  import.meta.env.VITE_STRIPE_API_KEY ?? "",
);

export const getOptions = (clientSecret: string): StripeElementsOptions => {
  const fontSizeBase =
    document.getElementsByTagName("html").item(0)?.style.fontSize ?? "16px";

  return {
    appearance: {
      theme: "flat",
      variables: {
        borderRadius: "8px",
        colorBackground: "#f1f1f1",
        colorDanger: "#000000",
        colorDangerText: "#000000",
        colorPrimary: "#212669",
        colorText: "#000000",
        fontFamily: "Atkinson Hyperlegible, sans-serif",
        fontSizeBase,
      },
    },
    clientSecret,
  };
};
