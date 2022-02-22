import React from "react";
import { useLocation } from "react-router-dom";
import DKSVGIcon from "src/core/components/svg-icon/svg-icon";
import { useWindowSize } from "src/hooks/useWindowSize";
import "./general-table.scss";

interface Props {
  data: any;
  myWidth?: any;
  className?: any;
}

const TableRow = ({ data, myWidth, className }: Props): any => {
  const isMobile = useWindowSize(992);
  const location = useLocation();
  return (
    <tr className={className}>
      {data.map((item: any, index: any) => {
        const color = item.active ? "#0cbc8b" : "#888888";
        return (
          <td
            className={`py-5 dk-table-column ${
              location.pathname === "/requests/my-requests" && index == 0 ? "" : "font-family-iranyekan"
            } ${item.active ? `active ${item?.active ? "text-primary" : ""}` : "deactive"} ${
              index === 0 || index === 1 ? "font-size-lg-h6 font-weight-bold" : ""
            }`}
            key={item}
            style={{ width: myWidth[index] }}
            align={!isMobile ? "center" : "right"}
          >
            {item.data === "view" ? (
              <div className="cursor-pointer" onClick={item?.onViewClick}>
                <DKSVGIcon iconName="Eye" size="xl" color={color} />
              </div>
            ) : (
              item.data
            )}
          </td>
        );
      })}
    </tr>
  );
};

export default TableRow;
