import { Landmark } from "../ui/Landmark/Landmark";

type Props = {
  content: string;
  heading: string;
  imageUrl: string;
};

export const ObjectiveCard = ({ content, heading, imageUrl }: Props) => {
  return (
    <div className="my-12">
      <img alt="" className="" src={imageUrl} />

      <Landmark.Heading className="my-7 text-3xl">{heading}</Landmark.Heading>

      <p className="text-xl">{content}</p>
    </div>
  );
};
