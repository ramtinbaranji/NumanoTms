import * as React from "react";
import "./svg-icon.less";
import { icons } from "./icons";

interface Props {
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "2x" | "3x" | "4x" | "5x" | "6x" | "7x";
  iconName: keyof typeof icons;
  className?: string;
  color?: "success" | "dark" | "danger" | "primary" | "warning" | "white" | "gray-light" | "green-dark" | string;
}

export default class DKSVGIcon extends React.Component<Props> {
  render(): JSX.Element {
    return (
      <span
        className={`svg-icon svg-icon-${this.props.color} svg-icon-${this.props.size} ${
          this.props.className ? this.props.className : ""
        }`}
      >
        <svg
          xmlnsXlink="http://www.w3.org/2000/xlink"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          version="1.1"
        >
          {icons[this.props.iconName]}
        </svg>
      </span>
    );
  }
}
