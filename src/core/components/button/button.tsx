import * as React from "react";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  type?: "submit" | "cancel" | "delete" | "edit";
  size?: "sm" | "lg" | "tall" | "normal";
  isWide?: boolean;
  disabled?: boolean;
  outline?: "outline" | "label" | "hover" | "none";
  children?: React.ReactNode;
  loading?: boolean;
  className?: string;
}

export function DKButton({
  type,
  outline = "none",
  disabled = false,
  isWide = false,
  size = "normal",
  children,
  className,
  loading = false,
  ...other
}: Props): JSX.Element {
  let btnClass = "btn font-weight-bold ";
  let classType = "";
  switch (type) {
    case "submit": {
      classType = "primary";
      break;
    }

    case "delete": {
      classType = "danger";
      break;
    }

    case "cancel": {
      classType = "secondary";
      break;
    }

    case "edit": {
      classType = "info";
      break;
    }

    default: {
      break;
    }
  }

  if (outline === "outline") btnClass += " btn-outline-" + classType;

  if (outline === "hover") btnClass += ` btn-hover-text-white btn-text-${classType} btn-hover-bg-${classType}`;
  else if (outline === "label") btnClass += " btn-light-" + classType;
  else btnClass += " btn-" + classType;

  if (size !== "normal") btnClass += " btn-" + size;
  if (isWide) btnClass += " btn-block";

  if (loading) btnClass += " spinner spinner-white spinner-right";

  btnClass += " " + className;
  return (
    <button disabled={loading || disabled} className={btnClass} {...other}>
      {children}
    </button>
  );
}
