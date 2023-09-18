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
      <p className="my-4 text-2xl ">
        <span className="font-bold">{name}</span>,<br /> {jobTitle}
      </p>

      <img alt="" className="mx-auto h-60 w-60" src={photoUrl} />

      <p className="my-4 text-right text-2xl italic">{quote}</p>

      <p className="text-right text-2xl font-bold italic">{quoteAuthor}</p>
    </div>
  );
};
