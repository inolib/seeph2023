import { Footer } from "../components/Section/Footer";
import { Header } from "../components/Section/Header";
import { Landmark } from "../components/ui/Landmark/Landmark";
import { cn } from "../helpers";
import { useDocumentTitle } from "../hooks";
import { styles } from "../styles";

export const Thanks = () => {
  useDocumentTitle("INOLIB - Merci pour votre réservation !");

  return (
    <>
      <Header />

      <Landmark TagName="main" className="flex flex-col items-center gap-2">
        <Landmark.Heading className={cn(styles.heading.h2, "text-center")}>
          Merci pour votre réservation !
        </Landmark.Heading>

        <div className="flex max-w-xl flex-col gap-1">
          <p>
            Vous recevrez dans les 24 prochaines heures un e-mail de
            confirmation ainsi que le reçu de votre paiement.
          </p>

          <p>
            Nous restons à votre disposition pour vos questions et réclamations,
            vous pouvez nous écrire à{" "}
            <a
              className="underline"
              href="mailto:contact@inolib.com"
              rel="noreferrer"
              target="_blank"
            >
              contact@inolib.com
            </a>
            .
          </p>
        </div>
      </Landmark>

      <Footer />
    </>
  );
};
