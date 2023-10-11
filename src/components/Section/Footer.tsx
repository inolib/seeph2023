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
        "flex items-center justify-between gap-1 bg-black text-sm text-white sm:gap-2",
      )}
    >
      <p>
        <span>INOLIB © 2023</span>
        <br />
        <span className="hidden sm:inline-block">Tous droits réservés</span>
      </p>

      <p className="text-center">
        contact@inolib.com
        <br />
        +33 6 47 21 86 69
      </p>

      <div className="text-right">
        <p className="hidden sm:block">Retrouvez-nous sur</p>

        <ul className="flex items-center justify-end gap-0.25">
          <li className="flex-none">
            <ExternalLink href="https://www.youtube.com/@inolib287">
              <img
                alt="YouTube"
                className="h-[1.25rem]"
                src="/icons/youtube.svg"
              />
            </ExternalLink>
          </li>

          <li className="flex-none">
            <ExternalLink href="https://fr.linkedin.com/company/inolib">
              <img
                alt="LinkedIn"
                className="h-[1.25rem]"
                src="/icons/linkedin.svg"
              />
            </ExternalLink>
          </li>
        </ul>
      </div>
    </Landmark>
  );
};
