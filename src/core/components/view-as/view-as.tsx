import React, { ReactElement, useContext } from "react";
import AsyncSelect from "react-select/async";
import ViewAsServices from "./view-as-service";
import "./view-as.css";
import UserValue from "./user-value";
import { Context } from "src/AppContext";

const RenderOption = (option: any, theme: "ligth" | "brand"): any => (
  <>
    {option.value && (
      <div className={`${theme} d-flex rtl p-0`}>
        <div className="mr-4">
          <div className="font-weight-bold  mt-2">{option.label === null ? option.Title : option.label}</div>
          <small>
            {" "}
            {option.department}/ {option.subDepartment}
          </small>
        </div>
      </div>
    )}
  </>
);

const ViewAs = (): ReactElement => {
  const viewAsService = new ViewAsServices();
  const appContext = useContext(Context);

  const onSelectAutoComplete = (event: UserValue): void => {
    appContext?.actions.setImpersonated(Number(event.value));
  };

  const loadOptions = async (inputValue: string): Promise<any> => {
    return await viewAsService.getUserInfo(inputValue);
  };

  return (
    <div className="view-as-search d-flex rtl w-100">
      <div className="inline-items w-100 my-auto">
        <AsyncSelect
          // defaultOptions
          noOptionsMessage={() => "اسم فرد مورد نظر را تایپ کن"}
          getOptionLabel={RenderOption as any}
          className="basic-single rtl"
          classNamePrefix="select"
          dir="rtl"
          loadOptions={inputValue => loadOptions(inputValue)}
          isSearchable={true}
          name="SelectedOther"
          onChange={(ev: any) => onSelectAutoComplete(ev)}
          //   options={selectedOption}
          placeholder="مشاهده به عنوان"
        />
      </div>
    </div>
  );
};

export default ViewAs;
