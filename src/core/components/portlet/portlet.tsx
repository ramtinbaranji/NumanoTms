import * as React from "react";
import "./portlet.css";
export interface DKPortletProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
  noborder?: boolean;
  className?: string;
  fitBody: boolean;
  headerToolbar?: React.ReactNode;
  footer?: React.ReactNode;
  children?: React.ReactNode;
  hasHeader?: boolean;
}
export function DKPortlet({
  children,
  headerToolbar,
  footer,
  className,
  hasHeader = true,
  noborder = false,
  title = "",
  subtitle = "",
  fitBody = false,
  ...other
}: DKPortletProps): JSX.Element {
  return (
    <div
      className={"kt-portlet kt-portlet--height-fluid " + (noborder ? "kt-portlet__head--noborder " : "") + className}
    >
      {hasHeader && (
        <div className={"kt-portlet__head " + (noborder ? "kt-portlet__head--noborder" : "")}>
          <div className="kt-portlet__head-label">
            <h3 className="kt-portlet__head-title">
              {title}
              <small className="kt-portlet__head-title">{" " + subtitle}</small>
            </h3>
          </div>
          <div className="kt-portlet__head-toolbar"> {headerToolbar}</div>
        </div>
      )}
      <div className={"kt-portlet__body " + (fitBody ? "kt-portlet__body--fit" : "")}>{children}</div>
      {footer && <div className="kt-portlet__foot">{footer}</div>}
    </div>
  );
}
