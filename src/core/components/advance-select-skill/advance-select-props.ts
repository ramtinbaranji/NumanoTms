import SPLists from "src/entities/lists";
import AdvanceSelectValue from "./advance-select-value";
export default interface AdvanceSelectProps {
  skills: string[];
  selectedOption?: AdvanceSelectValue;
  onSetSelectedValue: (selected: AdvanceSelectValue | AdvanceSelectValue[]) => void;
  size?: string;
  isDisabled?: boolean;
  listName: SPLists;
}
