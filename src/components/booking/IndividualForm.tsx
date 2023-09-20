import { useId } from "react";

export const IndividualForm = () => {
  const id = useId();

  return (
    <div>
      <div className="my-4 flex flex-col">
        <label htmlFor={`${id}-gender`}>Genre</label>
        <input
          className="border border-solid border-black sm:w-2/3 lg:w-1/3"
          id={`${id}-gender`}
          name="gender"
          required
          type="text"
        />
      </div>

      <div className="my-4 flex flex-col">
        <label htmlFor={`${id}-firstname`}>Prénom</label>
        <input
          className="border border-solid border-black sm:w-2/3 lg:w-1/3"
          id={`${id}-firstname`}
          name="firstname"
          required
          type="text"
        />
      </div>

      <div className="my-4 flex flex-col">
        <label htmlFor={`${id}-lastname`}>Nom</label>
        <input
          className="border border-solid border-black sm:w-2/3 lg:w-1/3"
          id={`${id}-lastname`}
          name="name"
          required
          type="text"
        />
      </div>

      <div className="my-4 flex flex-col">
        <label htmlFor={`${id}-company`}>Entreprise</label>
        <input
          className="border border-solid border-black sm:w-2/3 lg:w-1/3"
          id={`${id}-company`}
          name="company"
          required
          type="text"
        />
      </div>

      <div className="my-4 flex flex-col">
        <label htmlFor={`${id}-jobTitle`}>Fonction</label>
        <input
          className="border border-solid border-black sm:w-2/3 lg:w-1/3"
          id={`${id}-jobTitle`}
          name="jobTitle"
          required
          type="text"
        />
      </div>

      <div className="my-4 flex flex-col">
        <label htmlFor={`${id}-email`}>E-mail</label>
        <input
          className="border border-solid border-black sm:w-2/3 lg:w-1/3"
          id={`${id}-email`}
          name="email"
          required
          type="email"
        />
      </div>

      <div className="my-4 flex flex-col">
        <label htmlFor={`${id}-phone`}>Téléphone</label>
        <input
          className="border border-solid border-black sm:w-2/3 lg:w-1/3"
          id={`${id}-phone`}
          name="phone"
          required
          type="tel"
        />
      </div>
    </div>
  );
};
