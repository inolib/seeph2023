type Props = {
  headingContent: string;
  children: string;
};

export const ProgramCard = ({ headingContent, children }: Props) => {
  return (
    <div className="background my-12 w-11/12 rounded-b-3xl p-4 text-white">
      <h3 className="text-3xl font-bold">{headingContent}</h3>
      <p className="my-4 text-xl">{children}</p>
    </div>
  );
};
