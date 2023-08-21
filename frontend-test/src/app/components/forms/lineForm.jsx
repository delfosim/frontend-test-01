"use client";
import React, { useState, useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { WidgetsContext } from "@/app/contexts/widgets";
import { Box } from "@mui/material";
import InputComponent from "./input";
import ButtonComponent from "./button";

export default function LineForm({ operation, id }) {
  const { filtedWidgets, addWidget, updateWidget } = useContext(WidgetsContext);
  const router = useRouter();

  const [chartTitle, setChartTitle] = useState("");
  const [yAxisTitle, setYAxisTitle] = useState("");
  const [dataSource, setDataSource] = useState("");

  const handleChartTitleChange = (event) => {
    setChartTitle(event.target.value);
  };
  const handleYAxisTitleChange = (event) => {
    setYAxisTitle(event.target.value);
  };

  const handleDataSourceChange = (event) => {
    setDataSource(event.target.value);
  };

  const handleSubmit = () => {
    const data = dataSource.split(",").map((item) => parseFloat(item.trim()));

    const options = {
      title: {
        text: chartTitle,
      },

      yAxis: {
        title: {
          text: yAxisTitle,
        },
      },
      series: [
        {
          name: "",
          data: data,
        },
      ],
    };

    sendData(options);
  };

  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    switch (operation) {
      case "add":
        setIsReady(true);
        break;
      case "update":
        const fetchWidgets = async () => {
          const widget = filtedWidgets.find((widget) => widget.id == id);
          setChartTitle(widget.options.title.text);
          setYAxisTitle(widget.options.yAxis.title.text);
          setDataSource(widget.options.series[0].data.join(", "));
          setIsReady(true);
        };
        fetchWidgets();
        break;
    }
  }, [operation]);

  const sendData = (options) => {
    switch (operation) {
      case "add":
        addWidget({ type: "line", options });
        router.push("/");
        break;

      case "update":
        const uptadedWidget = { id: id, type: "line", options };
        updateWidget(id, uptadedWidget);
        router.push("/");
        break;
    }
  };

  if (isReady) {
    return (
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off">
        <div className="flex flex-col items-center">
          <InputComponent
            value={chartTitle}
            isDisabled={false}
            isRequired={true}
            label="Chart Title"
            name="chartTitle"
            onChange={handleChartTitleChange}
          />
          <InputComponent
            value={yAxisTitle}
            isDisabled={false}
            isRequired={true}
            label="yAxis Title"
            name="yAxisTitle"
            onChange={handleYAxisTitleChange}
          />
          <InputComponent
            value={dataSource}
            isDisabled={false}
            isRequired={true}
            label="Enter dataSource (comma-separated)"
            name="dataSource"
            onChange={handleDataSourceChange}
          />
          <ButtonComponent
            size={"large"}
            isDisabled={false}
            variant="contained"
            text="Generate Chart"
            color="#1976d2"
            onClick={handleSubmit}
          />
        </div>
      </Box>
    );
  } else {
    return <h1>Carregando...</h1>;
  }
}
