import * as React from "react";
import { useModalContext } from "../../shared/context/";
import { useWidgetContext } from "../../shared/context/widgetStore";
import { ChartData, WidgetData } from "../types";
import Modal from "../Utils/Modal/Modal";
import { useStyle } from "../Utils/Modal/ModalStyle";
import {
  FormGroup,
  Select,
  MenuItem,
  TextField,
  Button,
  Icon,
  Typography,
  Grid,
} from "@material-ui/core";
import { titleOptions } from "../../shared/context/types";

const UpdateWidget = () => {
  const { openUpdate, setOpenUpdate } = useModalContext();
  const { updateWidget, widgetData } = useWidgetContext();
  const [selectedWidget, setSelectedWidget] = React.useState("");
  const [name, setName] = React.useState("");
  const [widget, setWidget] = React.useState<ChartData[]>([]);

  const classes = useStyle();

  React.useEffect(() => {
    if (widgetData.length) {
      setSelectedWidget(widgetData[0].series[0].type);
      setName(widgetData[0].title.text);
      setWidget(widgetData[0].series[0].data);
    }
  }, [widgetData]);

  const closeUpdate = () => {
    setOpenUpdate(false);
  };

  const addNewColumn = () => {
    setWidget([...widget, { name: "", x: 0, y: 0 }]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updated = {
      title: {
        text: name,
        ...titleOptions,
      },
      series: [
        {
          data: widget,
          type: selectedWidget,
        },
      ],
    } as WidgetData;

    updateWidget(updated);
    setOpenUpdate(false);
  };

  const deleteColumn = (index: number) => {
    const remove = widget.filter((_, idx) => idx !== index);
    setWidget(remove);
  };

  const handleChangeSelect = (e: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedWidget(e.target.value as string);
  };

  const handleChangeInput = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    index: number,
  ) => {
    const { name, value } = e.target;
    let newValue: number;

    if (name === "x" || name === "y") {
      newValue = +value;
    }

    setWidget((previousData) => [
      ...previousData.slice(0, index),
      { ...previousData[index], [name]: newValue ?? value },
      ...previousData.slice(index + 1),
    ]);
  };

  return (
    <Modal open={openUpdate} close={closeUpdate}>
      <form onSubmit={handleSubmit}>
        <FormGroup classes={{ root: classes.space }}>
          <Typography classes={{ root: classes.title }}>1 - Basico</Typography>
        </FormGroup>

        <FormGroup>
          <Select value={selectedWidget} onChange={handleChangeSelect} required>
            <MenuItem disabled value="" selected>
              Selecione o tipo de gráfico
            </MenuItem>
            <MenuItem value="pie">Pizza</MenuItem>
            <MenuItem value="bar">Barra</MenuItem>
            <MenuItem value="column">Coluna</MenuItem>
            <MenuItem value="line">Linhas</MenuItem>
          </Select>
        </FormGroup>

        <FormGroup>
          <TextField
            label="Nome do Widget"
            placeholder="Digite o nome do Widget"
            onChange={({ target }) => setName(target.value)}
            value={name}
            required
          />
        </FormGroup>

        <FormGroup classes={{ root: classes.space }}>
          <Typography classes={{ root: classes.title }}>2 - Valores do Gráfico</Typography>
        </FormGroup>

        {widget.map(({ name, x, y }, index) => (
          <FormGroup classes={{ root: classes.spaceBottom }} key={index}>
            <TextField
              label="Titulo"
              onChange={(e) => handleChangeInput(e, index)}
              value={name}
              key={index}
              name="name"
              required
            />

            <Grid classes={{ root: classes.inputWrapper }}>
              <TextField
                value={x}
                type="number"
                onChange={(e) => handleChangeInput(e, index)}
                label="Valor de X"
                name="x"
                required
              />
              <TextField
                value={y}
                type="number"
                onChange={(e) => handleChangeInput(e, index)}
                label="Valor de Y"
                name="y"
                required
              />
              <Button
                onClick={() => deleteColumn(index)}
                classes={{ contained: classes.deleteButton }}
                variant="contained"
              >
                <Icon>delete</Icon>
              </Button>
            </Grid>
          </FormGroup>
        ))}
        <FormGroup classes={{ root: classes.spaceGap }}>
          <Button onClick={addNewColumn} size="large" color="primary" variant="contained">
            <Icon>add</Icon>
            Adicionar Nova Coluna
          </Button>
          <Button
            type="submit"
            size="large"
            classes={{ root: classes.submitButton }}
            variant="contained"
          >
            Salvar Alterações
          </Button>
        </FormGroup>
      </form>
    </Modal>
  );
};

export default UpdateWidget;
