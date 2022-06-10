import { useCallback, useMemo, useState } from "react";

const useMouseOver = () => {
  const [isShow, setIsShow] = useState();

  const mouseOver = useCallback((e) => {
    console.log(e.target.id);
    setIsShow(e.target.id);
  }, []);
  const mouseLeave = (e) => setIsShow();

  return { isShow, mouseOver, mouseLeave };
};

export default useMouseOver;
