import React, { ReactElement } from "react";
import EMPTY from "src/assets/img/empty.svg";
import "./no-content-benefit.css";

interface Props {
  msg?: string;
  size?: number;
}

const NoContentBenefit = ({ msg, size = 120 }: Props): ReactElement => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center align-self-center py-6">
      <img src={EMPTY} width={`${size}px`} />
      <div className="mt-4 font-weight-bold font-size-h5 text-dark blink-me">{msg ? msg : "نتیجه‌ای پیدا نشد"}</div>
    </div>
  );
};
export default NoContentBenefit;
