import { useLocation } from "react-router-dom";

import { cn } from "../../helpers";
import { styles } from "../../styles";

export const PartnersSection = () => {
  const location = useLocation();

  const isHomeRoute = location.pathname === "/";

  return (
    <ul
      aria-label="Nos partenaires"
      className={cn(
        styles.tab.right,
        "z-0 -mx-1 -mb-2 mt-2 flex h-fit items-center justify-center gap-1 bg-white p-1 before:-top-2 after:-top-2 sm:gap-2 md:-mx-2 md:px-2 xl:-mx-4 xl:px-4",
        { "-mt-25 sm:-mt-12 md:-mt-17 xl:-mt-15": !isHomeRoute },
      )}
    >
      <li role="none">
        <img alt="La Poste" src="/logos/la_poste.png" />
      </li>

      <li role="none">
        <img alt="atomota" src="/logos/atomota.png" />
      </li>

      <li role="none">
        <img alt="Agence MADI" src="/logos/madiweb.png" />
      </li>

      <li role="none">
        <img alt="Blurry Ads" src="/logos/blurry_ads.png" />
      </li>
    </ul>
  );
};
