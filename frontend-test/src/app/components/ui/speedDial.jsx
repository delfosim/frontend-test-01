"use client";

import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import { Box } from "@mui/material";
import { useRouter } from "next/navigation";

export default function SpeedDialComponent({ actions }) {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    router.push(href);
  };

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 1,
        width: "100%",
        zindex: 100,
        height: 30,
        transform: "translateZ(0px)",
        flexGrow: 1,
      }}>
      <SpeedDial
        ariaLabel="SpeedDial basic"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
        FabProps={{
          className: "bg-[#1976d2]",
        }}>
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={handleClick}
            href={action.href}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
