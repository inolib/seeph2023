import type { FieldElementProps, FieldStore } from "@modular-forms/react";
import { useId, type JSX } from "react";

import { cn } from "../../helpers";
import type { Booking } from "../../routes/booking";
import { styles } from "../../styles";
import { Alert } from "../ui/Alert";

type Field = {
  inputMode?: JSX.IntrinsicElements["input"]["inputMode"];
  label: string;
};

export type FieldName = keyof Omit<Booking, "datetime">;

type Props = {
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

export const AttendeeField = ({ field, fieldProps }: Props) => {
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
