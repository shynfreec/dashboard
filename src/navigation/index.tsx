import { Role } from "@/lib/enum";
import { ArrowRightLeftIcon, Home, Layers3Icon, LogOut, LucideIcon, Settings, User2, Workflow, WorkflowIcon } from "lucide-react";

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
    title: "User",
    label: "",
    icon: User2,
    url: "/dashboard/user",
    roles: [],
  },
  {
    title: "Transaction",
    label: "",
    icon: ArrowRightLeftIcon,
    url: "/dashboard/transaction",
    roles: [],
  },
  {
    title: "Affilliate",
    label: "",
    icon: WorkflowIcon,
    url: "/dashboard/affilliate",
    roles: [],
  },
  {
    title: "Staking",
    label: "",
    icon: Layers3Icon,
    url: "/dashboard/staking",
    roles: [],
  },
  {
    title: "Config",
    label: "",
    icon: Settings,
    url: "/dashboard/config",
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
