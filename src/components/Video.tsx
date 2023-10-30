import {
  useCallback,
  useRef,
  type ButtonHTMLAttributes,
  type DetailedHTMLProps,
  type HTMLAttributes,
} from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { PrimaryButton } from "./Button/PrimaryButton";
import { Dialog, type Handle as DialogHandle } from "./ui/Dialog";

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type DivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export const Video = ({ ...rest }: DivProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  const dialogRef = useRef<DialogHandle>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const isVideoRoute = location.pathname === "/video";

  const handleCloseDialog: ButtonProps["onClick"] = useCallback(() => {
    dialogRef.current?.close();

    if (iframeRef.current !== null) {
      // eslint-disable-next-line no-self-assign
      iframeRef.current.src = iframeRef.current.src;
    }

    if (isVideoRoute) {
      navigate("/", { replace: true });
    }
  }, [isVideoRoute, navigate]);

  const handleOpenDialog: NonNullable<ButtonProps["onClick"]> =
    useCallback(() => {
      dialogRef.current?.open();
    }, []);

  return (
    <div {...rest}>
      <button
        aria-label="Vidéo de présentation"
        className="w-full"
        onClick={handleOpenDialog}
      >
        <img alt="" className="w-full" src="/illustrations/video.png" />
      </button>

      <Dialog
        className="hidden bg-transparent backdrop:bg-black open:flex open:flex-col open:items-center open:gap-2"
        open={isVideoRoute}
        ref={dialogRef}
      >
        <iframe
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="h-[calc(100vh_-_10rem)] w-[calc(100vw_-_5rem)]"
          frameBorder="0"
          ref={iframeRef}
          src="https://www.youtube-nocookie.com/embed/Ky2htR6MKiw?si=oWqkiIOVetJnNJZe"
          title="Vidéo de présentation"
        />

        <PrimaryButton onClick={handleCloseDialog}>Fermer</PrimaryButton>
      </Dialog>
    </div>
  );
};
