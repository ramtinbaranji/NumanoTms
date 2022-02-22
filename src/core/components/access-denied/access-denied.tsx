import React from "react";
import { WithTranslation, withTranslation } from "react-i18next";
import AccessDeniedImage from "./../../../assets/img/403.gif";
export interface Props {
  status: number;
  text?: string;
  match?: any;
}

class AccessDenied extends React.Component<WithTranslation & Props> {
  t: any = this.props.t;
  public constructor(props: any) {
    super(props);
  }

  public async componentDidMount(): Promise<void> {
    document.getElementById("root")!.className = "";
  }

  public render(): React.ReactNode {
    const status = this.props.status ? this.props.status : Number(this.props.match?.params?.status);
    const text = status === 403 ? this.t("Pages.accessDenied.restrictedPermission") : this.props.text;
    return (
      <div>
        {(status === 401 || status === 403 || status === 404) && (
          <div>
            {" "}
            <img style={{ margin: "0 auto", display: "block" }} src={AccessDeniedImage} alt="access denied" />
          </div>
        )}
        {status === 204 && (
          <div className="row">
            <div className="row">
              <img src={AccessDeniedImage} alt="access denied" />
            </div>
          </div>
        )}
        <h3 style={{ textAlign: "center" }}>{text}</h3>
      </div>
    );
  }
}
export default withTranslation()(AccessDenied);
