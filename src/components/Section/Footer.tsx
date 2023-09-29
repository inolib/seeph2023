import { cn } from "../../helpers";
import { styles } from "../../styles";
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
        INOLIB © 2023{" "}
        <span className="hidden sm:inline-block">Tous droits réservés</span>
      </p>

      <div className="flex items-center gap-0.5">
        <p className="hidden text-right sm:block">Retrouvez-nous sur</p>

        <ul className="flex items-center gap-0.5">
          <li className="flex-none" role="none">
            <a
              href="https://www.youtube.com/@inolib287"
              rel="noreferrer"
              target="_blank"
            >
              <img alt="YouTube" className="h-1" src="/icons/youtube.svg" />
            </a>
          </li>

          <li className="flex-none" role="none">
            <a
              href="https://fr.linkedin.com/company/inolib"
              rel="noreferrer"
              target="_blank"
            >
              <img alt="LinkedIn" className="h-1" src="/icons/linkedin.svg" />
            </a>
          </li>
        </ul>
      </div>
    </Landmark>
  );
};
