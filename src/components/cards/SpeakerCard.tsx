type Props = {
  jobTitle: string;
  name: string;
  photoUrl: string;
};

export const SpeakerCard = ({ jobTitle, name, photoUrl }: Props) => {
  return (
    <div className="">
      <p className="">{name}</p>

      <p className="">{jobTitle}</p>

      <img alt="" className="" src={photoUrl} />
    </div>
  );
};
