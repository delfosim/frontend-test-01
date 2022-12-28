import { Box } from "@mui/material";
import { Header } from "../../Components/header";
import { Widgets } from "../../Components/widget";
import { TreeView, TreeItem } from "@mui/lab";
import { CreateWidgetModal } from "../../Components/modals/createWidget";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWidgetThunk } from "../../Store/modules/widgets/thunk";
import CircularIndeterminate from "../../Components/loading";

export const Dashboard = () => {
  const dispatch = useDispatch();
  const widget = useSelector((state) => state.widgetReducer); //Array of widgets

  const [data, setData] = useState(); //Array of widgets used to filter by search bar

  useEffect(() => {
    dispatch(getWidgetThunk());
  }, [dispatch]);

  useEffect(() => {
    setData(widget);
  }, [widget]);

  const findItemByInput = (value) => {
    //filter by typing at search bar
    setData(
      widget.filter((el) =>
        el.title.text.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Header findItemByInput={findItemByInput} />
      <TreeView
        aria-label="file system navigator"
        sx={{
          height: 240,
          flexGrow: 1,
          width: "90vw",
          marginTop: 3,
          ".highcharts-credits": { display: "none" },
        }}
      >
        {data ? (
          data.map((el) => (
            <TreeItem
              key={`${el.id}`}
              nodeId={`${el.id}`}
              label={`${el.title.text}`}
              sx={{
                border: "1px solid lightGray",
                ".Mui-selected,.MuiTreeItem-label,	.MuiTreeItem-content": {
                  padding: 0,
                },
              }}
            >
              <Widgets options={el} />
            </TreeItem>
          ))
        ) : (
          <CircularIndeterminate />
        )}
      </TreeView>

      <CreateWidgetModal />
    </Box>
  );
};
