"use client";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Popover from "@mui/material/Popover";
import Button from "@mui/material/Button";

import React from "react";
import ChartComponent from "./chart";

export default function CardComponent({
  title,
  width,
  data,
  options,
  type,
  primaryButton,
  secondaryButton,
  primaryClick,
  secondaryClick,
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handlePrimaryClick = () => {
    primaryClick();
    handleClose();
  };
  const handleSecondaryClick = () => {
    secondaryClick();
    handleClose();
  };

  return (
    <Card className={width}>
      <CardHeader
        action={
          <IconButton aria-label="settings" onClick={handleClick}>
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
      />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}>
        <Button variant="text" color="primary" onClick={handlePrimaryClick}>
          {primaryButton}
        </Button>
        <Button variant="text" color="error" onClick={handleSecondaryClick}>
          {secondaryButton}
        </Button>
      </Popover>
      <CardContent>
        <ChartComponent type={type} data={data} options={options} />
      </CardContent>
    </Card>
  );
}
