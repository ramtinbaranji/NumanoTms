import { Typography } from "@material-ui/core";
import React, { ReactElement } from "react";

import "./page-title.scss";

interface Props {
  data: string[];
}

const PageTitle = ({ data }: Props): ReactElement => {
  const currentPage = data[data?.length - 1];
  return (
    <div className="page-title rounded-xl py-8 px-8 py-lg-12 px-lg-12">
      <Typography className="font-size-h4 font-size-lg-h2 text-dark font-weight-bold mb-0">{currentPage}</Typography>
      <div className="d-flex align-items-center text-dark font-weight-normal font-size-sm font-size-lg-base">
        {data?.map((item, index) => {
          return (
            <>
              <Typography className="mx-1 mb-0" key={index}>
                {item}
              </Typography>
              <Typography className="mb-0">{`${index !== data?.length - 1 ? ">" : ""}`}</Typography>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default PageTitle;
