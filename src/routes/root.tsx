import { Footer } from "../components/section/Footer";
import { Header } from "../components/section/Header";
import { Landmark } from "../components/ui/Landmark/Landmark";

export const Root = () => {
  return (
    <>
      <Header />

      <Landmark role="main"></Landmark>

      <Footer />
    </>
  );
};
