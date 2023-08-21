import { Typography } from "@mui/material";

import BarForm from "@/app/components/forms/barForm";
import DonutForm from "@/app/components/forms/donutForm";
import LineForm from "@/app/components/forms/lineForm";
import PieForm from "@/app/components/forms/pieForm";

export default function editPage({ params: { chart, id } }) {
  function formComponent() {
    switch (chart) {
      case "line":
        return <LineForm operation="update" id={id} />;
      case "pie":
        return <PieForm operation="update" id={id} />;
      case "bar":
        return <BarForm operation="update" id={id} />;
      case "donut":
        return <DonutForm operation="update" id={id} />;
    }
  }
  return (
    <div className="flex flex-col items-center pt-5">
      <Typography variant="h3" gutterBottom>
        Update {chart} Chart
      </Typography>
      {formComponent()}
    </div>
  );
}
