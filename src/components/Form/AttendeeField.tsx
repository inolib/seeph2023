import type { FieldElementProps, FieldStore } from "@modular-forms/react";
import { useId, type JSX } from "react";

import { cn } from "../../helpers";
import { styles } from "../../styles";
import { Alert } from "../ui/Alert";
import type { Booking } from "./BookingForm";

type Field = {
  inputMode?: InputProps["inputMode"];
  label: string;
};

export type FieldName = keyof Omit<Booking, "datetime">;

type InputProps = JSX.IntrinsicElements["input"];

type Props = {
  disabled?: InputProps["disabled"];
  field: FieldStore<Booking, FieldName>;
  fieldProps: FieldElementProps<Booking, FieldName>;
};

const fields: Record<FieldName, Field> = {
  email: {
    inputMode: "email",
    label: "Adresse e-mail",
  },
  firstName: {
    label: "Prénom",
  },
  lastName: {
    label: "Nom de famille",
  },
  organization: {
    label: "Entreprise",
  },
  organizationTitle: {
    label: "Fonction",
  },
  tel: {
    inputMode: "tel",
    label: "Numéro de téléphone",
  },
};

export const AttendeeField = ({ disabled, field, fieldProps }: Props) => {
  const id = useId();
  const fieldId = `${id}-${field.name}`;

  return (
    <div className="flex flex-col">
      <label className={styles.shrink} htmlFor={fieldId}>
        {fields[field.name].label}
      </label>

      <input
        aria-errormessage={`${fieldId}-error`}
        aria-invalid={field.error.value !== ""}
        className={cn(styles.shrink, "border border-solid border-black p-0.25")}
        disabled={disabled}
        id={fieldId}
        inputMode={fields[field.name].inputMode}
        placeholder={field.name === "tel" ? "+33 1 23 45 67 89" : undefined}
        required
        type="text"
        value={field.value.value ?? ""}
        {...fieldProps}
      />

      <Alert className="mt-0.25 text-sm" id={`${fieldId}-error`}>
        {field.error.value}
      </Alert>
    </div>
  );
};