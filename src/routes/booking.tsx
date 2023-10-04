import {
  getError,
  useForm,
  valiForm,
  type SubmitHandler,
} from "@modular-forms/react";
import { Elements } from "@stripe/react-stripe-js";
import type {
  PaymentIntent,
  StripeElements,
  StripeErrorType,
} from "@stripe/stripe-js";
import { isPossiblePhoneNumber } from "libphonenumber-js";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useMemo,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import {
  custom,
  email,
  minLength,
  object,
  string,
  toTrimmed,
  type Input,
} from "valibot";

import { SessionBooking } from "../components/Booking/SessionBooking";
import { PrimaryButton } from "../components/Button/PrimaryButton";
import {
  AttendeeField,
  type FieldName,
} from "../components/Form/AttendeeField";
import { CheckoutForm } from "../components/Form/CheckoutForm";
import { Icon } from "../components/Image/Icon";
import { Footer } from "../components/Section/Footer";
import { Header } from "../components/Section/Header";
import { Alert } from "../components/ui/Alert";
import { Landmark } from "../components/ui/Landmark/Landmark";
import { sessions } from "../data";
import { graphqlClient } from "../graphqlClient";
import { cn, toPhoneNumber } from "../helpers";
import { useDocumentTitle } from "../hooks";
import { getOptions, stripePromise } from "../stripe";
import { styles } from "../styles";

export type Booking = Input<typeof BookingSchema>;

type SetState = Dispatch<SetStateAction<State>>;

type State = {
  bookingId?: string | undefined;
  id: string;
  isSubmitting: boolean;
  stripe: {
    clientSecret: string;
    elements: StripeElements | null;
    status: PaymentIntent.Status | StripeErrorType | "";
  };
};

export const BookingSchema = object({
  datetime: string("Veuillez sélectionner une date."),
  firstName: string([
    toTrimmed(),
    minLength(1, "Veuillez entrer votre prénom."),
  ]),
  lastName: string([
    toTrimmed(),
    minLength(1, "Veuillez entrer votre nom de famille."),
  ]),
  organization: string([
    toTrimmed(),
    minLength(1, "Veuillez entrer le nom de votre entreprise."),
  ]),
  organizationTitle: string([
    toTrimmed(),
    minLength(1, "Veuillez entrer votre fonction."),
  ]),
  email: string([
    toTrimmed(),
    minLength(1, "Veuillez entrer votre adresse e-mail."),
    email("Addresse e-mail invalide."),
  ]),
  tel: string([
    toTrimmed(),
    minLength(1, "Veuillez entrer votre numéro de téléphone."),
    custom(isPossiblePhoneNumber, "Numéro de téléphone invalide."),
  ]),
});

const registerStripeElements =
  (setState: SetState) => (elements: State["stripe"]["elements"]) => {
    setState((state) =>
      state.stripe.elements !== elements
        ? {
            ...state,
            stripe: {
              ...state.stripe,
              elements,
            },
          }
        : state,
    );
  };

export const useBooking = () => {
  const setState = useContext(SetStateContext);

  if (setState === null) {
    throw new Error(""); // TODO: error message
  }

  return {
    registerStripeElements: registerStripeElements(setState),
  };
};

const SetStateContext = createContext<SetState | null>(null);

export const Booking = () => {
  useDocumentTitle(
    "INOLIB - Réservez vos places pour la conférence sur les challenges de l’accessibilité numérique",
  );

  const [state, setState] = useState<State>({
    id: useId(),
    isSubmitting: false,
    stripe: {
      clientSecret: "",
      elements: null,
      status: "",
    },
  });

  const [bookingForm, { Form, Field }] = useForm<Booking>({
    validate: valiForm(BookingSchema),
  });

  const paymentMessage = useMemo(() => {
    if (bookingForm.submitCount.value > 0) {
      switch (state.stripe.status) {
        case "canceled": {
          return "Paiement annulé.";
        }

        case "card_error": {
          return "Paiement échoué.";
        }

        case "processing": {
          return "Paiement en cours de traitement.";
        }

        case "succeeded": {
          return "Paiement réussi.";
        }
      }

      return "";
    }
  }, [bookingForm.submitCount.value, state.stripe.status]);

  const handleSubmit: SubmitHandler<Booking> = useCallback((booking) => {
    // void (async () => {
    //   const stripe = await stripePromise;
    //   if (stripe !== null && state.stripe.elements !== null) {
    //     const { id: bookingId } = await graphqlClient.request<{ id: string }>(
    //       /* GraphQL */ `
    //         mutation CreateBooking(
    //           $id: Cuid
    //           $datetime: DateTime!
    //           $firstName: String!
    //           $lastName: String!
    //           $organization: String!
    //           $organizationTitle: String!
    //           $email: String!
    //           $tel: String!
    //         ) {
    //           createBooking(
    //             id: $id
    //             datetime: $datetime
    //             firstName: $firstName
    //             lastName: $lastName
    //             organization: $organization
    //             organizationTitle: $organizationTitle
    //             email: $email
    //             tel: $tel
    //           ) {
    //             id
    //           }
    //         }
    //       `,
    //       {
    //         id: state.bookingId,
    //         datetime: booking.datetime,
    //         firstName: booking.firstName,
    //         lastName: booking.lastName,
    //         organization: booking.organization,
    //         organizationTitle: booking.organizationTitle,
    //         email: booking.email,
    //         tel: booking.tel,
    //       },
    //     );
    //     console.log(state.bookingId, bookingId);
    //     setState((state) =>
    //       state.bookingId !== bookingId
    //         ? {
    //             ...state,
    //             bookingId,
    //           }
    //         : state,
    //     );
    //     setState((state) => ({ ...state, isSubmitting: true }));
    //     const { error } = await stripe.confirmPayment({
    //       confirmParams: {
    //         receipt_email: booking.email,
    //         // return_url: "https://seeph2023.inolib.com/congratulations",
    //         return_url: "http://localhost:5173/congratulations",
    //       },
    //       elements: state.stripe.elements,
    //     });
    //     // await graphqlClient.request<{ id: string }>(
    //     //   /* GraphQL */ `
    //     //     mutation DeleteBooking($id: Cuid!) {
    //     //       deleteBooking(id: $id) {
    //     //         id
    //     //       }
    //     //     }
    //     //   `,
    //     //   {
    //     //     id: bookingId,
    //     //   },
    //     // );
    //     setState((state) =>
    //       error.type === "card_error" && state.stripe.status !== error.type
    //         ? {
    //             ...state,
    //             stripe: {
    //               ...state.stripe,
    //               status: error.type,
    //             },
    //           }
    //         : state,
    //     );
    //     setState((state) => ({ ...state, isSubmitting: false }));
    //   }
    // })();
  }, []);

  useEffect(() => {
    void (async () => {
      const response = await graphqlClient.request<{
        createPaymentIntent: {
          clientSecret: string;
        };
      }>(/* GraphQL */ `
        mutation CreatePaymentIntent {
          createPaymentIntent {
            clientSecret
          }
        }
      `);

      setState((state) =>
        state.stripe.clientSecret !== response.createPaymentIntent.clientSecret
          ? {
              ...state,
              stripe: {
                ...state.stripe,
                clientSecret: response.createPaymentIntent.clientSecret,
              },
            }
          : state,
      );
    })();
  }, []);

  useEffect(() => {
    void (async () => {
      const stripe = await stripePromise;

      if (stripe !== null && state.stripe.clientSecret !== "") {
        const { paymentIntent } = await stripe.retrievePaymentIntent(
          state.stripe.clientSecret,
        );

        if (paymentIntent !== undefined) {
          setState((state) =>
            state.stripe.status !== paymentIntent.status
              ? {
                  ...state,
                  stripe: {
                    ...state.stripe,
                    status: paymentIntent.status,
                  },
                }
              : state,
          );
        }
      }
    })();
  }, [state.stripe.clientSecret]);

  return (
    <>
      <Header />

      {state.stripe.clientSecret !== "" ? (
        <Landmark
          TagName="main"
          aria-labelledby={`${state.id}-heading`}
          className="mt-1 flex flex-col gap-4"
        >
          <Landmark.Heading className="sr-only" id={`${state.id}-heading`}>
            Réservez vos places pour la conférence sur les challenges de
            l’accessibilité numérique
          </Landmark.Heading>

          <Form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <Landmark TagName="section" className="flex flex-col gap-2">
              <Landmark.Heading
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
                  Sélectionnez une date
                </span>
              </Landmark.Heading>

              <div className="grid grid-cols-1 gap-2 self-center sm:grid-cols-2 lg:grid-cols-4">
                {Object.entries(sessions).map(([datetime, session]) => (
                  <Field key={datetime} name="datetime">
                    {(field, props) => (
                      <SessionBooking
                        datetime={datetime}
                        fieldProps={props}
                        form={bookingForm}
                        session={session}
                      />
                    )}
                  </Field>
                ))}
              </div>

              <Alert className="text-sm">
                {getError(bookingForm, "datetime")}
              </Alert>
            </Landmark>

            <Landmark
              TagName="section"
              className={cn(
                styles.bleeding.middle,
                "flex flex-col gap-2 bg-gray",
              )}
            >
              <Landmark.Heading
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
              </Landmark.Heading>

              <div className="flex flex-col gap-1">
                {Object.entries(BookingSchema.object).map(([_fieldName]) => {
                  if (_fieldName !== "datetime") {
                    const fieldName = _fieldName as FieldName;

                    return (
                      <Field
                        key={fieldName}
                        name={fieldName}
                        transform={
                          fieldName === "tel"
                            ? toPhoneNumber({ on: "change" })
                            : undefined
                        }
                      >
                        {(field, props) => (
                          <AttendeeField field={field} fieldProps={props} />
                        )}
                      </Field>
                    );
                  }
                })}
              </div>
            </Landmark>

            <Landmark TagName="section" className="flex flex-col gap-2">
              <Landmark.Heading
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
              </Landmark.Heading>

              <div className="flex flex-col gap-4">
                <SetStateContext.Provider value={setState}>
                  <Elements
                    options={getOptions(state.stripe.clientSecret)}
                    stripe={stripePromise}
                  >
                    <CheckoutForm />
                  </Elements>
                </SetStateContext.Provider>

                <Alert className="-mt-3 text-sm">{paymentMessage}</Alert>

                <PrimaryButton
                  className="self-center"
                  disabled={state.isSubmitting || bookingForm.submitting.value}
                  type="submit"
                >
                  Payer 84 € TTC
                </PrimaryButton>
              </div>
            </Landmark>
          </Form>
        </Landmark>
      ) : (
        <p className="text-center">Chargement…</p>
      )}

      <Footer />
    </>
  );
};
