import { cn } from "../../helpers";
import { styles } from "../../styles";
import { ExternalLink } from "../Link/ExternalLink";
import { Landmark } from "../ui/Landmark/Landmark";

export const Footer = () => {
  return (
    <Landmark
      TagName="footer"
      className={cn(
        styles.bleeding.bottom,
        "flex items-end justify-between gap-2 bg-black text-sm text-white",
      )}
    >
      <p>
        <span>INOLIB © 2023</span>{" "}
        <span className="hidden sm:inline-block">Tous droits réservés</span>
      </p>

      <div className="flex items-center gap-0.5">
        <p className="hidden text-right sm:block">Retrouvez-nous sur</p>

        <ul className="flex items-center gap-0.5">
          <li className="flex-none">
            <ExternalLink href="https://www.youtube.com/@inolib287">
              <img alt="YouTube" className="h-1" src="/icons/youtube.svg" />
            </ExternalLink>
          </li>

          <li className="flex-none">
            <ExternalLink href="https://fr.linkedin.com/company/inolib">
              <img alt="LinkedIn" className="h-1" src="/icons/linkedin.svg" />
            </ExternalLink>
          </li>
        </ul>
      </div>
    </Landmark>
  );
};
