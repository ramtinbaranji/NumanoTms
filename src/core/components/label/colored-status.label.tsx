import * as React from "react";

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  type: string | undefined;
}

export function DKColoredStatus({ type, ...other }: Props): JSX.Element {
  let className = "";
  switch (type) {
    case "Accepted": {
      className += "success";
      break;
    }
    case "Rejected": {
      className += "danger";
      break;
    }
    case "Canceled": {
      className += "danger";
      break;
    }
    case "Pending": {
      className += "primary";
      break;
    }

    default: {
      break;
    }
  }

  return (
    <div {...other}>
      <span className={`kt-badge kt-badge--${className} kt-badge--dot mb-1`}></span>&nbsp;
      <span className={`kt-font-bold kt-font-${className}`}>{type}</span>
    </div>
  );
}
