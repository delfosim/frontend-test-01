import {
  Box,
  Button,
  FormHelperText,
  InputBase,
  InputLabel,
  MenuItem,
  Select,
  Tooltip,
  Typography,
} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addWidget, updateWidget } from "../../redux/widgets/actions";
import uuid from "react-uuid";
import { toast } from "react-toastify";
import { addSearch, clearSearch } from "../../redux/search/actions";

export default function FormAddChart({ handleClose, chart }) {
  const [categorie, setCategorie] = useState("");
  const [listCategories, setListCategories] = useState([]);
  const [serieName, setSerieName] = useState("");
  const [listSeries, setListSeries] = useState([]);
  const [dataSerie, setDataSerie] = useState("");
  const [listDataSerie, setListDataSerie] = useState([]);
  const [typeChart, setTypeChart] = useState("line");
  const [titleChart, setTitleChart] = useState("");

  const isEditForm = chart.id;

  useEffect(() => {
    if (isEditForm) {
      setListCategories(chart.categories);
      setTitleChart(chart.text);
      setListSeries(chart.series);
    }
  }, []);

  const dispatch = useDispatch();

  const handleCategorie = (event) => {
    setCategorie(event.target.value);
  };

  const handleTitleChart = (event) => {
    setTitleChart(event.target.value);
  };

  const handleListCategories = () => {
    const hasCategorieSelected = listCategories.find(
      (itemList) => itemList.toLowerCase() === categorie.toLowerCase()
    );

    if (hasCategorieSelected) {
      toast("Categoria já selecionada!");
      return;
    }

    setListCategories((list) => [...list, categorie]);
  };

  const deleteCategorie = (categorieSelected) => {
    const removeCategorie = listCategories.filter(
      (itemList) => itemList !== categorieSelected
    );

    setListCategories(removeCategorie);
  };

  const deleteSerie = (serieSelected) => {
    const removeSerie = listSeries.filter(
      (itemList) => itemList.name !== serieSelected.name
    );

    setListSeries(removeSerie);
  };

  const deleteDataSerie = (data) => {
    const removeData = listDataSerie.filter((itemList) => itemList !== data);

    setListDataSerie(removeData);
  };

  const handleSerieName = (event) => {
    setSerieName(event.target.value);
  };

  const handleDataSerie = (event) => {
    setDataSerie(event.target.value);
  };

  const handleListDataSerie = () => {
    setListDataSerie((list) => [...list, Number(dataSerie)]);
  };

  const addListSeries = () => {
    const hasCategorieSelected = listSeries.find(
      (itemList) => itemList.name.toLowerCase() === serieName.toLowerCase()
    );

    if (hasCategorieSelected) {
      toast("Serie já selecionada!");
      return;
    }

    setListSeries((list) => [
      ...list,
      { name: serieName, data: listDataSerie },
    ]);
  };

  const insertWidget = (event) => {
    event.preventDefault();

    const optionsWidget = {
      id: isEditForm ? chart.id : uuid(),
      type: typeChart,
      text: titleChart,
      categories: listCategories,
      textY: "Valores",
      series: listSeries,
    };

    if (listCategories.length === 0) {
      toast("Insira pelo menos uma categoria!");
      return;
    } else if (listSeries.length === 0) {
      toast("Insira pelo menos uma serie!");
      return;
    } else if (isEditForm) {
      dispatch(updateWidget(optionsWidget));
      dispatch(clearSearch());
      handleClose();
      toast("Widget editado com sucesso!");
      return;
    }

    dispatch(addWidget(optionsWidget));
    dispatch(clearSearch());
    handleClose();
    toast("Widget adicionado com sucesso!");
  };

  return (
    <form
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
      onSubmit={insertWidget}
    >
      <FormControl>
        <TextField
          id="outlined-basic"
          label="Título"
          variant="outlined"
          value={titleChart}
          onChange={handleTitleChart}
          required
        />
      </FormControl>
      <FormControl style={{ marginTop: "30px" }} disabled={true}>
        <InputLabel id="demo-simple-select-label">Tipo</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Tipo"
        >
          <MenuItem value="line">Linha</MenuItem>
        </Select>
      </FormControl>
      <FormControl style={{ marginTop: "30px" }}>
        <TextField
          id="outlined-basic"
          label="Categorias"
          variant="outlined"
          value={categorie}
          onChange={handleCategorie}
        />
        <Box
          padding="10px 0px"
          display="flex"
          width="100%"
          style={{ overflowX: "scroll" }}
          sx={{
            "&::-webkit-scrollbar": {
              width: "5px",
              height: "5px",
              borderRadius: "20px",
              backgroundColor: `#F0F0F0`,
            },
            "&::-webkit-scrollbar-thumb": {
              width: "1px",
              backgroundColor: `#A8A8A8`,
              borderRadius: "100px",
            },
          }}
        >
          {listCategories.length > 0 &&
            listCategories.map((categorie, index) => (
              <Typography
                variant="caption"
                key={index}
                style={{
                  position: "relative",
                  padding: "5px 10px",
                  backgroundColor: "#E3E3E3",
                  borderRadius: "8px",
                  marginRight: "10px",
                }}
              >
                {categorie}
                <Box
                  position="absolute"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  padding="2px"
                  top="-5px"
                  right="-5px"
                  width="12px"
                  height="12px"
                  backgroundColor="white"
                  color="red"
                  borderRadius="50%"
                  boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
                  style={{ cursor: "pointer" }}
                  onClick={() => deleteCategorie(categorie)}
                >
                  X
                </Box>
              </Typography>
            ))}
        </Box>
        <Box display="flex" width="100%" justifyContent="center">
          <Button
            variant="contained"
            style={{ marginTop: "10px", width: "50%" }}
            onClick={() => {
              if (categorie.length > 0) {
                handleListCategories();
                setCategorie("");
              }
            }}
          >
            Adicionar Categoria
          </Button>
        </Box>
      </FormControl>
      <FormControl style={{ marginTop: "30px" }}>
        <TextField
          id="outlined-basic"
          label="Nome da Serie"
          variant="outlined"
          value={serieName}
          onChange={handleSerieName}
        />
        <FormHelperText style={{ fontSize: "11px" }}>
          As series são as variações do gráfico, você pode ter várias séries mas
          todas elas tem que ter a quantidade de valores igual a quantidade de
          categorias.
        </FormHelperText>
        <Box
          padding="10px 0px"
          display="flex"
          width="100%"
          style={{ overflowX: "scroll" }}
          sx={{
            "&::-webkit-scrollbar": {
              width: "5px",
              height: "5px",
              borderRadius: "20px",
              backgroundColor: `#F0F0F0`,
            },
            "&::-webkit-scrollbar-thumb": {
              width: "1px",
              backgroundColor: `#A8A8A8`,
              borderRadius: "100px",
            },
          }}
        >
          {listSeries.length > 0 &&
            listSeries.map((serie, index) => (
              <Tooltip title={`${serie.data.map((data) => data)}`}>
                <Typography
                  position="relative"
                  variant="caption"
                  key={index}
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "#E3E3E3",
                    borderRadius: "8px",
                    marginRight: "10px",
                  }}
                >
                  {serie.name}
                  <Box
                    position="absolute"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    padding="2px"
                    top="-5px"
                    right="-5px"
                    width="12px"
                    height="12px"
                    backgroundColor="white"
                    color="red"
                    borderRadius="50%"
                    boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
                    style={{ cursor: "pointer" }}
                    onClick={() => deleteSerie(serie)}
                  >
                    X
                  </Box>
                </Typography>
              </Tooltip>
            ))}
        </Box>
      </FormControl>
      <FormControl style={{ marginTop: "8px" }}>
        <TextField
          id="outlined-basic"
          variant="outlined"
          label="Digite um valor"
          type="number"
          value={dataSerie}
          onChange={handleDataSerie}
        />
        <FormHelperText style={{ fontSize: "11px" }}>
          OBS: Cada categoria tem que ter o seu valor. Ex: Se tiver 3
          categorias, cada variação terá que ter 3 valores.
        </FormHelperText>
        <Box
          padding="10px 0px"
          display="flex"
          width="100%"
          style={{ overflowX: "scroll" }}
          sx={{
            "&::-webkit-scrollbar": {
              width: "5px",
              height: "5px",
              borderRadius: "20px",
              backgroundColor: `#F0F0F0`,
            },
            "&::-webkit-scrollbar-thumb": {
              width: "1px",
              backgroundColor: `#A8A8A8`,
              borderRadius: "100px",
            },
          }}
        >
          {listDataSerie.length > 0 &&
            listDataSerie.map((data, index) => (
              <Typography
                position="relative"
                variant="caption"
                key={index}
                style={{
                  padding: "5px 10px",
                  backgroundColor: "#E3E3E3",
                  borderRadius: "8px",
                  marginRight: "10px",
                }}
              >
                {data}
                <Box
                  position="absolute"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  padding="2px"
                  top="-5px"
                  right="-5px"
                  width="12px"
                  height="12px"
                  backgroundColor="white"
                  color="red"
                  borderRadius="50%"
                  boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
                  style={{ cursor: "pointer" }}
                  onClick={() => deleteDataSerie(data)}
                >
                  X
                </Box>
              </Typography>
            ))}
        </Box>
        <Box display="flex" width="100%" justifyContent="center">
          <Button
            variant="contained"
            style={{ marginTop: "10px", width: "50%" }}
            onClick={() => {
              if (dataSerie.length > 0) {
                handleListDataSerie();
                setDataSerie("");
              }
            }}
          >
            Adicionar Valor
          </Button>
        </Box>
        <Box display="flex" width="100%" justifyContent="center">
          <Button
            variant="contained"
            style={{ marginTop: "10px", width: "50%" }}
            disabled={
              listDataSerie.length !== listCategories.length ||
              listCategories.length === 0 ||
              serieName.length === 0
            }
            onClick={() => {
              addListSeries();
              toast(`Serie "${serieName}" adicionada com sucesso!`);
              setSerieName("");
              setListDataSerie([]);
            }}
          >
            Adicionar Serie
          </Button>
        </Box>
      </FormControl>
      <Box display="flex" width="100%" justifyContent="center" marginTop="40px">
        <Button
          variant="contained"
          style={{ marginTop: "10px", width: "80%" }}
          type="submit"
        >
          {isEditForm ? "Editar Widget" : "Inserir Widget"}
        </Button>
      </Box>
    </form>
  );
}
