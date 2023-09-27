import { BookingSection } from "../components/Section/BookingSection";
import { Footer } from "../components/Section/Footer";
import { Header } from "../components/Section/Header";
import { KeypointSection } from "../components/Section/KeypointSection";
import { LastChanceSection } from "../components/Section/LastChanceSection";
import { ProgramSection } from "../components/Section/ProgramSection";
import { SpeakerSection } from "../components/Section/SpeakerSection";
import { ToolkitSection } from "../components/Section/ToolkitSection";
import { WorkshopSection } from "../components/Section/WorkshopSection";
import { Landmark } from "../components/ui/Landmark/Landmark";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export const Root = () => {
  useDocumentTitle(
    "INOLIB - L’accessibilité numérique, un monde d’opportunités",
  );

  return (
    <>
      <Header />

      <Landmark TagName="main">
        <BookingSection />

        <ProgramSection />

        <ToolkitSection />

        <KeypointSection />

        <SpeakerSection />

        <WorkshopSection />

        <LastChanceSection />
      </Landmark>

      <Footer />
    </>
  );
};
