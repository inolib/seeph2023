import { Link, type LinkProps } from "react-router-dom";

import { cn } from "../../helpers";
import { styles } from "../../styles";

type Props = Omit<LinkProps, "to"> & {
  datetime?: string | undefined;
};

export const CallToActionLink = ({
  children,
  className,
  datetime,
  ...rest
}: Props) => {
  return (
    <Link
      className={cn(
        styles.outline("white"),
        "rounded-full bg-turquoise px-1 py-0.5 text-center font-bold text-black hover:bg-blue",
        className,
      )}
      to={`/booking${datetime !== undefined ? `/${datetime}` : ""}`}
      {...rest}
    >
      {children}
    </Link>
  );
};
