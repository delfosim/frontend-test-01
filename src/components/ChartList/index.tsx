import { CircularProgress, Container } from "@material-ui/core";
import * as React from "react";
import { useWidgetContext } from "../../shared/context/widgetStore";
import { useStyle } from "../../pages/Home/style";
import Chart from "../Chart";

const CharList: React.FC = () => {
  const { widgets, filteredWidgets, isLoading } = useWidgetContext();
  const classes = useStyle();

  if (isLoading)
    return (
      <Container classes={{ root: classes.centerContainer }}>
        <CircularProgress size="40px" />
      </Container>
    );

  if (filteredWidgets.length) {
    return (
      <>
        {filteredWidgets.map((data, index) => (
          <Chart data={data} index={index} />
        ))}
      </>
    );
  }

  return (
    <div>
      {widgets.map((data, index) => (
        <Chart data={data} index={index} />
      ))}
    </div>
  );
};

export default CharList;
