import { GreenLabel } from "../labels/GreenLabel";
import { Landmark } from "../ui/Landmark/Landmark";

export const Header = () => {
  return (
    <Landmark className="background p-4 px-12 text-white" landmarkRole="banner">
      <div className="my-4 flex items-center md:w-2/5">
        <img alt="" className="" src="/logo_inolib2.png" />
        <p className="mx-4 hidden w-2/4 md:block">
          Votre allié en accessibilité numérique et solutions digitales
        </p>
      </div>
      <div
        className="md:flex
      "
      >
        <div className="my-8 md:mx-8 md:w-2/5">
          <Landmark.Heading className="my-4 text-4xl font-bold md:text-5xl">
            L’Accessibilité numérique, un monde d’opportunités
          </Landmark.Heading>

          <div className="my-4 flex items-center gap-10">
            <img alt="" className="" src="/ion_calendar-outline-green.png" />
            <p className="text-xl font-bold text-green-400">
              4 sessions en novembre
            </p>
          </div>
        </div>

        <div>
          <div className="md:mx-8 md:flex md:flex-col  md:items-center">
            <img
              alt=""
              className="md:h-60 md:w-60"
              src="/photo_djebrine-circle.png"
            />
            <div className="md:mx-4">
              <p className="my-4 text-2xl font-bold md:text-3xl">
                Djebrine ALOUI
              </p>
              <p className="hidden md:my-2 md:block md:text-2xl">CEO Inolib</p>
              <p className="text-xl italic md:text-2xl">
                “ Venez explorer les clés de la révolution numérique.”
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="my-4 flex gap-4 md:mx-8 md:w-2/5">
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
    </Landmark>
  );
};
