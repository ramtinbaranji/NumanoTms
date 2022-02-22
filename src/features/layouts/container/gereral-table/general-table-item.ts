export default interface GeneralTableItem {
  id: string;
  items: GeneralTableRowItem[];
  width: string[];
}
interface GeneralTableRowItem {
  data: string;
  active: boolean;
  link?: string;
  onViewClick?: () => void;
}
