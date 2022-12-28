import { FaPlus } from "react-icons/fa";
import { Button } from "@mui/material";

export const AddButton = ({onClick}) => { //Button component that opens the widget creator box

  return (
    <Button
        onClick={()=>onClick()}
        sx={{
          position: "fixed",
          bottom: 20,
          right: 50,
          background: "lightGray",
          borderRadius: "50%",
          width: 70,
          height: 70,
          ":hover": { background: "gray" },
        }}
      >
        <FaPlus
          style={{
            width: "30px",
            height: "30px",
            color: "white",
            fontWeight: "200",
          }}
        />
      </Button>
  );
};
