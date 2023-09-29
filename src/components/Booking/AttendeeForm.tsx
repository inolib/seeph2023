import { useId } from "react";

export const AttendeeForm = () => {
  const id = useId();

  return (
    <ul className="flex flex-col gap-1">
      <li className="flex flex-col" role="none">
        <label htmlFor={`${id}-firstname`}>Prénom</label>

        <input
          className="max-w-50 border border-solid border-black p-0.25"
          id={`${id}-firstname`}
          name="firstname"
          required
          type="text"
        />
      </li>

      <li className="flex flex-col" role="none">
        <label htmlFor={`${id}-lastname`}>Nom de famille</label>

        <input
          className="max-w-50 border border-solid border-black p-0.25"
          id={`${id}-lastname`}
          name="name"
          required
          type="text"
        />
      </li>

      <li className="flex flex-col" role="none">
        <label htmlFor={`${id}-company`}>Entreprise</label>

        <input
          className="max-w-50 border border-solid border-black p-0.25"
          id={`${id}-company`}
          name="company"
          required
          type="text"
        />
      </li>

      <li className="flex flex-col" role="none">
        <label htmlFor={`${id}-jobTitle`}>Fonction</label>

        <input
          className="max-w-50 border border-solid border-black p-0.25"
          id={`${id}-jobTitle`}
          name="jobTitle"
          required
          type="text"
        />
      </li>

      <li className="flex flex-col" role="none">
        <label htmlFor={`${id}-email`}>Adresse e-mail</label>

        <input
          className="max-w-50 border border-solid border-black p-0.25"
          id={`${id}-email`}
          name="email"
          required
          type="email"
        />
      </li>

      <li className="flex flex-col" role="none">
        <label htmlFor={`${id}-phone`}>Numéro de téléphone</label>

        <input
          className="max-w-50 border border-solid border-black p-0.25"
          id={`${id}-phone`}
          name="phone"
          pattern="\+\d+"
          placeholder="Format : +33123456789"
          required
          type="tel"
        />
      </li>
    </ul>
  );
};
