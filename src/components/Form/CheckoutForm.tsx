import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import type { PaymentIntent, StripeErrorType } from "@stripe/stripe-js";
import { useCallback, useEffect, useMemo, useState, type JSX } from "react";
import { scroller } from "react-scroll";

import { graphqlClient } from "../../graphqlClient";
import { toLocaleDateString, toLocaleTimeString } from "../../helpers";
import { useBooking } from "../../routes/booking";
import { styles } from "../../styles";
import { PrimaryButton } from "../Button/PrimaryButton";
import { SecondaryButton } from "../Button/SecondaryButton";
import { Alert } from "../ui/Alert";
import type { Booking } from "./BookingForm";

export type Props = {
  booking: Booking | null;
  clientSecret: string | null;
  paymentIntentId: string | null;
};

type State = {
  isLoading: boolean;
  paymentIntent: {
    status: PaymentIntent.Status | StripeErrorType | "";
  };
};

export const CheckoutForm = ({
  booking,
  clientSecret,
  paymentIntentId,
}: Props) => {
  const [state, setState] = useState<State>({
    isLoading: false,
    paymentIntent: {
      status: "",
    },
  });

  const { setClientSecret, setIsLocked } = useBooking();
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

  const handleEditButtonClick: NonNullable<
    JSX.IntrinsicElements["button"]["onClick"]
  > = useCallback(() => {
    void (async () => {
      setClientSecret(null);

      if (paymentIntentId !== null) {
        await graphqlClient.request(
          /* GraphQL */ `
            mutation CancelPaymentIntent($id: String!) {
              cancelPaymentIntent(id: $id) {
                id
              }
            }
          `,
          {
            id: paymentIntentId,
          },
        );
      }

      setIsLocked(false);

      scroller.scrollTo("step-2", {
        duration: 0,
      });
    })();
  }, [paymentIntentId, setClientSecret, setIsLocked]);

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

        {booking !== null ? (
          <div className="flex flex-col gap-1">
            <p className={styles.heading.h3}>
              Votre réservation pour la conférence du{" "}
              {toLocaleDateString(booking.datetime)} à{" "}
              {toLocaleTimeString(booking.datetime)}
            </p>

            <div>
              <p>Prénom : {booking.firstName}</p>
              <p>Nom : {booking.lastName}</p>
              <p>Entreprise : {booking.organization}</p>
              <p>Fonction : {booking.organizationTitle}</p>
              <p>Adresse e-mail : {booking.email}</p>
              <p>Numéro de téléphone : {booking.tel}</p>
            </div>

            <div>
              <p>Prix HT : 70 €</p>
              <p className="font-bold">Prix TTC : 84 €</p>
            </div>
          </div>
        ) : null}

        <div className="flex justify-center gap-2">
          <SecondaryButton
            className="bg-gray disabled:bg-gray"
            onClick={handleEditButtonClick}
          >
            Modifier
          </SecondaryButton>

          <PrimaryButton
            className="self-center"
            disabled={state.isLoading}
            type="submit"
          >
            Payer
          </PrimaryButton>
        </div>
      </div>
    </form>
  );
};
