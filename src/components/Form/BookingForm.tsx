import { useForm, valiForm, type SubmitHandler } from "@modular-forms/react";
// import { isPossiblePhoneNumber } from "libphonenumber-js";
import { useCallback } from "react";
import { Element } from "react-scroll";
import {
  // custom,
  email,
  minLength,
  object,
  string,
  toTrimmed,
  type Input,
} from "valibot";

import { useNavigate } from "react-router-dom";

import { graphqlClient } from "../../graphqlClient";
import { cn /*, toPhoneNumber*/ } from "../../helpers";
import { styles } from "../../styles";
import { PrimaryButton } from "../Button/PrimaryButton";
import { AttendeeField, type FieldName } from "./AttendeeField";
import { SessionField } from "./SessionField";

export type Booking = Input<typeof BookingSchema>;

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

export const BookingForm = () => {
  const [, { Form, Field }] = useForm<Booking>({
    validate: valiForm(BookingSchema),
  });

  const navigate = useNavigate();

  const handleSubmit: SubmitHandler<Booking> = useCallback(
    (booking) => {
      void (async () => {
        const data = await graphqlClient.request<{
          createBooking: {
            id: string;
          };
        }>(
          /* GraphQL */ `
            mutation CreateBooking(
              $datetime: DateTime!
              $firstName: String!
              $lastName: String!
              $organization: String!
              $organizationTitle: String!
              $email: String!
              $tel: String!
            ) {
              createBooking(
                datetime: $datetime
                firstName: $firstName
                lastName: $lastName
                organization: $organization
                organizationTitle: $organizationTitle
                email: $email
                tel: $tel
              ) {
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

        navigate("/thanks");
      })();
    },
    [navigate],
  );

  return (
    <Element name="form">
      <Form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <Field name="datetime">
          {(field, props) => (
            <SessionField
              datetime="2023-11-23T16:00:00.000Z"
              fieldProps={props}
            />
          )}
        </Field>

        <div
          className={cn(
            styles.bleeding.middle,
            "-my-2 flex flex-col gap-2 py-2",
          )}
        >
          <h2 className={cn(styles.heading.h2, "flex flex-col")}>
            <span>Session du 23 novembre 2023 de 17 h à 19 h</span>

            <span className={styles.heading.sub}>
              Tous les champs sont obligatoires
            </span>
          </h2>

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
                      <AttendeeField field={field} fieldProps={props} />
                    )}
                  </Field>
                );
              }
            })}
          </div>

          <div className="flex justify-center lg:justify-end">
            <PrimaryButton type="submit">Confirmer</PrimaryButton>
          </div>
        </div>
      </Form>
    </Element>
  );
};
