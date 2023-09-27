type Props = {
  label: string;
};

export const SecondaryButton = ({ label }: Props) => {
  return (
    <button className="" type="button">
      {label}
    </button>
  );
};
