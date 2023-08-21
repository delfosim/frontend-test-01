"use client";

import { createContext, useEffect, useState } from "react";

import { v4 as uuidv4 } from "uuid";

const WidgetsContext = createContext({});

const WidgetsProvider = ({ children }) => {
  const [widgets, setWidgets] = useState([]);
  const [filtedWidgets, setFiltedWidgets] = useState([]);

  useEffect(() => {
    setFiltedWidgets(widgets);
  }, [widgets]);

  const searchWidgets = (search) => {
    const toLowerCase = search.toLowerCase();
    setFiltedWidgets(
      widgets.filter((widget) =>
        widget.options.title.text.toLowerCase().includes(toLowerCase)
      )
    );
  };

  const addWidget = (widget) => {
    setWidgets([...widgets, { id: uuidv4(), ...widget }]);
  };

  const updateWidget = (id, updatedWidget) => {
    setWidgets(
      widgets.map((widget) => (widget.id === id ? updatedWidget : widget))
    );
  };

  const deleteWidget = (id) => {
    setWidgets(widgets.filter((widget) => widget.id !== id));
  };

  return (
    <WidgetsContext.Provider
      value={{
        filtedWidgets,
        addWidget,
        updateWidget,
        deleteWidget,
        searchWidgets,
      }}>
      {children}
    </WidgetsContext.Provider>
  );
};

export { WidgetsProvider, WidgetsContext };
