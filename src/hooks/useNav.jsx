import { useState } from "react";

const useNav = () => {
  const [show, setShow] = useState(false);

  const toggleNav = () => setShow(!show);
  return { show, toggleNav };
};

export default useNav;
