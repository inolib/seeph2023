import { GreenLabel } from "../labels/GreenLabel";
import { Landmark } from "../ui/Landmark/Landmark";

export const Header = () => {
  return (
    <Landmark className="background p-4 px-12 text-white" landmarkRole="banner">
      <div className="mx-auto sm:mx-4 sm:w-2/4">
        <div className="my-4 flex items-center">
          <img alt="" className="" src="/logo_inolib2.png" />
          <p className="mx-4 hidden w-2/4 sm:block">
            Votre allié en accessibilité numérique et solutions digitales
          </p>
        </div>

        <div className="my-8">
          <GreenLabel label="Conférence" />
        </div>

        <Landmark.Heading className="my-4 text-4xl font-bold">
          L’Accessibilité numérique, un monde d’opportunités
        </Landmark.Heading>

        <div>
          <img alt="" src="/photo_djebrine-circle.png" />
          <p className="my-4 text-2xl font-bold">Djebrine ALOUI</p>
          <p className="text-xl">
            Venez explorer les clés de la révolution numérique.
          </p>
        </div>

        <div className="flex gap-4">
          <a href="http://">
            <img
              alt="aller sur la page Youtube d'Inolib"
              src="/icone_youtube.png"
            />
          </a>
          <a href="http://">
            <img
              alt="aller sur la page Linkedin d'Inolib"
              src="/icone_linkedin.png"
            />
          </a>
        </div>
      </div>
    </Landmark>
  );
};
