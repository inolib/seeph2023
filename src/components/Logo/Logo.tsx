type Props = {
  ignored?: boolean | undefined;
};

export const Logo = ({ ignored = false }: Props) => {
  return <img alt={ignored ? "" : "INOLIB"} src="/logos/inolib.svg" />;
};
