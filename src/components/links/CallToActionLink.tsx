import { Link } from "react-router-dom";

type Props = {
  label: string;
};

export const CallToActionLink = ({ label }: Props) => {
  return (
    <Link className="rounded-3xl bg-cyan-400 px-4 py-2 text-2xl" to="">
      {label}
    </Link>
  );
};
