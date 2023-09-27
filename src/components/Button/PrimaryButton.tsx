type Props = {
  label: string;
};

export const PrimaryButton = ({ label }: Props) => {
  return (
    <button className="" type="button">
      {label}
    </button>
  );
};
