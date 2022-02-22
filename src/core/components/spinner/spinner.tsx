import * as React from "react";
import SpinnerType from "src/entities/spinner-type";
import "./spinner.css";
export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  size?: string;
  children?: React.ReactNode;
  type?: SpinnerType;
}

export function DKSpinner({ children, size = "sm", type, ...other }: Props): JSX.Element {
  return (
    <div className={type === SpinnerType.Overlay ? "overlay-loader" : ""}>
      <div className="d-flex mx-auto  h-100 justify-content-center align-items-center" {...other}>
        <div className={"spinner spinner-track spinner-primary spinner-" + size + " my-4"}></div>
        {children}
      </div>
    </div>
  );
}
