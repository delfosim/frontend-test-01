import Widget from "./widget";

import { useContext } from "react";

import { WidgetsContext } from "../contexts/widgets";

export default function Widgets() {
  const { filtedWidgets } = useContext(WidgetsContext);

  return (
    <div className="flex flex-col items-center mt-10 gap-5">
      {filtedWidgets.map((widget) => (
        <Widget widget={widget} key={widget.id} />
      ))}
    </div>
  );
}
