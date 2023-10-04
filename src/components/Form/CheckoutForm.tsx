import { PaymentElement, useElements } from "@stripe/react-stripe-js";
import { useEffect } from "react";

import { useBooking } from "../../routes/booking";
import { styles } from "../../styles";

export const CheckoutForm = () => {
  const { registerStripeElements } = useBooking();
  const elements = useElements();

  useEffect(() => {
    registerStripeElements(elements);
  }, [elements, registerStripeElements]);

  return <PaymentElement className={styles.shrink} />;
};
