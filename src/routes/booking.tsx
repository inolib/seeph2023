import { Elements } from "@stripe/react-stripe-js";
import {
  createContext,
  useContext,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";

import { BookingForm } from "../components/Form/BookingForm";
import {
  CheckoutForm,
  type Props as CheckoutFormProps,
} from "../components/Form/CheckoutForm";
import { Icon } from "../components/Image/Icon";
import { Footer } from "../components/Section/Footer";
import { Header } from "../components/Section/Header";
import { Landmark } from "../components/ui/Landmark/Landmark";
import { cn } from "../helpers";
import { useDocumentTitle } from "../hooks";
import { getOptions, stripePromise } from "../stripe";
import { styles } from "../styles";

type SetState = Dispatch<SetStateAction<State>>;

type State = {
  clientSecret: CheckoutFormProps["clientSecret"];
};

const setClientSecret =
  (setState: SetState) => (clientSecret: State["clientSecret"]) => {
    setState((state) =>
      state.clientSecret !== clientSecret ? { ...state, clientSecret } : state,
    );
  };

export const useBooking = () => {
  const setState = useContext(SetStateContext);

  if (setState === null) {
    throw new Error(""); // TODO: error message
  }

  return {
    setClientSecret: setClientSecret(setState),
  };
};

const SetStateContext = createContext<SetState | null>(null);

export const Booking = () => {
  useDocumentTitle(
    "INOLIB - Réservez votre place pour la conférence sur les challenges de l’accessibilité numérique",
  );

  const [state, setState] = useState<State>({
    clientSecret: null,
  });

  return (
    <>
      <Header />

      <Landmark
        TagName="main"
        aria-label="Réservez votre place pour la conférence sur les challenges de l’accessibilité numérique"
        className="mt-1 flex flex-col gap-4"
      >
        <SetStateContext.Provider value={setState}>
          <BookingForm />
        </SetStateContext.Provider>

        {state.clientSecret !== null ? (
          <Landmark TagName="section" className="flex flex-col gap-2">
            <Landmark.Heading
              className={cn(styles.heading.h2, "flex flex-col gap-1 text-left")}
            >
              <Icon className="h-2 w-2 flex-none bg-blue text-white">
                <span className="sr-only">Étape</span>3
              </Icon>

              <span className={cn(styles.separator.turquoise, "-mt-0.5")}>
                Réglez votre commande
              </span>
            </Landmark.Heading>

            <Elements
              options={getOptions(state.clientSecret)}
              stripe={stripePromise}
            >
              <CheckoutForm clientSecret={state.clientSecret} />
            </Elements>
          </Landmark>
        ) : null}
      </Landmark>

      <Footer />
    </>
  );
};
