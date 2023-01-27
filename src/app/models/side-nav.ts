import { DropdownItem } from "./dropdown-item";

export interface SideNav {
  title: string;
  dropdownItem?: DropdownItem[];
  imgSource?: string;
  hasDropdown?: boolean;
  link?: string;
}