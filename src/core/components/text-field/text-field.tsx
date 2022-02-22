import * as React from "react";
import { ReactElement } from "react";
import Util from "src/utilities/utilities";
import "./text-field.less";

interface Props {
  label?: string;
  value: any;
  readonly: boolean;
}

const DkgTextField = ({ label: Persianlabel, value, readonly }: Props): ReactElement => {
  return (
    <>
      <div className="text-container">
        <span className="label-textField">{Persianlabel}</span>
        <span className="value-textField">{value ? Util.toPersianNumber(String(value)) : "--"}</span>
      </div>
    </>
  );
};
export default DkgTextField;
