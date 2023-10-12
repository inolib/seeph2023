import {
  getError,
  reset,
  setValue,
  useForm,
  valiForm,
  type SubmitHandler,
} from "@modular-forms/react";
// import { isPossiblePhoneNumber } from "libphonenumber-js";
import { useCallback, useEffect, useState, type JSX } from "react";
import { useParams } from "react-router-dom";
import { Element, scroller } from "react-scroll";
import {
  // custom,
  email,
  minLength,
  object,
  string,
  toTrimmed,
  type Input,
} from "valibot";

import { sessions } from "../../data";
import { graphqlClient } from "../../graphqlClient";
import { cn /*, toPhoneNumber*/ } from "../../helpers";
import { useBooking } from "../../routes/booking";
import { styles } from "../../styles";
import { PrimaryButton } from "../Button/PrimaryButton";
import { SecondaryButton } from "../Button/SecondaryButton";
import { Icon } from "../Image/Icon";
import { Alert } from "../ui/Alert";
import { Landmark } from "../ui/Landmark/Landmark";
import { AttendeeField, type FieldName } from "./AttendeeField";
import { SessionField } from "./SessionField";

export type Booking = Input<typeof BookingSchema>;

type Props = {
  isLocked: boolean;
};

type State = {
  paymentIntent: {
    id: string;
  };
};

const BookingSchema = object({
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
    // custom(isPossiblePhoneNumber, "Numéro de téléphone invalide."),
  ]),
});

export const BookingForm = ({ isLocked }: Props) => {
  const [state, setState] = useState<State>({
    paymentIntent: {
      id: "",
    },
  });

  const { datetime } = useParams();

  const { setBooking, setClientSecret, setIsLocked, setPaymentIntentId } =
    useBooking();

  const [bookingForm, { Form, Field }] = useForm<Booking>({
    validate: valiForm(BookingSchema),
  });

  const handleEditButtonClick: NonNullable<
    JSX.IntrinsicElements["button"]["onClick"]
  > = useCallback(() => {
    void (async () => {
      setClientSecret(null);

      await graphqlClient.request(
        /* GraphQL */ `
          mutation CancelPaymentIntent($id: String!) {
            cancelPaymentIntent(id: $id) {
              id
            }
          }
        `,
        {
          id: state.paymentIntent.id,
        },
      );

      setIsLocked(false);

      scroller.scrollTo("step-1", { duration: 0 });
    })();
  }, [setClientSecret, setIsLocked, state.paymentIntent.id]);

  const handleSubmit: SubmitHandler<Booking> = useCallback(
    (booking) => {
      void (async () => {
        setIsLocked(true);

        const data = await graphqlClient.request<{
          createPaymentIntent: {
            client_secret: string;
            id: string;
          };
        }>(
          /* GraphQL */ `
            mutation CreatePaymentIntent(
              $datetime: DateTime!
              $firstName: String!
              $lastName: String!
              $organization: String!
              $organizationTitle: String!
              $email: String!
              $tel: String!
            ) {
              createPaymentIntent(
                datetime: $datetime
                firstName: $firstName
                lastName: $lastName
                organization: $organization
                organizationTitle: $organizationTitle
                email: $email
                tel: $tel
              ) {
                client_secret
                id
              }
            }
          `,
          {
            datetime: booking.datetime,
            firstName: booking.firstName,
            lastName: booking.lastName,
            organization: booking.organization,
            organizationTitle: booking.organizationTitle,
            email: booking.email,
            tel: booking.tel,
          },
        );

        setState((state) =>
          state.paymentIntent.id !== data.createPaymentIntent.id
            ? {
                ...state,
                paymentIntent: {
                  ...state.paymentIntent,
                  id: data.createPaymentIntent.id,
                },
              }
            : state,
        );

        setBooking(booking);
        setClientSecret(data.createPaymentIntent.client_secret);
        setPaymentIntentId(data.createPaymentIntent.id);

        scroller.scrollTo("step-3", { duration: 0 });
      })();
    },
    [setBooking, setClientSecret, setIsLocked, setPaymentIntentId],
  );

  useEffect(() => {
    if (datetime !== undefined) {
      setValue(bookingForm, "datetime", datetime);
    } else {
      reset(bookingForm, datetime);
    }
  }, [bookingForm, datetime]);

  return (
    <Form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <Element name="step-1">
        <Landmark TagName="section" className="flex flex-col gap-2">
          <Landmark.Heading
            className={cn(styles.heading.h2, "flex flex-col gap-1 text-left")}
          >
            <div className="flex gap-0.5">
              <Icon className="h-2 w-2 flex-none bg-blue text-white">
                <span className="sr-only">Étape</span>
                <span>1</span>
              </Icon>

              <div className="relative top-0.25">
                <p>Choisissez votre session de conférence</p>

                <p className={styles.heading.sub}>
                  Toutes les réservations sont individuelles
                </p>
              </div>
            </div>
          </Landmark.Heading>

          <div className="flex flex-col gap-0.25 text-center">
            <ul className="grid grid-cols-2 gap-1 self-center md:grid-cols-4">
              {Object.entries(sessions).map(([datetime, session]) => (
                <li key={datetime}>
                  <Field name="datetime">
                    {(field, props) => (
                      <SessionField
                        datetime={datetime}
                        disabled={isLocked}
                        fieldProps={props}
                        form={bookingForm}
                        session={session}
                      />
                    )}
                  </Field>
                </li>
              ))}
            </ul>

            <Alert className="text-red">
              {getError(bookingForm, "datetime")}
            </Alert>
          </div>
        </Landmark>
      </Element>

      <Element name="step-2">
        <Landmark
          TagName="section"
          className={cn(
            styles.bleeding.middle,
            "-my-2 flex flex-col gap-2 bg-gray py-2",
          )}
        >
          <Landmark.Heading
            className={cn(styles.heading.h2, "flex flex-col gap-1 text-left")}
          >
            <div className="flex gap-0.5">
              <Icon className="h-2 w-2 flex-none bg-blue text-white">
                <span className="sr-only">Étape</span>
                <span>2</span>
              </Icon>

              <div className="relative top-0.25">
                <p>Complétez votre inscription</p>

                <p className={styles.heading.sub}>
                  Tous les champs sont obligatoires
                </p>
              </div>
            </div>
          </Landmark.Heading>

          <div className="flex flex-col gap-1">
            {Object.entries(BookingSchema.object).map(([_fieldName]) => {
              if (_fieldName !== "datetime") {
                const fieldName = _fieldName as FieldName;

                return (
                  <Field
                    key={fieldName}
                    name={fieldName}
                    // transform={
                    //   fieldName === "tel"
                    //     ? toPhoneNumber({ on: "change" })
                    //     : undefined
                    // }
                  >
                    {(field, props) => (
                      <AttendeeField
                        disabled={isLocked}
                        field={field}
                        fieldProps={props}
                      />
                    )}
                  </Field>
                );
              }
            })}
          </div>

          <div className="flex justify-center gap-1 lg:justify-end">
            {isLocked ? (
              <>
                <PrimaryButton
                  aria-label="Modifier vos informations"
                  disabled={!isLocked}
                  onClick={handleEditButtonClick}
                >
                  Modifier
                </PrimaryButton>

                <SecondaryButton disabled={isLocked} type="submit">
                  Confirmer
                </SecondaryButton>
              </>
            ) : (
              <>
                <SecondaryButton
                  aria-label="Modifier vos informations"
                  disabled={!isLocked}
                  onClick={handleEditButtonClick}
                >
                  Modifier
                </SecondaryButton>

                <PrimaryButton disabled={isLocked} type="submit">
                  Confirmer
                </PrimaryButton>
              </>
            )}
          </div>
        </Landmark>
      </Element>
    </Form>
  );
};
