import React, { forwardRef } from "react";
import { Button } from "react-bootstrap";
import more from "../../assets/more.svg";
import "./index.css";

const CustomToggle = forwardRef(({ onClick }, ref) => (
  <Button
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
    className="toogle-btn"
    variant="link"
    size="sm"
  >
    <img src={more} alt="Toogle button" />
  </Button>
));

export default CustomToggle;
