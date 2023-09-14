import { GreenLabel } from "../labels/GreenLabel";
import { CallToActionLink } from "../links/CallToActionLink";
import { Landmark } from "../ui/Landmark/Landmark";

export const Header = () => {
  return (
    <Landmark className="background p-4 text-white" role="banner">
      <div className="mx-auto w-11/12 sm:mx-4 sm:w-2/4">
        <div className="my-4 flex items-center">
          <img alt="" className="mx-auto" src="/logo_inolib.png" />
          <p className="mx-4 hidden w-2/4 sm:block">
            L’agence digitale pionnière en responsabilité et innovation
          </p>
        </div>

        <div>
          <GreenLabel label="Conférence" />
        </div>

        <Landmark.Heading className="my-4 text-center text-4xl">
          L’Accessibilité numérique, un monde d’opportunités
        </Landmark.Heading>

        <p className="text-center text-2xl">
          L’avenir inclusif commence ici, et il commence avec vous
        </p>

        <div className="my-5 flex place-content-between items-center">
          <img alt="" className="h-12 w-12" src="/ion_calendar-outline.png" />
          <span className="flex text-center">
            4 sessions <br />
            en Novembre
          </span>
          <span className="text-center">
            Durée :<br />
            120 minutes
          </span>
        </div>

        <div className="flex justify-center">
          <CallToActionLink label="Réservez maintenant" />
        </div>
      </div>
    </Landmark>
  );
};
//TODO Les barres verticales
