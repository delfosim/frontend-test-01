import { Box, TextField } from "@mui/material";
import logo from "../../Assets/delfos_Intelligent_maintenance.png";

export const Header = ({ findItemByInput }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100vw",
        height: 100,
        border: "1px solid lightgray",
      }}
    >
      <img style={{ width: 150, height: 100 }} src={logo} alt="Delfos logo" />
      <TextField
        onChange={(e) => findItemByInput(e.target.value)}
        sx={{ marginRight: 2, width: 500 }}
        label="Search..."
      />
    </Box>
  );
};
