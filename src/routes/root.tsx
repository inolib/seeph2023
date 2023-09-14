import { GreenLabel } from "../components/labels/GreenLabel";
import { Footer } from "../components/sections/Footer";
import { Header } from "../components/sections/Header";
import { Heading } from "../components/ui/Landmark/Heading";
import { Landmark } from "../components/ui/Landmark/Landmark";

export const Root = () => {
  return (
    <>
      <Header />

      <Landmark className="my-4 p-4" role="main">
        <Landmark
          className="ml-auto w-8/12 bg-green-400 p-8 text-right"
          role="region"
        >
          <GreenLabel label="Inédit" />
          <Heading className="my-4 ml-auto w-8/12 text-3xl">
            Réservez vos places pour vos conférences Inolib sur les challenges
            de l’accessibilité numérique
          </Heading>
          <div className="flex items-center">
            <img alt="" src="/logo_inolib.png" />
            <img alt="" src="/logo_seeph2023.png" />
            <p className="w-5/12">
              Un contenu inédit à l’occasion de la 27ème Semaine Européenne pour
              l’Emploi des Personnes Handicapées (SEEPH)
            </p>
          </div>
        </Landmark>
      </Landmark>

      <Footer />
    </>
  );
};
