import { useId } from "react";

export const IndividualForm = () => {
  const id = useId();

  // TODO: pattern for phone input

  return (
    <div className="mb-8">
      <div className="my-4 flex flex-col">
        <label className="form-label" htmlFor={`${id}-gender`}>
          Genre
        </label>
        <input
          className="rounded-lg border border-solid border-black p-2 sm:w-2/3 lg:w-2/5"
          id={`${id}-gender`}
          name="gender"
          required
          type="text"
        />
      </div>

      <div className="my-4 flex flex-col">
        <label
          className="after:ml-2 after:text-red-500 after:content-['*']"
          htmlFor={`${id}-firstname`}
        >
          Prénom
        </label>
        <input
          className="rounded-lg border border-solid border-black p-2 sm:w-2/3 lg:w-2/5"
          id={`${id}-firstname`}
          name="firstname"
          required
          type="text"
        />
      </div>

      <div className="my-4 flex flex-col">
        <label
          className="after:ml-2 after:text-red-500 after:content-['*']"
          htmlFor={`${id}-lastname`}
        >
          Nom
        </label>
        <input
          className="rounded-lg border border-solid border-black p-2 sm:w-2/3 lg:w-2/5"
          id={`${id}-lastname`}
          name="name"
          required
          type="text"
        />
      </div>

      <div className="my-4 flex flex-col">
        <label
          className="after:ml-2 after:text-red-500 after:content-['*']"
          htmlFor={`${id}-company`}
        >
          Entreprise
        </label>
        <input
          className="rounded-lg border border-solid border-black p-2 sm:w-2/3 lg:w-2/5"
          id={`${id}-company`}
          name="company"
          required
          type="text"
        />
      </div>

      <div className="my-4 flex flex-col">
        <label
          className="after:ml-2 after:text-red-500 after:content-['*']"
          htmlFor={`${id}-jobTitle`}
        >
          Fonction
        </label>
        <input
          className="rounded-lg border border-solid border-black p-2 sm:w-2/3 lg:w-2/5"
          id={`${id}-jobTitle`}
          name="jobTitle"
          required
          type="text"
        />
      </div>

      <div className="my-4 flex flex-col">
        <label
          className="after:ml-2 after:text-red-500 after:content-['*']"
          htmlFor={`${id}-email`}
        >
          E-mail (format: monadresse@mail.fr)
        </label>
        <input
          className="rounded-lg border border-solid border-black p-2 sm:w-2/3 lg:w-2/5"
          id={`${id}-email`}
          name="email"
          required
          type="email"
        />
      </div>

      <div className="my-4 flex flex-col">
        <label
          className="after:ml-2 after:text-red-500 after:content-['*']"
          htmlFor={`${id}-phone`}
        >
          Téléphone (format: 0123456789)
        </label>
        <input
          className="rounded-lg border border-solid border-black p-2 sm:w-2/3 lg:w-2/5"
          id={`${id}-phone`}
          name="phone"
          required
          type="tel"
        />
      </div>
    </div>
  );
};
