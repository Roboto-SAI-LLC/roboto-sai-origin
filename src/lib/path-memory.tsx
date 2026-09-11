import { useEffect, useRef } from "react";
import { useRouter, useRouterState } from "@tanstack/react-router";

const KEY = "rs-path";

/** Remember the real path so a preview refresh does not dump you on `/`. */
export function PathMemory() {
  const router = useRouter();
  const href = useRouterState({
    select: (state) => `${state.location.pathname}${state.location.searchStr}`,
  });
  const restored = useRef(false);

  useEffect(() => {
    if (!restored.current) {
      restored.current = true;
      const nav = performance.getEntriesByType("navigation")[0] as
        | PerformanceNavigationTiming
        | undefined;
      const last = sessionStorage.getItem(KEY);
      const here = `${window.location.pathname}${window.location.search}`;
      if (nav?.type === "reload" && last && last !== here) {
        router.history.replace(last);
        return;
      }
    }
    sessionStorage.setItem(KEY, href);
  }, [href, router]);

  return null;
}
