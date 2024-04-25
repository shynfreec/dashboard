"use client";

import CookieHandler, { TOKEN } from "@/helpers/cookie";
import LocalStorageHandler from "@/helpers/localStorage";
import useAuth from "@/hooks/useAuth";
import { usePathname } from "next/navigation";
import { useCallback } from "react";

export function Header() {
  const patchName = usePathname();
  const { isLoggedIn } = useAuth();

  const handleLogout = useCallback(() => {
    CookieHandler.remove(TOKEN);
    LocalStorageHandler.clear();
    window.location.reload();
  }, []);

  return <div className="p-4">Header</div>;
}
