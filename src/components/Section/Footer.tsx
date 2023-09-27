import { ContentBoxLayout } from "../Layout/ContentBoxLayout";
import { Landmark } from "../ui/Landmark/Landmark";

export const Footer = () => {
  return (
    <Landmark TagName="footer" className="bg-black text-white">
      <ContentBoxLayout className="flex items-center justify-between gap-3 !py-1">
        <p className="text-sm">INOLIB © 2023 Tous droits réservés</p>

        <ul
          aria-label="Suivez-nous sur nos réseaux sociaux"
          className="flex gap-0.5"
        >
          <li>
            <a href="https://www.youtube.com/@inolib287" rel="noreferrer">
              <img alt="Visitez INOLIB sur YouTube" src="/icons/youtube.svg" />
            </a>
          </li>
          <li>
            <a href="https://fr.linkedin.com/company/inolib" rel="noreferrer">
              <img
                alt="Visitez INOLIB sur LinkedIn"
                src="/icons/linkedin.svg"
              />
            </a>
          </li>
        </ul>
      </ContentBoxLayout>
    </Landmark>
  );
};
