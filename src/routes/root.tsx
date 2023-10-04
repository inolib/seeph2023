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
import { useDocumentTitle } from "../hooks";

export const Root = () => {
  useDocumentTitle(
    "INOLIB - L’accessibilité numérique, un monde d’opportunités",
  );

  return (
    <>
      <Header />

      <Landmark TagName="main" className="mt-1 flex flex-col gap-4">
        <BookingSection />
        <ProgramSection />
        <SpeakerSection />
        <KeypointSection />
        <ToolkitSection />
        <WorkshopSection />
        <LastChanceSection />
      </Landmark>

      <Footer />
    </>
  );
};
