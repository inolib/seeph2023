import { cn } from "./helpers";

export const styles = {
  background: {
    gradientToBlue: cn("bg-gradient-to-b from-purple to-blue-dark text-white"),
    gradientToPurple: cn(
      "bg-gradient-to-b from-blue-dark to-purple text-white",
    ),
  },
  bleeding: {
    bottom: cn(
      "-mx-1 -mb-1 -mt-2 px-1 pb-1 pt-2 md:-mx-2 md:px-2 xl:-mx-4 xl:px-4",
    ),
    middle: cn("-mx-1 -my-4 px-1 py-4 md:-mx-2 md:px-2 xl:-mx-4 xl:px-4"),
    top: cn(
      "-mx-1 -mb-2 -mt-1 px-1 pb-2 pt-1 md:-mx-2 md:px-2 xl:-mx-4 xl:px-4",
    ),
  },
  heading: {
    h1: cn("max-w-xs text-3xl font-bold"),
    h2: cn("text-3xl font-bold"),
    h3: cn("text-xl font-bold text-blue-dark"),
    sub: cn("text-lg font-bold"),
  },
  link: cn("underline"),
  separator: {
    center: cn("before:inset-x-0 before:mx-auto"),
    right: cn("before:right-0"),
    blue: cn(
      "relative before:absolute before:bottom-[-0.875rem] before:h-[0.25rem] before:w-3 before:bg-blue",
    ),
    turquoise: cn(
      "relative before:absolute before:bottom-[-0.875rem] before:h-[0.25rem] before:w-3 before:bg-turquoise",
    ),
  },
  shrink: cn("sm:max-w-80 md:max-w-70 lg:max-w-60 xl:max-w-50"),
  tab: {
    left: cn(
      "relative before:absolute before:left-0 before:top-0 before:h-2 before:w-[50%] before:rounded-br-[1.5rem] before:bg-white after:absolute after:left-[50%] after:top-0 after:z-0 after:h-2 after:w-2 after:rounded-tl-[1.5rem] after:shadow-[-1.5rem_-1.5rem_0_0] after:shadow-white",
    ),
    right: cn(
      "relative before:absolute before:-top-4 before:right-0 before:-mr-1 before:h-2 before:w-[calc(50%_+_1.5rem)] before:rounded-tl-[1.5rem] before:bg-white after:absolute after:-top-4 after:right-[50%] after:h-2 after:w-2 after:rounded-br-[1.5rem] after:shadow-[1.5rem_1.5rem_0_0] after:shadow-white md:before:-mr-2 md:after:right-[calc(50%_-_1.5rem)] xl:before:-mr-4 xl:after:right-[calc(50%_-_4.5rem)]",
    ),
  },
};
