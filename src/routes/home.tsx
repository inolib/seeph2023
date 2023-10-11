import { BookingSection } from "../components/Section/BookingSection";
import { Footer } from "../components/Section/Footer";
import { Header } from "../components/Section/Header";
import { KeypointsSection } from "../components/Section/KeypointsSection";
import { LastChanceSection } from "../components/Section/LastChanceSection";
import { NumbersSection } from "../components/Section/NumbersSection";
import { ProgramSection } from "../components/Section/ProgramSection";
import { ReviewsSection } from "../components/Section/ReviewsSection";
import { SpeakerSection } from "../components/Section/SpeakerSection";
import { ToolkitSection } from "../components/Section/ToolkitSection";
import { WorkshopSection } from "../components/Section/WorkshopSection";
import { Landmark } from "../components/ui/Landmark/Landmark";
import { useDocumentTitle } from "../hooks";

export const Home = () => {
  useDocumentTitle("Conférence INOLIB");

  return (
    <>
      <Header />

      <Landmark TagName="main" className="mt-1 flex flex-col gap-4">
        <BookingSection />
        <ProgramSection />
        <ToolkitSection />
        <KeypointsSection />
        <SpeakerSection />
        <WorkshopSection />
        <ReviewsSection />
        <LastChanceSection />
        {/* <NumbersSection /> */}
      </Landmark>

      <Footer />
    </>
  );
};
