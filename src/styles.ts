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
      "-mx-1 -mb-1 -mt-2 px-1 pb-1 pt-2 lg:-mx-2 lg:px-2 xl:-mx-4 xl:px-4",
    ),
    middle: cn("-mx-1 -my-2 px-1 py-2 lg:-mx-2 lg:px-2 xl:-mx-4 xl:px-4"),
    top: cn(
      "-mx-1 -mb-2 -mt-1 px-1 pb-2 pt-1 lg:-mx-2 lg:px-2 xl:-mx-4 xl:px-4",
    ),
  },
  heading: {
    h1: cn("max-w-[20ch] text-3xl font-bold"),
    h2: cn("text-2xl font-bold"),
    h3: cn("text-xl font-bold text-blue-dark"),
    sub: cn("text-lg font-bold"),
  },
  separator: {
    center: cn("before:inset-x-0 before:mx-auto"),
    blue: cn(
      "relative before:absolute before:bottom-[-0.875rem] before:h-[0.25rem] before:w-6 before:bg-blue",
    ),
    turquoise: cn(
      "relative before:absolute before:bottom-[-0.875rem] before:h-[0.25rem] before:w-6 before:bg-turquoise",
    ),
  },
  shrink: cn("sm:max-w-80 md:max-w-70 lg:max-w-60 xl:max-w-50"),
};
