import { PurpleLabel } from "../labels/PurpleLabel";
import { Landmark } from "../ui/Landmark/Landmark";

export const Header = () => {
  return (
    <Landmark
      className="background relative p-4 px-12 text-white"
      landmarkRole="banner"
    >
      <div className="my-4 flex items-center md:w-2/5">
        <img alt="" className="" src="/logo_inolib2.png" />
        <p className="mx-4 hidden w-2/4 md:block">
          Votre allié en accessibilité numérique et solutions digitales
        </p>
      </div>
      <PurpleLabel label="Conférence" labelStyle="text-3xl md:mx-8" />
      <div
        className="md:flex
      "
      >
        <div className="my-8 md:mx-8 md:w-2/5">
          <Landmark.Heading className="my-4 text-4xl font-bold md:text-5xl">
            L’Accessibilité numérique, un monde d’opportunités
          </Landmark.Heading>

          <div className="my-4 hidden md:flex md:items-center md:gap-10">
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

      <div className="my-8 hidden gap-8 md:mx-8 md:flex">
        <div className="flex flex-1 items-center gap-4">
          <img alt="" className="h-12" src="icon_1-pink.png" />
          <p>
            Appréhendez les enjeux et l’importance de l’accessibilité numérique.
          </p>
        </div>
        <div className="flex flex-1 items-center gap-4">
          <img alt="" className="h-12" src="icon_2-pink.png" />
          <p>
            Comprenez les avantages offerts par l’accessibilité numérique aux
            entreprises.
          </p>
        </div>
        <div className="flex flex-1 items-center gap-4">
          <img alt="" className="h-12" src="icon_3-pink.png" />
          <p>
            Découvrez des témoignages et des démonstrations pour faciliter la
            compréhension.
          </p>
        </div>
      </div>

      <div className="my-4 flex gap-4 md:absolute md:right-24 md:top-24 md:mx-8">
        <a
          href="https://www.youtube.com/@inolib287"
          target="_blank"
          rel="noreferrer"
        >
          <img
            alt="aller sur la page Youtube d'Inolib"
            src="/icone_youtube.png"
          />
        </a>
        <a
          href="https://fr.linkedin.com/company/inolib"
          target="_blank"
          rel="noreferrer"
        >
          <img
            alt="aller sur la page Linkedin d'Inolib"
            src="/icone_linkedin.png"
          />
        </a>
      </div>

      <div className="flex bg-white gap-12 items-center justify-end px-8">
        <img className="h-24" src="/logo_laposte.png" alt="" />
        <img className="h-14" src="/logo_atomota.png" alt="" />
        <img className="h-24" src="/logo_madiweb.png" alt="" />
        <img className="h-9" src="/logo_blurryads.png" alt="" />
      </div>
    </Landmark>
  );
};
