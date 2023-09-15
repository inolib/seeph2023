import { Link } from "react-router-dom";

type Props = {
  label: string;
};

export const CallToActionLink = ({ label }: Props) => {
  return (
    <Link to="" className="rounded-3xl bg-cyan-400 p-4 text-2xl">
      {label}
    </Link>
  );
};
