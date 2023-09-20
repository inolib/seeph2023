import {
  createContext,
  Fragment,
  useCallback,
  useContext,
  useState,
} from "react";

import {
  ConferenceBooking,
  type Data as ConferenceBookingData,
} from "../components/booking/ConferenceBooking";
import { IndividualForm } from "../components/booking/IndividualForm";
import { Footer } from "../components/sections/Footer";
import { Header } from "../components/sections/Header";
import { Landmark } from "../components/ui/Landmark/Landmark";

type Conferences = ConferenceBookingData[];

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

      <Landmark className="mx-8 my-4" landmarkRole="main">
        <form action="">
          <fieldset>
            <legend>Réservez vos sessions</legend>

            <BookingContext.Provider value={{ registerConferenceBooking }}>
              {conferences.map((data) => (
                <ConferenceBooking
                  date={data.date}
                  key={data.date}
                  time={data.time}
                />
              ))}
            </BookingContext.Provider>
          </fieldset>
        </form>

        <div>
          <p>Votre réservation</p>

          <div>
            <p>Conférence l’Accesibilité numérique, un monde d’opportunité</p>

            {conferences.map((data) => {
              if (!data.isBooked) return;

              return (
                <p key={data.date}>
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

          <button>Confirmer</button>
        </div>

        <form action="">
          <fieldset>
            <legend>Complétez votre inscription</legend>

            {conferences.map((data) => {
              if (!data.isBooked) return;

              return (
                <Fragment key={data.date}>
                  <p>
                    {data.date} / {data.time}
                  </p>

                  {[...new Array(data.attendeeCount)].map((_, index) => (
                    <Fragment key={index}>
                      <p>Participant {index + 1}</p>

                      <IndividualForm />
                    </Fragment>
                  ))}
                </Fragment>
              );
            })}
          </fieldset>
        </form>

        <button type="submit">Valider</button>
      </Landmark>

      <Footer />
    </>
  );
};
