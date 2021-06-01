import { useEffect, useMemo } from "react";
import { useRouter } from "next/router";

export const useBgColor = () => {
  const router = useRouter();

  const bgColer = useMemo(() => {
    return router.pathname === "/" ? "lightblue" : "beige";
  }, [router.pathname]);

  useEffect(() => {
    document.body.style.backgroundColor = bgColer;
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [bgColer]);
};
