import * as React from "react";
import { ReactElement } from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
interface Props {
  imageUrl?: string;
  type?: "circle" | "square";
  size: number;
  textLabel?: string;
  userId?: number;
  outline?: boolean;
  className?: string;
  isSymbol?: boolean;
  children?: React.ReactNode | React.ReactNode[];
  hasLink?: boolean;
}

const DKAvatar = ({
  imageUrl,
  textLabel,
  type = "square",
  size,
  userId = 0,
  outline = false,
  className,
  isSymbol = true,
  children,
  hasLink = false,
}: Props): ReactElement => {
  return (
    <div
      // to={`/profile${userName ? "/" + userName : ""}`}
      className={className}
      style={{ pointerEvents: hasLink ? "inherit" : "none" }}
    >
      <div
        className={
          (isSymbol ? "symbol symbol-light-dark symbol-" + size : "image-input ") +
          (type === "circle" ? " symbol-circle" : "") +
          (outline ? " image-input-outline" : "")
        }
        style={{ minHeight: size + "px" }}
      >
        <Link className="text-dark cursor-pointer" to={`/user/${userId}`}>
          {" "}
          {Boolean(imageUrl) ? (
            <div
              className={isSymbol ? " symbol-label " : " image-input-wrapper h-" + size + "px w-" + size + "px"}
              style={{
                backgroundImage: `url(${imageUrl})`,
                backgroundPosition: "center center",
                backgroundSize: "cover",
              }}
            ></div>
          ) : (
            <span className="symbol-label text-primary font-size-h6">{textLabel}</span>
          )}
        </Link>

        {children}
      </div>
    </div>
  );
};
export default DKAvatar;
