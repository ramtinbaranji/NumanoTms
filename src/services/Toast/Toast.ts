import { toast, ToastOptions } from "react-toastify";

class Toast {
  position: "bottom-right" | "top-right" | "top-center" | "top-left" | "bottom-center" | "bottom-left" | undefined =
    "bottom-right";
  toastSubmitOptions: ToastOptions = { autoClose: 500, position: "bottom-right" };

  error = (message: string | undefined, lang: string): void => {
    if (lang === "en") {
      toast.error(message, { position: "bottom-right" });
    } else {
      toast.error(message, { position: "bottom-left" });
    }
  };

  success = (message: string | undefined, lang: string): void => {
    if (lang === "en") {
      toast.success(message, { position: "bottom-right" });
    } else {
      toast.success(message, { position: "bottom-left" });
    }
  };

  info = (message: string | undefined, lang: string): void => {
    if (lang === "en") {
      toast.info(message, { position: "bottom-right" });
    } else {
      toast.info(message, { position: "bottom-left" });
    }
  };
  warn = (message: string | undefined, lang: string): void => {
    if (lang === "en") {
      toast.warn(message, { position: "bottom-right" });
    } else {
      toast.warn(message, { position: "bottom-left" });
    }
  };
}
export default new Toast();
