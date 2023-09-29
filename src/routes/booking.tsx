import {
  createContext,
  useCallback,
  useContext,
  useId,
  useMemo,
  useState,
  type JSX,
} from "react";

import { AttendeeForm } from "../components/Booking/AttendeeForm";
import {
  ConferenceBooking,
  type Data as ConferenceBookingData,
} from "../components/Booking/ConferenceBooking";
import { Icon } from "../components/Image/Icon";
import { Footer } from "../components/Section/Footer";
import { Header } from "../components/Section/Header";
import { Accordion } from "../components/ui/Accordion/Accordion";
import { Landmark } from "../components/ui/Landmark/Landmark";
import { conferences } from "../data";
import { cn } from "../helpers";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { styles } from "../styles";
import { PrimaryButton } from "../components/Button/PrimaryButton";
import { SecondaryButton } from "../components/Button/SecondaryButton";

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
    "INOLIB - Réservez vos places pour la conférence sur les challenges de l’accessibilité numérique",
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

      <Landmark TagName="main" aria-labelledby={headingId} className="mt-1">
        <Landmark.Heading className="sr-only" id={headingId}>
          Réservez vos places pour la conférence sur les challenges de
          l’accessibilité numérique
        </Landmark.Heading>

        <form>
          <Accordion className="flex flex-col gap-4">
            <Accordion.Section
              className="flex flex-col gap-2"
              open={sections[0].open}
            >
              <Accordion.Header
                className={cn(
                  styles.heading.h2,
                  "flex flex-col gap-1 text-left",
                )}
              >
                <Icon className="h-2 w-2 flex-none bg-blue text-white">
                  <span className="sr-only">Étape</span>1
                </Icon>

                <span className={cn(styles.separator.turquoise, "-mt-0.5")}>
                  Réservez votre session de conférence
                </span>

                <span className={styles.heading.sub}>
                  Sélectionnez une date, puis le nombre de places
                </span>
              </Accordion.Header>

              <Accordion.Panel className="flex flex-col gap-4">
                <div className="grid grid-cols-1 gap-2 self-center sm:grid-cols-2 lg:grid-cols-4">
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
                  <div className="flex flex-col gap-1">
                    <p className={styles.heading.h3}>
                      Votre réservation pour la conférence « L’accessibilité
                      numérique, un monde d’opportunités »
                    </p>

                    <ul className="flex flex-col gap-1">
                      {bookingData.map((data) => {
                        if (data.isBooked) {
                          return (
                            <li key={data.date} role="none">
                              <span className="font-bold">
                                {data.date} de {data.time.replace(" – ", " à ")}
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
                        }
                      })}
                    </ul>

                    <PrimaryButton
                      aria-label="Passer à l’inscription des participants"
                      className="self-center"
                      onClick={goToNextStep}
                    >
                      Confirmer
                    </PrimaryButton>
                  </div>
                ) : null}
              </Accordion.Panel>
            </Accordion.Section>

            <Accordion.Section
              className={cn(
                styles.bleeding.middle,
                "bg-gray flex flex-col gap-2",
              )}
              open={sections[1].open}
            >
              <Accordion.Header
                className={cn(
                  styles.heading.h2,
                  "flex flex-col gap-1 text-left",
                )}
              >
                <Icon className="h-2 w-2 flex-none bg-blue text-white">
                  <span className="sr-only">Étape</span>2
                </Icon>

                <span className={cn(styles.separator.turquoise, "-mt-0.5")}>
                  Complétez votre inscription
                </span>

                <span className={styles.heading.sub}>
                  Tous les champs sont obligatoires
                </span>
              </Accordion.Header>

              <Accordion.Panel className="flex flex-col gap-4">
                {bookingData.map((data) => {
                  if (data.isBooked) {
                    return (
                      <div className="flex flex-col gap-1" key={data.date}>
                        <p className={styles.heading.h3}>
                          {data.date} de {data.time.replace(" – ", " à ")}
                        </p>

                        <div className="flex flex-col gap-2">
                          {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
                          {[...new Array(data.attendeeCount)].map(
                            (_, index) => (
                              <div className="flex flex-col gap-1" key={index}>
                                <p className={styles.heading.sub}>
                                  Participant {index + 1}
                                </p>

                                <AttendeeForm />
                              </div>
                            ),
                          )}
                        </div>
                      </div>
                    );
                  }
                })}

                <div className="grid grid-cols-2 gap-2 self-center">
                  <SecondaryButton
                    aria-label="Retourner au choix des sessions"
                    className="bg-white disabled:bg-white"
                    onClick={goToPreviousStep}
                  >
                    Retour
                  </SecondaryButton>

                  <PrimaryButton
                    aria-label="Passer au règlement"
                    onClick={goToNextStep}
                  >
                    Confirmer
                  </PrimaryButton>
                </div>
              </Accordion.Panel>
            </Accordion.Section>

            <Accordion.Section open={sections[2].open}>
              <Accordion.Header
                className={cn(
                  styles.heading.h2,
                  "flex flex-col gap-1 text-left",
                )}
              >
                <Icon className="h-2 w-2 flex-none bg-blue text-white">
                  <span className="sr-only">Étape</span>3
                </Icon>

                <span className={cn(styles.separator.turquoise, "-mt-0.5")}>
                  Réglez votre commande
                </span>
              </Accordion.Header>

              <Accordion.Panel>
                {/* TODO */}

                <div className="grid grid-cols-2 gap-2 self-center">
                  <SecondaryButton
                    aria-label="Retourner à l’inscription des participants"
                    onClick={goToPreviousStep}
                  >
                    Retour
                  </SecondaryButton>

                  <PrimaryButton
                    aria-label="Procéder au règlement"
                    onClick={handleSubmit}
                  >
                    Confirmer
                  </PrimaryButton>
                </div>
              </Accordion.Panel>
            </Accordion.Section>
          </Accordion>
        </form>
      </Landmark>

      <Footer />
    </>
  );
};
