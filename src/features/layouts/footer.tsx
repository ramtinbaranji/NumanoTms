import * as React from "react";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import DKSVGIcon from "src/core/components/svg-icon/svg-icon";

const Footer = (): ReactElement => {
  const { t } = useTranslation();
  return (
    <>
      <div className="footer bg-white py-4 d-flex flex-lg-column ">
        <div className=" container  d-flex flex-column flex-md-row align-items-center justify-content-between">
          <div className="text-dark order-2 order-md-1">
            <a href="https://aura.digikala.com/hris/" className="text-dark-75 text-hover-primary mx-2">
              Digikala
            </a>
            <span className="text-muted font-weight-bold">2021©</span>
          </div>

          <div className="nav nav-dark order-1 order-md-2">
            <span className="nav-link px-2">{t("Footer.getInTouch")}: </span>
            <a href="mailto:mohsen.alipour@digikala.com" className="nav-link px-5">
              <DKSVGIcon className="px-1" iconName="mail" size="md" color="grey"></DKSVGIcon>
              {t("Footer.admin2")}
            </a>
            <div className="nav-link px-2">
              <DKSVGIcon className="px-1" iconName="Call#1" size="md" color="grey"></DKSVGIcon>
              {t("Footer.admin2tel")}
            </div>
            <a href="mailto:a.malekan@digikala.com" className="nav-link px-5">
              <DKSVGIcon className="px-1" iconName="mail" size="md" color="grey"></DKSVGIcon>
              {t("Footer.admin3")}
            </a>
            <div className="nav-link px-2">
              <DKSVGIcon className="px-1" iconName="Call#1" size="md" color="grey"></DKSVGIcon>
              {t("Footer.admin3tel")}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
