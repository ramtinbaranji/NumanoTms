import { ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary } from "@material-ui/core";
import * as React from "react";
import { ReactElement } from "react";
import DKSVGIcon from "../svg-icon/svg-icon";
import "./accordion.less";

export interface DKAccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  children: React.ReactNode;
  color?: string;
  imgSrc?: string;
}
const DKAccordion = ({ children, title = "", color = "", imgSrc = "" }: DKAccordionProps): ReactElement => {
  return (
    <ExpansionPanel className="card">
      <ExpansionPanelSummary
        className="card-header"
        aria-controls="panel1a-content"
        id="panel1a-header"
        expandIcon={<DKSVGIcon iconName={"Angle-double-left"} size="sm" color="red"></DKSVGIcon>}
      >
        <h3 className={"card-title  text-dark " + color}>
          {imgSrc && <img className="w-60px" alt={title} src={imgSrc} />}
          <span className="mx-2">{title}</span>
        </h3>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className="">
        <div className="card-body pt-3 ">
          <p>{children}</p>
        </div>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default DKAccordion;
