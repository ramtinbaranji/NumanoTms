import React from "react";
import { useWindowSize } from "src/hooks/useWindowSize";
import "./general-table.scss";
interface Props {
  item: any;
  myWidth: string;
}
const TableHeadItem = ({ item, myWidth }: Props): any => {
  const isMobile = useWindowSize(992);
  return (
    <td
      className="thead dk-table-column"
      style={{ width: myWidth }}
      title={item}
      align={!isMobile ? "center" : "right"}
    >
      {item}
    </td>
  );
};

export default TableHeadItem;
