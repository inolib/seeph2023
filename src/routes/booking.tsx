import {
  createContext,
  Fragment,
  useCallback,
  useContext,
  useId,
  useState,
} from "react";

import {
  ConferenceBooking,
  type Data as ConferenceBookingData,
} from "../components/booking/ConferenceBooking";
import { IndividualForm } from "../components/booking/IndividualForm";
import { Footer } from "../components/sections/Footer";
import { Header } from "../components/sections/Header";
import { Accordion } from "../components/ui/Accordion/Accordion";
import { Landmark } from "../components/ui/Landmark/Landmark";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

type Conferences = ConferenceBookingData[];

type BookingContextType = {
  registerConferenceBooking: (data: ConferenceBookingData) => void;
};

const BookingContext = createContext<BookingContextType | null>(null);

export const useBooking = () => {
  useDocumentTitle(
    "INOLIB - Réservez vos places pour la conférence INOLIB  sur les challenges de l’accessibilité numérique",
  );

  const context = useContext(BookingContext);

  if (context === null) {
    throw new Error(""); // TODO: error message
  }

  return context;
};

export const Booking = () => {
  const headingId = useId();

  const [conferences, setConferences] = useState<Conferences>([
    {
      date: "20 novembre",
      time: "12h - 14h",
      attendeeCount: 0,
      isBooked: false,
    },
    {
      date: "21 novembre",
      time: "12h - 14h",
      attendeeCount: 0,
      isBooked: false,
    },
    {
      date: "23 novembre",
      time: "17h - 19h",
      attendeeCount: 0,
      isBooked: false,
    },
    {
      date: "24 novembre",
      time: "17h - 19h",
      attendeeCount: 0,
      isBooked: false,
    },
  ]);

  const [sections, setSections] = useState([
    { open: true },
    { open: false },
    { open: false },
  ]);

  const goToNextStep = useCallback(() => {
    const index = sections.findIndex((section) => section.open);

    if (index < sections.length - 1) {
      setSections((sections) => {
        console.log(sections);

        const newSections = sections.toSpliced(
          index,
          2,
          { open: false },
          { open: true },
        );

        console.log(sections);
        console.log(newSections);

        return newSections;
      });
    }
  }, [sections]);

  const goToPreviousStep = useCallback(() => {
    const index = sections.findIndex((section) => section.open);

    if (index > 0) {
      setSections((sections) =>
        sections.toSpliced(index - 1, 2, { open: true }, { open: false }),
      );
    }
  }, [sections]);

  const registerConferenceBooking: BookingContextType["registerConferenceBooking"] =
    useCallback(({ attendeeCount, date, isBooked, time }) => {
      setConferences((conferences) => {
        for (const data of conferences) {
          if (
            data.date === date &&
            data.time === time &&
            (data.attendeeCount !== attendeeCount || data.isBooked !== isBooked)
          ) {
            data.attendeeCount = attendeeCount;
            data.isBooked = isBooked;

            return [...conferences];
          }
        }

        return conferences;
      });
    }, []);

  return (
    <>
      <Header />

      <Landmark
        aria-labelledby={headingId}
        className="p-8 px-12 md:mx-8"
        landmarkRole="main"
      >
        <Landmark.Heading
          className="my-4 text-center text-4xl  font-bold md:mx-auto md:w-4/6 md:text-5xl"
          id={headingId}
        >
          Réservez vos places pour la conférence INOLIB sur les challenges de
          l’accessibilité numérique
        </Landmark.Heading>

        <form action="" className="m-8">
          <Accordion>
            <Accordion.Section open={sections[0].open}>
              <Accordion.Header className="flex items-center text-center text-2xl">
                <span className="mx-2 rounded-full bg-Blue px-4 py-2">1</span>
                <span className="flex flex-col">
                  <span className="text-left">
                    Réservez votre session de conférence
                  </span>
                  <span className="text-sm">
                    (Sélectionnez une date, puis le nombre de places)
                  </span>
                </span>
              </Accordion.Header>

              <Accordion.Panel>
                <BookingContext.Provider value={{ registerConferenceBooking }}>
                  {conferences.map((data) => (
                    <ConferenceBooking
                      date={data.date}
                      key={data.date}
                      time={data.time}
                    />
                  ))}
                </BookingContext.Provider>

                <div className="my-4 items-start bg-Grey p-12 text-3xl md:flex md:flex-row md:justify-between md:gap-12">
                  <p className="hidden md:block">Votre réservation</p>

                  <div>
                    <p className="font-bold">
                      Conférence l’Accesibilité numérique, un monde
                      d’opportunités
                    </p>

                    {conferences.map((data) => {
                      if (!data.isBooked) return;

                      return (
                        <p className="my-4" key={data.date}>
                          <span>
                            {data.date} / {data.time}
                          </span>
                          <br />
                          <span>
                            {data.attendeeCount}{" "}
                            {data.attendeeCount > 1 ? "places" : "place"}
                          </span>
                        </p>
                      );
                    })}
                  </div>

                  <div className="my-4 text-center">
                    <button
                      className="rounded-xl bg-Green px-4 py-2 text-2xl text-black"
                      onClick={goToNextStep}
                      type="button"
                    >
                      Confirmer
                    </button>
                  </div>
                </div>
              </Accordion.Panel>
            </Accordion.Section>

            <Accordion.Section className="mx-12 my-8" open={sections[1].open}>
              <Accordion.Header className="flex items-center text-center text-2xl">
                <span className="mx-2 rounded-full bg-Blue px-4 py-2">2</span>
                <span className="flex flex-col">
                  <span className="text-left">Complétez votre inscription</span>
                  <span className="text-sm">
                    (Tous les champs sont obligatoires)
                  </span>
                </span>
              </Accordion.Header>

              <Accordion.Panel>
                {conferences.map((data) => {
                  if (!data.isBooked) return;

                  return (
                    <Fragment key={data.date}>
                      <p className="mt-8 text-2xl font-bold">
                        {data.date} / {data.time}
                      </p>

                      {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
                      {[...new Array(data.attendeeCount)].map((_, index) => (
                        <div className="my-4" key={index}>
                          <p className="text-lg font-bold">
                            Participant {index + 1}
                          </p>

                          <IndividualForm />
                        </div>
                      ))}
                    </Fragment>
                  );
                })}
                <div className="my-8 flex flex-col justify-center gap-4 text-center sm:flex-row md:justify-end">
                  <button
                    className=" rounded-xl bg-Grey px-4 py-2 text-2xl text-black"
                    onClick={goToPreviousStep}
                    type="button"
                  >
                    Retour
                  </button>

                  <button
                    className="rounded-xl bg-Green px-4 py-2 text-2xl text-black"
                    onClick={goToNextStep}
                    type="button"
                  >
                    Confirmer
                  </button>
                </div>
              </Accordion.Panel>
            </Accordion.Section>

            <Accordion.Section className="mx-12 my-8" open={sections[2].open}>
              <Accordion.Header>
                <span className="mx-2 rounded-full bg-Blue px-4 py-2">3</span>
                <span className="flex flex-col">
                  <span className="text-left">Réglez votre commande</span>
                </span>
              </Accordion.Header>

              <Accordion.Panel></Accordion.Panel>
            </Accordion.Section>
          </Accordion>
        </form>
      </Landmark>

      <Footer />
    </>
  );
};
