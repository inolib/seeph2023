type Props = {
  headingContent: string;
  children: string;
};

export const ProgramCard = ({ headingContent, children }: Props) => {
  return (
    <div className="my-4 w-11/12 rounded-b-3xl px-4 text-black">
      <h3 className="text-3xl font-bold">{headingContent}</h3>
      <p className="my-4 text-xl">{children}</p>
    </div>
  );
};
