import { FifthRegion } from "../components/sections/FifthRegion";
import { FirstRegion } from "../components/sections/FirstRegion";
import { Footer } from "../components/sections/Footer";
import { FourthRegion } from "../components/sections/FourthRegion";
import { Header } from "../components/sections/Header";
import { SecondRegion } from "../components/sections/SecondRegion";
import { SixthRegion } from "../components/sections/SixthRegion";
import { ThirdRegion } from "../components/sections/ThirdRegion";
import { Landmark } from "../components/ui/Landmark/Landmark";

export const Root = () => {
  return (
    <>
      <Header />

      <Landmark className="my-4" landmarkRole="main">
        <FirstRegion />

        <SecondRegion />

        <ThirdRegion />

        <FourthRegion />

        <FifthRegion />

        <SixthRegion />
      </Landmark>

      <Footer />
    </>
  );
};

//TODO a effacer
