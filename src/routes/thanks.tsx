import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

import type { Booking } from "../components/Form/BookingForm";
import { Footer } from "../components/Section/Footer";
import { Header } from "../components/Section/Header";
import { Landmark } from "../components/ui/Landmark/Landmark";
import { graphqlClient } from "../graphqlClient";
import { cn } from "../helpers";
import { useDocumentTitle } from "../hooks";
import { styles } from "../styles";

type State = {
  booking: Booking | null;
};

export const Thanks = () => {
  useDocumentTitle("Merci pour votre réservation !");

  const [state, setState] = useState<State>({
    booking: null,
  });

  const [searchParams] = useSearchParams();

  useEffect(() => {
    void (async () => {
      const paymentIntentId = searchParams.get("payment_intent");

      if (paymentIntentId !== null) {
        const data = await graphqlClient.request<{
          readBooking: Booking | null;
        }>(
          /* GraphQL */ `
            query ReadBooking($paymentIntentId: String!) {
              readBooking(paymentIntentId: $paymentIntentId) {
                firstName
                lastName
                organization
                organizationTitle
                email
                tel
              }
            }
          `,
          {
            paymentIntentId,
          },
        );

        setState((state) =>
          state.booking !== data.readBooking
            ? { ...state, booking: data.readBooking }
            : state,
        );
      }
    })();
  }, [searchParams]);

  return state.booking !== null ? (
    <>
      <Header />

      <Landmark TagName="main" className="flex flex-col items-center gap-2">
        <Landmark.Heading className={cn(styles.heading.h2, "text-center")}>
          Merci pour votre réservation !
        </Landmark.Heading>

        <div className="flex max-w-xl flex-col gap-1">
          <p>
            Vous recevrez bientôt un e-mail de confirmation ainsi que le reçu de
            votre paiement.
          </p>

          <p>Voici un récapitulatif de votre réservation :</p>

          <div>
            <p>Prénom : {state.booking.firstName}</p>
            <p>Nom : {state.booking.lastName}</p>
            <p>Entreprise : {state.booking.organization}</p>
            <p>Fonction : {state.booking.organizationTitle}</p>
            <p>Adresse e-mail : {state.booking.email}</p>
            <p>Numéro de téléphone : {state.booking.tel}</p>
          </div>

          <div>
            <p>Prix HT : 70 €</p>
            <p className="font-bold">Prix TTC : 84 €</p>
          </div>

          <p>
            Vous pouvez réserver des places supplémentaires en retournant sur la{" "}
            <Link className="underline" to="/booking">
              page de réservation
            </Link>
            .
          </p>

          <p>
            Nous restons à votre disposition, vous pouvez nous écrire à{" "}
            <a
              className="underline"
              href="mailto:contact@inolib.com"
              rel="noreferrer"
              target="_blank"
            >
              contact@inolib.com
            </a>
            .
          </p>
        </div>
      </Landmark>

      <Footer />
    </>
  ) : null;
};
