import type { JSX } from "react";

import { cn } from "../../helpers";
import { styles } from "../../styles";

type Props = JSX.IntrinsicElements["a"];

export const ExternalLink = ({ children, className, ...rest }: Props) => {
  return (
    <a
      className={cn(styles.outline("black"), className)}
      rel="noreferrer"
      {...rest}
    >
      {children}
    </a>
  );
};
