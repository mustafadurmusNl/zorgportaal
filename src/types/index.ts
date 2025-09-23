import { MouseEventHandler } from "react";

// Component Props Types
export interface CustomButtonProps {
  isDisabled?: boolean;
  btnType?: "button" | "submit";
  containerStyles?: string;
  textStyles?: string;
  title: string;
  rightIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

// Service Types
export interface ServiceType {
  id: string;
  title: string;
  description: string;
  icon: string;
  link?: string;
}

// Location Types
export interface LocationType {
  id: string;
  name: string;
  address: string;
  phone: string;
  city: string;
}

// Team Member Types
export interface TeamMemberType {
  id: string;
  name: string;
  role: string;
  image: string;
  description?: string;
}

// Navigation Types
export interface NavLinkType {
  id: string;
  title: string;
  href: string;
  submenu?: NavLinkType[];
}

// Language Types
export interface LanguageOption {
  code: string;
  name: string;
  flag: string;
}
