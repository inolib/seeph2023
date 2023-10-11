import { Elements } from "@stripe/react-stripe-js";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import { Element, scroller } from "react-scroll";

import {
  BookingForm,
  type Booking as BookingType,
} from "../components/Form/BookingForm";
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
  booking: BookingType | null;
  clientSecret: CheckoutFormProps["clientSecret"];
  isLocked: boolean;
  paymentIntentId: string | null;
};

const setBooking = (setState: SetState) => (booking: BookingType) => {
  setState((state) =>
    state.booking !== booking ? { ...state, booking } : state,
  );
};

const setClientSecret =
  (setState: SetState) => (clientSecret: State["clientSecret"]) => {
    setState((state) =>
      state.clientSecret !== clientSecret ? { ...state, clientSecret } : state,
    );
  };

const setIsLocked = (setState: SetState) => (isLocked: boolean) => {
  setState((state) =>
    state.isLocked !== isLocked ? { ...state, isLocked } : state,
  );
};

const setPaymentIntentId = (setState: SetState) => (id: string) => {
  setState((state) =>
    state.paymentIntentId !== id ? { ...state, paymentIntentId: id } : state,
  );
};

export const useBooking = () => {
  const setState = useContext(SetStateContext);

  if (setState === null) {
    throw new Error(""); // TODO: error message
  }

  return {
    setBooking: setBooking(setState),
    setClientSecret: setClientSecret(setState),
    setIsLocked: setIsLocked(setState),
    setPaymentIntentId: setPaymentIntentId(setState),
  };
};

const SetStateContext = createContext<SetState | null>(null);

export const Booking = () => {
  useDocumentTitle("Formulaire de réservation");

  const [state, setState] = useState<State>({
    booking: null,
    clientSecret: null,
    isLocked: false,
    paymentIntentId: null,
  });

  useEffect(() => {
    if (state.clientSecret !== null) {
      scroller.scrollTo("step-3", {
        duration: 0,
      });
    }
  }, [state.clientSecret]);

  return (
    <>
      <Header />

      <Landmark TagName="main" className="flex flex-col gap-4">
        <SetStateContext.Provider value={setState}>
          <BookingForm isLocked={state.isLocked} />
        </SetStateContext.Provider>

        {state.clientSecret !== null ? (
          <Element name="step-3">
            <Landmark TagName="section" className="flex flex-col gap-2">
              <Landmark.Heading
                className={cn(
                  styles.heading.h2,
                  "flex flex-col gap-1 text-left",
                )}
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
                <SetStateContext.Provider value={setState}>
                  <CheckoutForm
                    booking={state.booking}
                    clientSecret={state.clientSecret}
                    paymentIntentId={state.paymentIntentId}
                  />
                </SetStateContext.Provider>
              </Elements>
            </Landmark>
          </Element>
        ) : null}
      </Landmark>

      <Footer />
    </>
  );
};
