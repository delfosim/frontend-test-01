import * as React from "react";
import {
  FormGroup,
  TextField,
  Button,
  MenuItem,
  Select,
  Icon,
  Grid,
  Typography,
} from "@material-ui/core";

import Modal from "../Utils/Modal/Modal";

import { useModalContext } from "../../shared/context";
import { useWidgetContext } from "../../shared/context/widgetStore";
import { ChartData, WidgetData } from "../types";
import { useStyle } from "../Utils/Modal/ModalStyle";
import { titleOptions } from "../../shared/context/types";

const CreateWidget = () => {
  const classes = useStyle();

  const { openCreate, setOpenCreate } = useModalContext();
  const { createNewWidget } = useWidgetContext();

  const [selectedWidget, setSelectedWidget] = React.useState("");
  const [name, setName] = React.useState("");
  const [widget, setWidget] = React.useState<ChartData[]>([
    {
      name: "",
      y: 0,
      x: 0,
    },
  ]);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedWidget(event.target.value as string);
  };

  const handleClose = () => {
    setOpenCreate(false);
  };

  const handleInput = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number,
  ) => {
    const { name, value } = event.target;
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

  const addNewColumn = () => {
    setWidget([...widget, { name: "", x: 0, y: 0 }]);
  };

  const deleteColumn = (index: number) => {
    const remove = widget.filter((_, idx) => idx !== index);
    setWidget(remove);
  };

  const clearForm = () => {
    handleClose();
    setName("");
    setSelectedWidget("disabled");
    setWidget([
      {
        name: "",
        y: 0,
        x: 0,
      },
    ]);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const newWidget: WidgetData = {
      title: {
        text: name,
        ...titleOptions,
      },
      series: [
        {
          type: selectedWidget,
          data: widget,
        },
      ],
    };

    createNewWidget(newWidget);
    clearForm();
  };

  return (
    <Modal open={openCreate} close={handleClose}>
      <form onSubmit={handleSubmit}>
        <FormGroup classes={{ root: classes.space }}>
          <Typography classes={{ root: classes.title }}>1 - Basico</Typography>
        </FormGroup>

        <FormGroup>
          <Select displayEmpty value={selectedWidget} onChange={handleChange} required>
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

        <FormGroup classes={{ root: classes.spaceTop }}>
          <Typography classes={{ root: classes.title }}>2 - Valores do Gráfico</Typography>
        </FormGroup>
        {widget.map(({ name, x, y }, index) => (
          <FormGroup classes={{ root: classes.spaceBottom }} key={index}>
            <TextField
              label="Titulo"
              onChange={(e) => handleInput(e, index)}
              value={name}
              key={index}
              name="name"
              required
            />

            <Grid classes={{ root: classes.inputWrapper }}>
              <TextField
                value={x}
                type="number"
                onChange={(e) => handleInput(e, index)}
                label="Valor de X"
                name="x"
                required
              />
              <TextField
                value={y}
                type="number"
                onChange={(e) => handleInput(e, index)}
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
          <Button onClick={addNewColumn} size="large" color="secondary" variant="contained">
            <Icon>add</Icon>
            Adicionar Nova Coluna
          </Button>
          <Button type="submit" size="large" color="primary" variant="contained">
            Criar Novo Widget
          </Button>
        </FormGroup>
      </form>
    </Modal>
  );
};

export default CreateWidget;
