import { Role } from "@/lib/enum";
import { Home, LogOut, LucideIcon, Settings } from "lucide-react";

export interface NavProps {
  isCollapsed: boolean;
  links: {
    title: string;
    label?: string;
    icon: LucideIcon;
    url: string;
    roles?: Role[];
  }[];
  userRole?: Role;
}

export const dashboardNavigation: NavProps["links"] = [
  {
    title: "Dashboard",
    label: "",
    icon: Home,
    url: "/dashboard",
    roles: [],
  },
  {
    title: "Setting",
    label: "",
    icon: Settings,
    url: "/dashboard/setting",
    roles: [],
  },
];

export const logoutNavigation: NavProps["links"] = [
  {
    title: "Logout",
    label: "",
    icon: LogOut,
    url: "/login",
    roles: [],
  },
];
