import * as React from "react";
import { Fab, Icon } from "@material-ui/core";
import { useStyle } from "./style";
import { useModalContext } from "../../shared/context/";

const CreateChartButton: React.FC = () => {
  const classes = useStyle();
  const { setOpenCreate } = useModalContext();

  return (
    <>
      <Fab
        aria-label="add"
        color="primary"
        classes={{ root: classes.root }}
        onClick={() => setOpenCreate(true)}
      >
        <Icon>add</Icon>
      </Fab>
    </>
  );
};

export default CreateChartButton;
