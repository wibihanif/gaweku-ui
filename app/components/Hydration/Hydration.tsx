"use client";

import { useStore } from "@/app/stores";
import { usePathname, useRouter } from "next/navigation";
import { PropsWithChildren, useEffect } from "react";
import { authRoute } from "./static";

export const Hydration: React.FC<PropsWithChildren> = ({ children }) => {
  const { token } = useStore();
  const { replace } = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    if (token) {
      replace("/");
    }

    if (!token && authRoute.includes(pathName)) {
      replace("/login");
    }
  }, [token, pathName, replace]);

  return <>{children}</>;
};
