import * as React from "react";
import { WithTranslation, withTranslation } from "react-i18next";
import { Context } from "src/AppContext";
import "./base.dark.css";
import "./sidebar.css";

interface State {
  chosenIndex: number;
  tabs: any[];
}
interface Props {
  open: boolean;

  onOpenDrawer: (st: any) => void;
}

class Sidebar extends React.Component<WithTranslation & Props, State> {
  public constructor(props: any) {
    super(props);
    this.state = {
      chosenIndex: 0,
      tabs: ["Home", "Objective", "Requested", "Shared", "ManagerOverView"],
    };
  }

  render(): JSX.Element {
    return (
      <div className="kt-aside  kt-aside--fixed  kt-grid__item kt-grid kt-grid--desktop kt-grid--hor-desktop"></div>
    );
  }
}
Sidebar.contextType = Context;
export default withTranslation()(Sidebar);
