export const IndividualForm = () => {
  return (
    <div>
      <div className="my-4 flex flex-col">
        <label htmlFor="gender">Genre</label>
        <input
          className="border border-solid border-black"
          id="gender"
          name="gender"
          required
          type="text"
        />
      </div>

      <div className="my-4 flex flex-col">
        <label htmlFor="firstname">Prénom</label>
        <input
          className="border border-solid border-black"
          id="firstname"
          name="firstname"
          required
          type="text"
        />
      </div>

      <div className="my-4 flex flex-col">
        <label htmlFor="name">Nom</label>
        <input
          className="border border-solid border-black"
          id="name"
          name="name"
          required
          type="text"
        />
      </div>

      <div className="my-4 flex flex-col">
        <label htmlFor="fonction">Fonction</label>
        <input
          className="border border-solid border-black"
          id="fonction"
          name="fonction"
          required
          type="text"
        />
      </div>

      <div className="my-4 flex flex-col">
        <label htmlFor="email">E-mail</label>
        <input
          className="border border-solid border-black"
          id="email"
          name="email"
          required
          type="email"
        />
      </div>

      <div className="my-4 flex flex-col">
        <label htmlFor="tel">Téléphone</label>
        <input
          className="border border-solid border-black"
          id="tel"
          name="tel"
          required
          type="tel"
        />
      </div>
    </div>
  );
};
