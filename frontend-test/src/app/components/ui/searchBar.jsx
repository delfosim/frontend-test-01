"use client";
import { TextField } from "@mui/material";

import { useContext, useState } from "react";
import { WidgetsContext } from "@/app/contexts/widgets";

export default function SearchBar() {
  const { searchWidgets } = useContext(WidgetsContext);
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (e) => {
    setSearchTerm(e);
    searchWidgets(e);
  };
  return (
    <div className="w-96">
      <TextField
        fullWidth
        value={searchTerm}
        label="Search"
        id="fullWidth"
        onChange={(e) => {
          handleChange(e.target.value);
        }}
      />
    </div>
  );
}
