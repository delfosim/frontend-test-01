import Container from "@mui/material/Container";
import { useDispatch, useSelector } from "react-redux";
import BoxChart from "../../components/BoxChart";
import "highcharts/css/highcharts.css";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  addWidget,
  filterWidgets,
  removeWidget,
} from "../../redux/widgets/actions";
import uuid from "react-uuid";
import { useEffect, useState } from "react";
import ModalAddChart from "../../components/ModalAddChart";
import { Box, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { toast } from "react-toastify";
import { clearSearch } from "../../redux/search/actions";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [selectedChart, setSelectedChart] = useState({});

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setSelectedChart({});
  };

  const { widgets, search, filteredWidgets } = useSelector((state) => ({
    widgets: state.widgetsReducer.widgets,
    filteredWidgets: state.widgetsReducer.filteredWidgets,
    search: state.searchReducer.search,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterWidgets(search));
  }, [search, dispatch]);

  const ativeWidgets = search.length > 0 ? filteredWidgets : widgets;

  return (
    <Container
      maxWidth={false}
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        padding: "50px 0px",
        position: "relative",
      }}
    >
      <Container
        maxWidth="xl"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {search.length > 0 && (
          <Typography position="absolute" fontSize="14px" top="5px">
            {filteredWidgets.length > 1
              ? `${filteredWidgets.length} widgets encontrados!`
              : `${filteredWidgets.length} widget encontrado!`}
          </Typography>
        )}
        {widgets.length > 0 ? (
          ativeWidgets.map((widget) => (
            <Container
              maxWidth={false}
              style={{
                width: "100%",
                marginBottom: "100px",
              }}
              key={widget.id}
            >
              <Box width="100%" display="flex" justifyContent="flex-end">
                <Tooltip title="Editar">
                  <IconButton
                    onClick={() => {
                      setSelectedChart(widget);
                      handleOpen();
                    }}
                  >
                    <EditIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Excluir">
                  <IconButton
                    onClick={() => {
                      dispatch(removeWidget(widget));
                      dispatch(clearSearch());
                      toast("Widget removido com sucesso!");
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>
              </Box>
              <BoxChart options={widget} />
            </Container>
          ))
        ) : (
          <Typography>Você não possui Widgets ativos!</Typography>
        )}
      </Container>
      <Tooltip title="Adicionar Widget">
        <IconButton
          style={{
            position: "fixed",
            right: "50px",
            top: "80vh",
            width: "80px",
            height: "80px",
            backgroundColor: "#1975d2",
            color: "white",
          }}
          onClick={handleOpen}
        >
          <AddIcon />
        </IconButton>
      </Tooltip>
      <ModalAddChart
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        chart={selectedChart}
      />
    </Container>
  );
}
