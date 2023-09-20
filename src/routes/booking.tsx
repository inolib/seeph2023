import { ConferenceCheck } from "../components/booking/ConferenceCheck";
import { IndividualForm } from "../components/booking/IndividualForm";
import { Footer } from "../components/sections/Footer";
import { Header } from "../components/sections/Header";
import { Landmark } from "../components/ui/Landmark/Landmark";

export const Booking = () => {
  return (
    <>
      <Header />

      <Landmark className="mx-8 my-4" landmarkRole="main">
        <form action="">
          <fieldset>
            <legend>Réservez vos sessions</legend>
            <ConferenceCheck
              confId="20-11"
              countId="20-11count"
              date="20 Novembre"
              hours="12h-14h"
            />
            <ConferenceCheck
              confId="21-11"
              countId="21-11count"
              date="21 Novembre"
              hours="12h-14h"
            />
            <ConferenceCheck
              confId="23-11"
              countId="23-11count"
              date="23 Novembre"
              hours="17h-19h"
            />
            <ConferenceCheck
              confId="24-11"
              countId="24-11count"
              date="24 Novembre"
              hours="17h-19h"
            />
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
      </Landmark>

      <Footer />
    </>
  );
};
