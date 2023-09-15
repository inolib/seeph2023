type Props = {
  headingContent: string;
  children: string;
};

export const ProgramCard = ({ headingContent, children }: Props) => {
  return (
    <div className="my-12">
      <h3 className="text-3xl text-indigo-700">{headingContent}</h3>
      <p className="my-4 text-xl">{children}</p>
    </div>
  );
};
