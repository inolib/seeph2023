import { cn } from "../../helpers";

type Props = {
  isHomeRoute: boolean;
};

export const PartnerSection = ({ isHomeRoute }: Props) => {
  return (
    <ul
      aria-label="Nos partenaires"
      className={cn(
        "z-0 -mx-1 -mb-2 flex h-fit items-center justify-center gap-1 bg-white p-1 lg:-mx-2 lg:gap-2 lg:px-2 xl:-mx-4 xl:px-4",
        { "-mt-14": !isHomeRoute },
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
