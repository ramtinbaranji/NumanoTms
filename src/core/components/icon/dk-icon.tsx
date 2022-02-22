import KudosIcon from "src/assets/img/icons/wallet-icon.png";

import * as React from "react";
import { ReactElement } from "react";

export type KudosIconType = "Kudos" | "AppNote" | "Vote";

interface Props {
  type: KudosIconType;
  size?: number;
  className?: string;
}
const DKIcon = ({ type, size = 30, className }: Props): ReactElement => {
  const getIcon = (iconType: string): string => {
    switch (iconType) {
      case "Kudos":
        return KudosIcon;

      default:
        return KudosIcon;
    }
  };
  return <img src={getIcon(type)} style={{ width: size + "px", cursor: "pointer" }} className={className}></img>;
};
export default DKIcon;
