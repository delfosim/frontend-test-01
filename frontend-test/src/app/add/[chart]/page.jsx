import LineForm from "@/app/components/forms/lineForm";
import PieForm from "@/app/components/forms/pieForm";
import BarForm from "@/app/components/forms/barForm";
import DonutForm from "@/app/components/forms/donutForm";

import { Typography } from "@mui/material";

export default function addPage({ params: { chart } }) {
  function formComponent() {
    switch (chart) {
      case "line":
        return <LineForm operation="add" />;
      case "pie":
        return <PieForm chartType={chart} operation="add" />;
      case "bar":
        return <BarForm chartType={chart} operation="add" />;
      case "donut":
        return <DonutForm chartType={chart} operation="add" />;
    }
  }
  return (
    <div className="flex flex-col items-center pt-5">
      <Typography variant="h3" gutterBottom>
        Add {chart} Chart
      </Typography>
      {formComponent()}
    </div>
  );
}
