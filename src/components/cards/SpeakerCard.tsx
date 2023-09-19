type Props = {
  jobTitle: string;
  name: string;
  photoUrl: string;
  quote: string;
  quoteAuthor: string;
};

export const SpeakerCard = ({
  jobTitle,
  name,
  photoUrl,
  quote,
  quoteAuthor,
}: Props) => {
  return (
    <div className="my-8 px-8 text-center">
      <p className="my-4 text-2xl md:text-5xl ">
        <span className="font-bold">{name}</span>,<br /> {jobTitle}
      </p>

      <div className="md:flex md:items-center">
        <img
          alt=""
          className="mx-auto h-60 w-60 md:h-72 md:w-72"
          src={photoUrl}
        />
        <div className="text-right text-2xl italic md:ml-4">
          <p className="my-4 ">{quote}</p>

          <p className="font-bold">{quoteAuthor}</p>
        </div>
      </div>
    </div>
  );
};
