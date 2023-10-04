import { Footer } from "../components/Section/Footer";
import { Header } from "../components/Section/Header";
import { Landmark } from "../components/ui/Landmark/Landmark";

export const Congratulations = () => {
  return (
    <>
      <Header />

      <Landmark TagName="main" className="text-center">
        Votre inscription est terminée !
        <br />
        Vous recevrez bientôt un reçu par e-mail.
      </Landmark>

      <Footer />
    </>
  );
};
