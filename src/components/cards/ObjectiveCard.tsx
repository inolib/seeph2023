import { Landmark } from "../ui/Landmark/Landmark";

type Props = {
  content: string;
  heading: string;
  imageUrl: string;
};

export const ObjectiveCard = ({ content, heading, imageUrl }: Props) => {
  return (
    <div className="my-12 text-left">
      <div className="flex gap-8 text-xl font-bold ">
        <img alt="" className="h-14 w-14 " src={imageUrl} />

        <Landmark.Heading className="">{heading}</Landmark.Heading>
      </div>

      <p className="my-4 text-xl">{content}</p>
    </div>
  );
};
