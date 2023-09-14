import { Link } from "react-router-dom";

type Props = {
  label: string;
};

export const CallToActionLink = ({ label }: Props) => {
  return (
    <Link className="" to={}>
      {label}
    </Link>
  );
};
