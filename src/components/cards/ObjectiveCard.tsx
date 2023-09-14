import { Landmark } from "../ui/Landmark/Landmark";

type Props = {
  content: string;
  heading: string;
  imageUrl: string;
};

export const ObjectiveCard = ({ content, heading, imageUrl }: Props) => {
  return (
    <div className="">
      <img alt="" className="" src={imageUrl} />

      <Landmark.Heading className="">{heading}</Landmark.Heading>

      <p className="">{content}</p>
    </div>
  );
};
