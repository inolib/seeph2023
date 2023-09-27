import {
  createContext,
  useCallback,
  useContext,
  useId,
  useMemo,
  useState,
  type JSX,
} from "react";

import { AttendeeForm } from "../components/Booking_/AttendeeForm";
import {
  ConferenceBooking,
  type Data as ConferenceBookingData,
} from "../components/Booking_/ConferenceBooking";
import { ContentBoxLayout } from "../components/Layout/ContentBoxLayout";
import { Footer } from "../components/Section/Footer";
import { Header } from "../components/Section/Header";
import { Accordion } from "../components/ui/Accordion/Accordion";
import { Landmark } from "../components/ui/Landmark/Landmark";
import { conferences } from "../data/conferences";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

type BookingData = ConferenceBookingData[];

type BookingContextType = {
  registerConferenceBooking: (data: ConferenceBookingData) => void;
};

const BookingContext = createContext<BookingContextType | null>(null);

export const useBooking = () => {
  const context = useContext(BookingContext);

  if (context === null) {
    throw new Error(""); // TODO: error message
  }

  return context;
};

export const Booking = () => {
  useDocumentTitle(
    "INOLIB - Réservez vos places pour la conférence INOLIB sur les challenges de l’accessibilité numérique",
  );

  const headingId = useId();

  const [bookingData, setBookingData] = useState<BookingData>(() => {
    const bookingData = [];

    for (const conference of conferences) {
      bookingData.push({
        ...conference,
        attendeeCount: 0,
        isBooked: false,
      });
    }

    return bookingData;
  });

  const count = useMemo(() => {
    let count = 0;

    for (const data of bookingData) {
      count += data.attendeeCount;
    }

    return count;
  }, [bookingData]);

  const [sections, setSections] = useState([
    { open: true },
    { open: false },
    { open: false },
  ]);

  const goToNextStep = useCallback(() => {
    setSections((sections) => {
      const index = sections.findIndex((section) => section.open);

      if (index < sections.length - 1) {
        return sections.toSpliced(index, 2, { open: false }, { open: true });
      }

      return sections;
    });
  }, []);

  const goToPreviousStep = useCallback(() => {
    setSections((sections) => {
      const index = sections.findIndex((section) => section.open);

      if (index > 0) {
        return sections.toSpliced(
          index - 1,
          2,
          { open: true },
          { open: false },
        );
      }

      return sections;
    });
  }, []);

  const handleSubmit: NonNullable<JSX.IntrinsicElements["button"]["onClick"]> =
    useCallback(() => {
      // TODO
    }, []);

  const registerConferenceBooking: BookingContextType["registerConferenceBooking"] =
    useCallback(({ attendeeCount, date, isBooked, time }) => {
      setBookingData((conferences) => {
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

      <Landmark TagName="main" aria-labelledby={headingId}>
        <Landmark.Heading className="sr-only" id={headingId}>
          Réservez vos places pour la conférence sur les challenges de
          l’accessibilité numérique
        </Landmark.Heading>

        <form>
          <Accordion>
            <Accordion.Section open={sections[0].open}>
              <ContentBoxLayout>
                <Accordion.Header className="flex gap-1 text-left text-lg">
                  <span className="relative inline-block h-2 w-2 rounded-full bg-blue p-0.25 text-center text-white">
                    <span className="sr-only">Étape</span>
                    <span className="absolute left-[0.25rem] top-0 inline-block h-[1.875rem] w-[1.875rem]">
                      1
                    </span>
                  </span>

                  <span className="flex flex-col">
                    Réservez votre session de conférence
                    <span className="text-base">
                      Sélectionnez une date, puis le nombre de places
                    </span>
                  </span>
                </Accordion.Header>

                <Accordion.Panel className="mt-4 flex flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <BookingContext.Provider
                      value={{ registerConferenceBooking }}
                    >
                      {bookingData.map((data) => (
                        <ConferenceBooking
                          date={data.date}
                          key={data.date}
                          time={data.time}
                        />
                      ))}
                    </BookingContext.Provider>
                  </div>

                  {count > 0 ? (
                    <div className="flex flex-col gap-1 px-3">
                      <p className="text-lg">
                        Votre réservation pour la conférence
                        <br />
                        {
                          "« L’accessibilité numérique, un monde d’opportunités »"
                        }
                      </p>

                      <ul className="flex flex-col gap-1">
                        {bookingData.map((data) => {
                          if (!data.isBooked) return;

                          return (
                            <li key={data.date}>
                              <span className="font-bold">
                                Session du {data.date} de{" "}
                                {data.time.replace(" – ", " à ")}
                              </span>
                              <br />
                              <span>
                                {data.attendeeCount}{" "}
                                {data.attendeeCount > 1
                                  ? "participants"
                                  : "participant"}
                              </span>
                            </li>
                          );
                        })}
                      </ul>

                      <button
                        aria-label="Passer à l’inscription des participants"
                        className="self-center rounded-0.5 bg-turquoise px-2 py-1 font-bold text-black hover:bg-blue hover:text-white"
                        onClick={goToNextStep}
                        type="button"
                      >
                        Confirmer
                      </button>
                    </div>
                  ) : null}
                </Accordion.Panel>
              </ContentBoxLayout>
            </Accordion.Section>

            <Accordion.Section className="bg-gray" open={sections[1].open}>
              <ContentBoxLayout>
                <Accordion.Header className="flex gap-1 text-left text-lg">
                  <span className="relative inline-block h-2 w-2 rounded-full bg-blue p-0.25 text-center text-white">
                    <span className="sr-only">Étape</span>
                    <span className="absolute left-[0.25rem] top-0 inline-block h-[1.875rem] w-[1.875rem]">
                      2
                    </span>
                  </span>

                  <span className="flex flex-col">
                    Complétez votre inscription
                    <span className="text-base">
                      Tous les champs sont obligatoires
                    </span>
                  </span>
                </Accordion.Header>

                <Accordion.Panel className="mt-4 flex flex-col gap-4">
                  {bookingData.map((data) => {
                    if (!data.isBooked) return;

                    return (
                      <div className="flex flex-col gap-1" key={data.date}>
                        <p className="text-lg">
                          Session du {data.date} de{" "}
                          {data.time.replace(" – ", " à ")}
                        </p>

                        <div className="flex flex-col gap-4">
                          {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
                          {[...new Array(data.attendeeCount)].map(
                            (_, index) => (
                              <div className="flex flex-col gap-1" key={index}>
                                <p className="font-bold">
                                  Participant {index + 1}
                                </p>

                                <AttendeeForm />
                              </div>
                            ),
                          )}
                        </div>
                      </div>
                    );
                  })}

                  <div className="grid grid-cols-2 gap-2 self-center">
                    <button
                      aria-label="Retourner au choix des sessions"
                      className="rounded-0.5 bg-white px-2 py-1 font-bold text-black hover:bg-blue hover:text-white"
                      onClick={goToPreviousStep}
                      type="button"
                    >
                      Retour
                    </button>

                    <button
                      aria-label="Passer au règlement"
                      className="rounded-0.5 bg-turquoise px-2 py-1 font-bold text-black hover:bg-blue hover:text-white"
                      onClick={goToNextStep}
                      type="button"
                    >
                      Confirmer
                    </button>
                  </div>
                </Accordion.Panel>
              </ContentBoxLayout>
            </Accordion.Section>

            <Accordion.Section open={sections[2].open}>
              <ContentBoxLayout>
                <Accordion.Header className="flex gap-1 text-left text-lg">
                  <span className="relative inline-block h-2 w-2 rounded-full bg-blue p-0.25 text-center text-white">
                    <span className="sr-only">Étape</span>
                    <span className="absolute left-[0.25rem] top-0 inline-block h-[1.875rem] w-[1.875rem]">
                      3
                    </span>
                  </span>

                  <span className="flex flex-col">Réglez votre commande</span>
                </Accordion.Header>

                <Accordion.Panel>
                  <div className="grid grid-cols-2 gap-2 self-center">
                    <button
                      aria-label="Retourner à l’inscription des participants"
                      className="rounded-0.5 bg-gray px-2 py-1 font-bold text-black hover:bg-blue hover:text-white"
                      onClick={goToPreviousStep}
                      type="button"
                    >
                      Retour
                    </button>

                    <button
                      aria-label="Procéder au règlement"
                      className="rounded-0.5 bg-turquoise px-2 py-1 font-bold text-black hover:bg-blue hover:text-white"
                      onClick={handleSubmit}
                      type="button"
                    >
                      Confirmer
                    </button>
                  </div>
                </Accordion.Panel>
              </ContentBoxLayout>
            </Accordion.Section>
          </Accordion>
        </form>
      </Landmark>

      <Footer />
    </>
  );
};
