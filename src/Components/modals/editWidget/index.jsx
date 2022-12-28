import * as yup from "yup";
import React, { useEffect, useState } from "react";
import { Box, Button, Container } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  deleteWidgetThunk,
  getWidgetThunk,
  updateWidgetThunk,
} from "../../../Store/modules/widgets/thunk";
import { InputBox } from "../../input/textField";
import { SwipeModal } from "../swipeModal";
import { SelectField } from "../../input/selectField";
import { graphs } from "../../../utils/graphType";

export const EditWidgetModal = ({ id }) => {
  const [findedGraph, setFindedGraph] = useState(); //It takes the clicked object
  const [selectedGraph, setSelectedGraph] = useState(); //It select the specific graphic name in a widget
  const [selectedType, setSelectedType] = useState(); //It select the specific graphic name in a widget

  const dispatch = useDispatch();
  const widget = useSelector((state) => state.widgetReducer); //Array of widgets

  useEffect(() => {
    dispatch(getWidgetThunk());
  }, [dispatch]);

  useEffect(() => {
    setFindedGraph(widget.find((el) => el.id === id)); // sets the clicked widget
  }, [widget, id]);

  const formSchema = yup.object().shape(
    {
      name: yup.string().notRequired(),
      graphName: yup
        .string()
        .ensure()
        .when("data", {
          is: (data, type) => data && type,
          then: yup.string().required("Select a graph"),
        }),
      data: yup
        .string()
        .ensure()
        .when("graphName", {
          is: (graphName) => !graphName,
          then: yup
            .string()
            .required("Select a graph before trying to edit")
            .matches("^[0-9*#+ ,.]+$", "Only numbers"),
        }),
      type: yup
        .string()
        .ensure()
        .when("graphName", {
          is: (graphName) => !graphName,
          then: yup.string().required("Select a graph before trying to edit"),
        }),
    },
    [["graphName", "data", "type"]]
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const onSubmitFunction = (data) => {
    const nameFormater = data.name
      ?.split(" ")
      .map((el) => `${el[0]?.toUpperCase()}${el?.substring(1).toLowerCase()}`)
      .join(" ");

    const dataFormated = {
      name: data.name ? nameFormater : "",
      graphName: data.graphName,
      data: data.data
        ? data.data
            .trim()
            .split(/[^a-zA-Z0-9]+/g)
            .map((el) => Number(el))
        : null,
      type: data.type ? data.type : null,
    };

    dispatch(updateWidgetThunk(id, dataFormated));
  };

  return (
    <SwipeModal anchor={"right"} modalType={"edit"}>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            width: ["90vw", "70vw", 800],
            gap: 3,
            p: 5,
          }}
        >
          <h2>Edit your widget</h2>
          <InputBox
            label={findedGraph && findedGraph.title.text}
            errors={errors.name?.message}
            register={{ ...register("name") }}
          />

          <Box
            sx={{
              width: "100%",
              display: ["column", "column", "flex", "flex"],
              gap: 3,
            }}
          >
            <SelectField
              id="graph-name"
              error={errors.graphName?.message}
              helperText={errors.graphName?.message}
              register={{ ...register("graphName") }}
              setState={setSelectedGraph}
              array={findedGraph && findedGraph.series}
              selectName="Select a graph"
              margin={3}
            />
            {selectedGraph && (
              <SelectField
                id="graph-type"
                error={errors.type?.message}
                helperText={errors.type?.message}
                register={{ ...register("type") }}
                setState={setSelectedType}
                array={graphs}
                selectName="Graph type"
              />
            )}
          </Box>
          {selectedGraph && (
            <InputBox
              label={`Actual data: ${
                findedGraph &&
                findedGraph.series.map((el) =>
                  el.name === selectedGraph ? el.data : ""
                )
              }`}
              errors={errors.data?.message}
              register={{ ...register("data") }}
            />
          )}

          <Button type="submit">Edit</Button>
          <Button
            onClick={() => {
              dispatch(deleteWidgetThunk(id));
            }}
          >
            Delete
          </Button>
        </Container>
      </form>
    </SwipeModal>
  );
};
