import { useCallback, useMemo, useState } from "react";

export const useCounter = () => {
  const [count, setcount] = useState(1);
  const [isShow, setIsShow] = useState(true);

  const doubleCount = useMemo(() => {
    return count * 2;
  }, [count]);

  const hundleClick = useCallback(() => {
    if (count < 10) {
      setcount((prevCount) => prevCount + 1);
    }
  }, [count]);

  const hundleCount = useCallback(() => {
    setIsShow((prevIsShow) => !prevIsShow);
  });

  return {
    count,
    isShow,
    doubleCount,
    hundleClick,
    hundleCount,
  };
};
