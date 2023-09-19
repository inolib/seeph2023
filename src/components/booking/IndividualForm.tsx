export const IndividualForm = () => {
  return (
    <div>
      <div className="my-4 flex flex-col">
        <label htmlFor="gender">Genre</label>
        <input
          className="border border-solid border-black sm:w-2/3 lg:w-1/3"
          id="gender"
          name="gender"
          required
          type="text"
        />
      </div>

      <div className="my-4 flex flex-col">
        <label htmlFor="firstname">Prénom</label>
        <input
          className="border border-solid border-black sm:w-2/3 lg:w-1/3"
          id="firstname"
          name="firstname"
          required
          type="text"
        />
      </div>

      <div className="my-4 flex flex-col">
        <label htmlFor="name">Nom</label>
        <input
          className="border border-solid border-black sm:w-2/3 lg:w-1/3"
          id="name"
          name="name"
          required
          type="text"
        />
      </div>

      <div className="my-4 flex flex-col">
        <label htmlFor="society">Entreprise</label>
        <input
          className="border border-solid border-black sm:w-2/3 lg:w-1/3"
          id="society"
          name="society"
          required
          type="text"
        />
      </div>

      <div className="my-4 flex flex-col">
        <label htmlFor="fonction">Fonction</label>
        <input
          className="border border-solid border-black sm:w-2/3 lg:w-1/3"
          id="fonction"
          name="fonction"
          required
          type="text"
        />
      </div>

      <div className="my-4 flex flex-col">
        <label htmlFor="email">E-mail</label>
        <input
          className="border border-solid border-black sm:w-2/3 lg:w-1/3"
          id="email"
          name="email"
          required
          type="email"
        />
      </div>

      <div className="my-4 flex flex-col">
        <label htmlFor="tel">Téléphone</label>
        <input
          className="border border-solid border-black sm:w-2/3 lg:w-1/3"
          id="tel"
          name="tel"
          required
          type="tel"
        />
      </div>
    </div>
  );
};
