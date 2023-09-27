import { Link, type LinkProps } from "react-router-dom";

type Props = Omit<LinkProps, "to">;

export const CallToActionLink = ({ children, className, ...rest }: Props) => {
  return (
    <Link
      className={`rounded-full bg-turquoise px-2 py-1 font-bold text-black hover:bg-blue hover:text-white ${
        className ?? ""
      }`}
      to="/booking"
      {...rest}
    >
      {children}
    </Link>
  );
};
