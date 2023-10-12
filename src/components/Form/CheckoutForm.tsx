import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import type { PaymentIntent, StripeErrorType } from "@stripe/stripe-js";
import { useCallback, useEffect, useMemo, useState, type JSX } from "react";
import { scroller } from "react-scroll";

import { graphqlClient } from "../../graphqlClient";
import {
  options as scrollerOptions,
  toLocaleDateString,
  toLocaleTimeString,
} from "../../helpers";
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

      scroller.scrollTo("step-1", scrollerOptions);
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
                return_url: `${window.location.origin}/thanks`,
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

  return booking !== null ? (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
      <p className={styles.heading.h3}>Votre réservation</p>

      <div className="-mt-1 grid grid-cols-1 gap-2 lg:grid-cols-2">
        <div className="flex flex-col gap-1">
          <p className="max-w-[38ch]">
            <span className="text-xl font-bold">
              Conférence « L’accessibilité numérique, un monde d’opportunités »
            </span>
            <br />
            <span>
              Le {toLocaleDateString(booking.datetime)} à{" "}
              {toLocaleTimeString(booking.datetime)}
            </span>
          </p>

          <div>
            <p>Prénom : {booking.firstName}</p>
            <p>Nom : {booking.lastName}</p>
            <p>Entreprise : {booking.organization}</p>
            <p>Fonction : {booking.organizationTitle}</p>
            <p>Adresse e-mail : {booking.email}</p>
            <p>Numéro de téléphone : {booking.tel}</p>
          </div>

          <p>
            <span className="text-xl font-bold">84,00 € TTC</span>
            <br />
            <span>Soit 70,00 € HT</span>
          </p>
        </div>

        <div>
          <PaymentElement className="max-w-[38ch]" />

          <Alert className="text-sm text-red">{paymentMessage}</Alert>
        </div>
      </div>

      <div className="flex justify-center gap-1 lg:justify-end">
        <SecondaryButton
          aria-label="Modifier votre réservation"
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
          Payer 84,00 €
        </PrimaryButton>
      </div>
    </form>
  ) : null;
};
