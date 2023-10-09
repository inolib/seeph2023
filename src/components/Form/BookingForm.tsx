import {
  getError,
  useForm,
  valiForm,
  type SubmitHandler,
} from "@modular-forms/react";
import { isPossiblePhoneNumber } from "libphonenumber-js";
import { useCallback, useState, type JSX } from "react";
import {
  custom,
  email,
  minLength,
  object,
  string,
  toTrimmed,
  type Input,
} from "valibot";

import { sessions } from "../../data";
import { graphqlClient } from "../../graphqlClient";
import { cn, toPhoneNumber } from "../../helpers";
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

type State = {
  isLocked: boolean;
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
    custom(isPossiblePhoneNumber, "Numéro de téléphone invalide."),
  ]),
});

export const BookingForm = () => {
  const [state, setState] = useState<State>({
    isLocked: false,
    paymentIntent: {
      id: "",
    },
  });

  const { setClientSecret } = useBooking();

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

      setState((state) => ({ ...state, isLocked: false }));
    })();
  }, [setClientSecret, state.paymentIntent.id]);

  const handleSubmit: SubmitHandler<Booking> = useCallback(
    (booking) => {
      void (async () => {
        setState((state) => ({ ...state, isLocked: true }));

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

        setClientSecret(data.createPaymentIntent.client_secret);
      })();
    },
    [setClientSecret],
  );

  return (
    <Form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <Landmark TagName="section" className="flex flex-col gap-2">
        <Landmark.Heading
          className={cn(styles.heading.h2, "flex flex-col gap-1 text-left")}
        >
          <Icon className="h-2 w-2 flex-none bg-blue text-white">
            <span className="sr-only">Étape</span>1
          </Icon>

          <span className={cn(styles.separator.turquoise, "-mt-0.5")}>
            Choisissez votre session de conférence
          </span>

          <span className={styles.heading.sub}>Sélectionnez une date</span>
        </Landmark.Heading>

        <ul className="grid grid-cols-1 gap-2 self-center sm:grid-cols-2 lg:grid-cols-4">
          {Object.entries(sessions).map(([datetime, session]) => (
            <li key={datetime}>
              <Field name="datetime">
                {(field, props) => (
                  <SessionField
                    datetime={datetime}
                    disabled={state.isLocked}
                    fieldProps={props}
                    form={bookingForm}
                    session={session}
                  />
                )}
              </Field>
            </li>
          ))}
        </ul>

        <Alert className="text-sm">{getError(bookingForm, "datetime")}</Alert>
      </Landmark>

      <Landmark
        TagName="section"
        className={cn(styles.bleeding.middle, "flex flex-col gap-2 bg-gray")}
      >
        <Landmark.Heading
          className={cn(styles.heading.h2, "flex flex-col gap-1 text-left")}
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
                    <AttendeeField
                      disabled={state.isLocked}
                      field={field}
                      fieldProps={props}
                    />
                  )}
                </Field>
              );
            }
          })}
        </div>

        {state.isLocked ? (
          <SecondaryButton
            className="self-center"
            onClick={handleEditButtonClick}
          >
            Modifier
          </SecondaryButton>
        ) : (
          <PrimaryButton className="self-center" type="submit">
            Confirmer
          </PrimaryButton>
        )}
      </Landmark>
    </Form>
  );
};