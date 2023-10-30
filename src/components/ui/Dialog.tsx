import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  type DetailedHTMLProps,
  type DialogHTMLAttributes,
  type RefObject,
} from "react";

export type Handle = {
  close: (value?: string | undefined) => void;
  open: () => void;
  value: () => string | undefined;
};

type Props = Omit<
  DetailedHTMLProps<DialogHTMLAttributes<HTMLDialogElement>, HTMLDialogElement>,
  "aria-modal" | "tabIndex"
> & {
  readonly modal?: boolean | undefined;
};

type Ref = RefObject<HTMLDialogElement>;

const closeDialog =
  (ref: Ref): Handle["close"] =>
  (value) => {
    ref.current?.close(value);
  };

const openDialog =
  (ref: Ref, modal: boolean): Handle["open"] =>
  () => {
    if (modal) {
      ref.current?.showModal();
    } else {
      ref.current?.show();
    }
  };

const returnValue =
  (ref: Ref): Handle["value"] =>
  () => {
    return ref.current?.returnValue;
  };

export const Dialog = forwardRef<Handle, Props>(
  ({ children, modal = true, open = false, ...rest }, ref) => {
    const _ref = useRef<HTMLDialogElement>(null);

    useImperativeHandle(
      ref,
      () => ({
        close: closeDialog(_ref),
        open: openDialog(_ref, modal),
        value: returnValue(_ref),
      }),
      [modal],
    );

    useEffect(() => {
      if (open) {
        openDialog(_ref, modal)();
      }
    });

    return (
      <dialog aria-modal={modal} ref={_ref} {...rest}>
        {children}
      </dialog>
    );
  },
);

Dialog.displayName = "Dialog";
