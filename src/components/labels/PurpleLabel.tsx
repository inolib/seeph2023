type Props = {
  label: string;
  labelStyle?: string;
};

export const PurpleLabel = ({ label, labelStyle }: Props) => {
  return (
    <span
      className={`rounded-lg bg-PurpleBG p-2 text-3xl text-white ${labelStyle}`}
    >
      {label}
    </span>
  );
};
