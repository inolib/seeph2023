import { useLocation } from "react-router-dom";

import { cn } from "../../helpers";

export const PartnersSection = () => {
  const location = useLocation();

  const isHomeRoute = location.pathname === "/";

  return (
    <ul
      aria-label="Nos partenaires"
      className={cn(
        "relative z-0 -mr-1 grid w-[calc(75%_+_1.5rem)] grid-cols-2 place-items-center gap-1 self-end rounded-tl-[3rem] bg-white p-1 before:absolute before:-left-4 before:bottom-0 before:-z-10 before:h-4 before:w-4 before:rounded-br-[3rem] before:shadow-[3rem_3rem_0_0] sm:grid-cols-4 md:-mx-2 md:px-2 lg:gap-2 xl:-mx-4 xl:px-4",
        { "-mt-25 sm:-mt-12 md:-mt-17 xl:-mt-15": !isHomeRoute },
      )}
    >
      <li role="none">
        <img alt="La Poste" className="max-h-2" src="/logos/la_poste.png" />
      </li>

      <li role="none">
        <img alt="atomota" className="max-h-2" src="/logos/atomota.png" />
      </li>

      <li role="none">
        <img alt="Agence MADI" className="max-h-2" src="/logos/madiweb.png" />
      </li>

      <li role="none">
        <img alt="Blurry Ads" className="max-h-2" src="/logos/blurry_ads.png" />
      </li>
    </ul>
  );
};
