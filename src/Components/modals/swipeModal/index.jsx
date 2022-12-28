import { SwipeableDrawer } from "@mui/material";
import { useState } from "react";
import { AddButton } from "../../button/addButton";
import { EditButton } from "../../button/editButton";

export const SwipeModal = ({ children, anchor, modalType }) => {
  const [state, setState] = useState(false); //Boolean useState used at toogleDrawer function

  const toggleDrawer = (anchor, open) => (event) => {
    //open or close widget creator box
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <>
      {modalType === "add" ? (
        <AddButton onClick={toggleDrawer(anchor, true)} />
      ) : (
        <EditButton onClick={toggleDrawer(anchor, true)} />
      )}
      <SwipeableDrawer
        anchor={anchor}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}
        onOpen={toggleDrawer(anchor, true)}
      >
        {children}
      </SwipeableDrawer>
    </>
  );
};
