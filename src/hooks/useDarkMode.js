import { useState } from "react";
import useLocalStorage from "./useLocalStorage";

const useDarkMode = (initialValue) => {
  const [value, setValue] = useLocalStorage("dark-mode_toggle", initialValue);

  const toggle = (e) => {
    setValue({
      ...value,
      [e.target]: !value,
    });
  };

  return [value, toggle];
};

export default useDarkMode;
