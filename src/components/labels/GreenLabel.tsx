type Props = {
  label: string;
};

export const GreenLabel = ({ label }: Props) => {
  return (
    <span className="rounded-md bg-green-500 p-2 text-white">{label}</span>
  );
};
