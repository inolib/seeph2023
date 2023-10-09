import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import type { PaymentIntent, StripeErrorType } from "@stripe/stripe-js";
import { useCallback, useEffect, useMemo, useState } from "react";

import { styles } from "../../styles";
import { PrimaryButton } from "../Button/PrimaryButton";
import { Alert } from "../ui/Alert";

export type Props = {
  clientSecret: string | null;
};

type State = {
  isLoading: boolean;
  paymentIntent: {
    status: PaymentIntent.Status | StripeErrorType | "";
  };
};

export const CheckoutForm = ({ clientSecret }: Props) => {
  const [state, setState] = useState<State>({
    isLoading: false,
    paymentIntent: {
      status: "",
    },
  });

  const elements = useElements();
  const stripe = useStripe();

  const paymentMessage = useMemo(() => {
    switch (state.paymentIntent.status) {
      case "canceled": {
        return "Votre paiement a été annulé.";
      }

      case "card_error": {
        return "Votre paiement a échoué, veuillez vérifier votre numéro de carte.";
      }

      case "processing": {
        return "Votre paiement est en cours de traitement.";
      }

      case "succeeded": {
        return "Votre paiement a réussi.";
      }
    }

    return "";
  }, [state.paymentIntent.status]);

  const handleSubmit: NonNullable<JSX.IntrinsicElements["form"]["onSubmit"]> =
    useCallback(
      (event) => {
        void (async () => {
          event.preventDefault();

          setState((state) => ({ ...state, isLoading: true }));

          if (stripe !== null && elements !== null) {
            const { error } = await stripe.confirmPayment({
              confirmParams: {
                return_url: "https://seeph2023.inolib.com/thanks",
                // return_url: "http://localhost:5173/thanks",
              },
              elements,
            });

            setState((state) =>
              error.type === "card_error" &&
              state.paymentIntent.status !== error.type
                ? {
                    ...state,
                    paymentIntent: {
                      ...state.paymentIntent,
                      status: error.type,
                    },
                  }
                : state,
            );
          }

          setState((state) => ({ ...state, isLoading: false }));
        })();
      },
      [elements, stripe],
    );

  useEffect(() => {
    void (async () => {
      if (stripe !== null && clientSecret !== null) {
        const { paymentIntent } =
          await stripe.retrievePaymentIntent(clientSecret);

        if (paymentIntent !== undefined) {
          setState((state) =>
            state.paymentIntent.status !== paymentIntent.status
              ? {
                  ...state,
                  paymentIntent: {
                    ...state.paymentIntent,
                    status: paymentIntent.status,
                  },
                }
              : state,
          );
        }
      }
    })();
  }, [clientSecret, stripe]);

  return (
    <form className="flex flex-col gap-1" onSubmit={handleSubmit}>
      <PaymentElement className={styles.shrink} />

      <div className="flex flex-col gap-2">
        <Alert className=" text-sm">{paymentMessage}</Alert>

        <PrimaryButton
          className="self-center"
          disabled={state.isLoading}
          type="submit"
        >
          Payer 84 € TTC
        </PrimaryButton>
      </div>
    </form>
  );
};
