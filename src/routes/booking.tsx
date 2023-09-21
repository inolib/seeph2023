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

      <Landmark className=" my-4" landmarkRole="main">
        <form action="" className="mx-8 my-8">
          <fieldset>
            <legend className="text-center text-2xl">
              <span className="mx-2 rounded-full bg-Blue px-4 py-2">1</span>
              <span className="text-left">
                Réservez votre session de conférence
              </span>
            </legend>

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

        <div className="my-4 bg-Grey p-12 text-2xl md:flex md:flex-row md:gap-8 items-start">
          <p className="hidden md:block">Votre réservation</p>

          <div>
            <p className="font-bold">
              Conférence l’Accesibilité numérique, un monde d’opportunité
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
            <button className="rounded-xl bg-Green px-4 py-2 text-2xl text-black">
              Confirmer
            </button>
          </div>
        </div>

        <form action="" className="mx-12 my-8">
          <fieldset>
            <legend className="text-center text-2xl">
              <span className="mx-2 rounded-full bg-Blue px-4 py-2">2</span>
              <span className="text-left">Complétez votre inscription </span>
            </legend>

            {conferences.map((data) => {
              if (!data.isBooked) return;

              return (
                <Fragment key={data.date}>
                  <p className="mb-4 mt-8 text-xl font-bold">
                    {data.date} / {data.time}
                  </p>

                  {[...new Array(data.attendeeCount)].map((_, index) => (
                    <Fragment key={index}>
                      <p className="text-lg font-bold">
                        Participant {index + 1}
                      </p>

                      <IndividualForm />
                    </Fragment>
                  ))}
                </Fragment>
              );
            })}
            <div className="my-8 flex flex-col justify-center md:justify-end gap-4 text-center sm:flex-row">
              <button className=" rounded-xl bg-Grey px-4 py-2 text-2xl text-black">
                Retour
              </button>
              <button className="rounded-xl bg-Green px-4 py-2 text-2xl text-black">
                Confirmer
              </button>
            </div>
          </fieldset>
        </form>
      </Landmark>

      <Footer />
    </>
  );
};
