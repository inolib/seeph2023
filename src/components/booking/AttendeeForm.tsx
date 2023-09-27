import { useId } from "react";

export const AttendeeForm = () => {
  const id = useId();

  return (
    <ul className="flex flex-col gap-1">
      <li className="flex max-w-input flex-col gap-0.25">
        <label htmlFor={`${id}-firstname`}>Prénom</label>
        <input
          className="border border-solid border-black px-0.5 py-0.25"
          id={`${id}-firstname`}
          name="firstname"
          required
          type="text"
        />
      </li>

      <li className="flex max-w-input flex-col gap-0.25">
        <label htmlFor={`${id}-lastname`}>Nom de famille</label>
        <input
          className="border border-solid border-black px-0.5 py-0.25"
          id={`${id}-lastname`}
          name="name"
          required
          type="text"
        />
      </li>

      <li className="flex max-w-input flex-col gap-0.25">
        <label htmlFor={`${id}-company`}>Entreprise</label>
        <input
          className="border border-solid border-black px-0.5 py-0.25"
          id={`${id}-company`}
          name="company"
          required
          type="text"
        />
      </li>

      <li className="flex max-w-input flex-col gap-0.25">
        <label htmlFor={`${id}-jobTitle`}>Fonction</label>
        <input
          className="border border-solid border-black px-0.5 py-0.25"
          id={`${id}-jobTitle`}
          name="jobTitle"
          required
          type="text"
        />
      </li>

      <li className="flex max-w-input flex-col gap-0.25">
        <label htmlFor={`${id}-email`}>Adresse e-mail</label>
        <input
          className="border border-solid border-black px-0.5 py-0.25"
          id={`${id}-email`}
          name="email"
          required
          type="email"
        />
      </li>

      <li className="flex max-w-input flex-col gap-0.25">
        <label className="flex justify-between gap-3" htmlFor={`${id}-phone`}>
          Numéro de téléphone
          <span>(format : +33123456789)</span>
        </label>
        <input
          className="border border-solid border-black px-0.5 py-0.25"
          id={`${id}-phone`}
          name="phone"
          pattern="\+\d+"
          required
          type="tel"
        />
      </li>
    </ul>
  );
};
