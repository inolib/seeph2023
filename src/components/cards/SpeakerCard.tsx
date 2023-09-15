type Props = {
  jobTitle: string;
  name: string;
  photoUrl: string;
};

export const SpeakerCard = ({ jobTitle, name, photoUrl }: Props) => {
  return (
    <div className="my-8 text-center">
      <p className="my-4 text-2xl">{name}</p>

      <p className="text-2xl">{jobTitle}</p>

      <img alt="" className="" src={photoUrl} />
    </div>
  );
};
