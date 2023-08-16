import Container from "@mui/material/Container";
import logoDelfos from "../../assets/delfos-logo.png";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addSearch } from "../../redux/search/actions";

export default function Header() {
  const search = useSelector((state) => state.searchReducer.search);

  const dispatch = useDispatch();

  return (
    <Container
      maxWidth={false}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px 0px",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      }}
    >
      <Container
        maxWidth="xl"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <img
          src={logoDelfos}
          alt="delfos"
          style={{ width: "150px", height: "100px" }}
        />
        <TextField
          id="outlined-basic"
          label="Search"
          variant="outlined"
          size="small"
          value={search}
          onChange={(event) => {
            dispatch(addSearch(event.target.value));
          }}
        />
      </Container>
    </Container>
  );
}
