import { useState } from "react";
import { widgetData } from "../data";
import { widgetsKey } from "../constants";

export const useLocalStorage = (key) => {
  // Add fake data on first app run
  const firstRun = window.localStorage.getItem("firstRun");
  if (!firstRun) {
    window.localStorage.setItem("firstRun", true);
    window.localStorage.setItem(widgetsKey, JSON.stringify(widgetData));
  }

  const value = window.localStorage.getItem(key);
  const initialValue = value && JSON.parse(value);
  const [storedValue, setStoredValue] = useState(initialValue);

  // Set value stringify on localStorage and normal value on state
  const setValue = (value) => {
    const stringfy = JSON.stringify(value);
    window.localStorage.setItem(key, stringfy);
    setStoredValue(value);
  };

  return [storedValue, setValue];
};
