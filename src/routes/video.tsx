import { Link } from "react-router-dom";

import { cn } from "../helpers";
import { useDocumentTitle } from "../hooks";
import { styles } from "../styles";

export const Video = () => {
  useDocumentTitle("Vidéo de présentation");

  return (
    <div className="absolute inset-0 flex h-screen w-screen flex-col items-center justify-center gap-1 bg-black">
      <iframe
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="h-[calc(100vh_-_10rem)] w-[calc(100vw_-_5rem)]"
        frameBorder="0"
        src="https://www.youtube-nocookie.com/embed/Ky2htR6MKiw?si=oWqkiIOVetJnNJZe&autoplay=1"
        title="Vidéo de présentation"
      />

      <Link
        className={cn(
          styles.outline("white"),
          "rounded-full bg-gray px-1 py-0.5 font-bold text-black hover:bg-blue",
        )}
        to="/"
      >
        Revenir au site
      </Link>
    </div>
  );
};
