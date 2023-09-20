import { createContext, useContext } from "react";

import {
  ConferenceCheck,
  type ConferenceCheckData,
} from "../components/booking/ConferenceCheck";
import { IndividualForm } from "../components/booking/IndividualForm";
import { Footer } from "../components/sections/Footer";
import { Header } from "../components/sections/Header";
import { Landmark } from "../components/ui/Landmark/Landmark";

type QuantityContextType = {
  registerConferenceCheck: (data: ConferenceCheckData) => void;
};

const QuantityContext = createContext<QuantityContextType | null>(null);

export const useBooking = () => {
  const quantityContext = useContext(QuantityContext);

  if (quantityContext === null) {
    throw new Error(""); // TODO: error message
  }

  return quantityContext;
};

export const Booking = () => {
  const registerConferenceCheck: QuantityContextType["registerConferenceCheck"] =
    ({ count, date, isChecked, time }) => {
      // TODO
    };

  return (
    <>
      <Header />

      <Landmark className="mx-8 my-4" landmarkRole="main">
        <QuantityContext.Provider value={{ registerConferenceCheck }}>
          <form action="">
            <fieldset>
              <legend>Réservez vos sessions</legend>
              <ConferenceCheck date="20 Novembre" time="12h-14h" />
              <ConferenceCheck date="21 Novembre" time="12h-14h" />
              <ConferenceCheck date="23 Novembre" time="17h-19h" />
              <ConferenceCheck date="24 Novembre" time="17h-19h" />
            </fieldset>
          </form>

          <div>
            <p>Votre réservation</p>
            <div>
              <p>Conférence l’Accesibilité numérique, un monde d’opportunité</p>
              <p>Date</p>
              <p>Nombre de Place</p>
            </div>
            <button>Confirmer</button>
          </div>

          <form action="">
            <fieldset>
              <legend>Compléter votre inscription</legend>
              <IndividualForm />
            </fieldset>
          </form>

          <button type="submit">Valider</button>
        </QuantityContext.Provider>
      </Landmark>

      <Footer />
    </>
  );
};
