import { Button } from "@mui/material";
import { FaEllipsisV } from "react-icons/fa";

export const EditButton = ({ onClick }) => { //Button component that opens the widget editor box
  return (
    <Button
      onClick={onClick}
      sx={{
        position: "relative",
        top: -20,
        right: 0,
        marginLeft: ["70vw", "70vw", "75vw", "80vw"],
        zIndex: 3,
        borderRadius: "50%",
        width: 10,
        height: 10,
      }}
    >
      <FaEllipsisV
        style={{
          color: "gray",
          fontWeight: "200",
        }}
      />
    </Button>
  );
};
