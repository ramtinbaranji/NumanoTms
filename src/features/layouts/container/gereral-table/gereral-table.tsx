import React, { ReactElement } from "react";
import GeneralTableItem from "./general-table-item";
import TableHeadItem from "./general-thead";
import TableRow from "./gereral-trow";
import "./general-table.scss";
import GeneralTheadItem from "./general-thead-item";

interface Props {
  theadData: GeneralTheadItem[];
  tbodyData: GeneralTableItem[];
  customClass?: string;
}

const GeneralTable = ({ theadData, tbodyData, customClass }: Props): ReactElement => {
  return (
    <div className="general-table-container">
      <div className="table-responsive">
        <table className={customClass + " w-100 dk-table"}>
          <thead>
            <tr className="mx-auto font-family-iranyekan dk-table-row">
              {theadData.map((h: GeneralTheadItem) => {
                return <TableHeadItem key={h.title} item={h.title} myWidth={h.width} />;
              })}
            </tr>
          </thead>
          <tbody className="dk-table-body">
            {tbodyData.map((item: GeneralTableItem) => {
              return (
                <TableRow
                  className="general-table-container__table-row dk-table-row"
                  key={item.id}
                  data={item.items}
                  myWidth={item.width}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GeneralTable;
