import { ConferenceCheck } from "../components/booking/ConferenceCheck";
import { Footer } from "../components/sections/Footer";
import { Header } from "../components/sections/Header";
import { Landmark } from "../components/ui/Landmark/Landmark";

export const Booking = () => {
  return (
    <>
      <Header />

      <Landmark className="mx-8 my-4" landmarkRole="main">
        <form>
          <fieldset>
            <legend>Réservez vos sessions</legend>
            <ConferenceCheck date="20 Novembre" hours="12h-14h" />
            <ConferenceCheck date="21 Novembre" hours="12h-14h" />
            <ConferenceCheck date="23 Novembre" hours="17h-19h" />
            <ConferenceCheck date="24 Novembre" hours="17h-19h" />
          </fieldset>
        </form>
      </Landmark>

      <Footer />
    </>
  );
};
