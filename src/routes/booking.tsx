import { useEffect } from "react";
import { scroller } from "react-scroll";

import { BookingForm } from "../components/Form/BookingForm";
import { Footer } from "../components/Section/Footer";
import { Header } from "../components/Section/Header";
import { Landmark } from "../components/ui/Landmark/Landmark";
import { options as scrollerOptions } from "../helpers";
import { useDocumentTitle } from "../hooks";

export const Booking = () => {
  useDocumentTitle("Formulaire de réservation");

  useEffect(() => {
    scroller.scrollTo("form", scrollerOptions);
  }, []);

  return (
    <>
      <Header />

      <Landmark TagName="main" className="flex flex-col gap-4">
        <BookingForm />
      </Landmark>

      <Footer />
    </>
  );
};
