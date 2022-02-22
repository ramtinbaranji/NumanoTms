import React, { ReactElement } from "react";
import AsyncSelect from "react-select/async";
import SPLists from "src/entities/lists";
import "../view-as/view-as.css";
import AdvanceSelectService from "./advance-select-service";
import AdvanceSelectValue from "./advance-select-value";

interface Props {
  selectedOption?: AdvanceSelectValue;
  onSetSelectedValue: (selected: AdvanceSelectValue) => void;
  size?: string;
  isDisabled?: boolean;
  listName: SPLists;
}

const AdvanceSelectSkill = ({
  selectedOption,
  onSetSelectedValue,
  size,
  isDisabled,
  listName,
}: Props): ReactElement => {
  const advanceSelectService = new AdvanceSelectService();

  const RenderOption = (option: any, theme: "ligth" | "brand"): any => (
    <>
      {option.value && (
        <div className={`${theme} d-flex rtl p-0`}>
          <div className="mr-4">
            <div className=" font-weight-bold text-dark  mt-2">
              {option.label === null ? option.title : option.label}
            </div>
          </div>
        </div>
      )}
    </>
  );

  const onSelectAutoComplete = (event: AdvanceSelectValue): void => {
    onSetSelectedValue(event);
  };
  const loadOptions = async (inputValue: string): Promise<any> => {
    return await advanceSelectService.getSkills(inputValue, listName);
  };
  // const LoadDefaultOptions = async () => {
  //   const data = await loadOptions("");
  //   setOptions(data);
  // };

  // useEffect(() => {
  //   LoadDefaultOptions();
  // }, []);
  return (
    <div className=" mt-2 d-flex rtl mx-3">
      <div className="inline-items w-100 my-auto">
        <AsyncSelect
          noOptionsMessage={() => "مهارت مورد نظر را انتخاب کنید"}
          getOptionLabel={RenderOption as any}
          className=" rtl"
          //    options={skills}
          classNamePrefix="select"
          dir="rtl"
          defaultOptions={true}
          isDisabled={isDisabled}
          defaultValue={selectedOption}
          loadOptions={inputValue => loadOptions(inputValue)}
          isSearchable={true}
          name="SelectedOther"
          onChange={(ev: any) => onSelectAutoComplete(ev)}
          placeholder="جستجو..."
        />
      </div>
    </div>
  );
};

export default AdvanceSelectSkill;
