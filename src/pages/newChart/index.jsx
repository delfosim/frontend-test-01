import React, { useState, useContext, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { v4 as uuidv4 } from 'uuid';

import ChartContext from '../../utils/chartContext'
import { Container, Content, Buttons, Coluns } from './styles';
import { useHistory } from 'react-router-dom';

function NewChart( {match} ){
  const {addNewChart, chartData, addEditChart} = useContext(ChartContext);
  const [title, setTitle] = useState('');
  const [name01, setName01] = useState('');
  const [name02, setName02] = useState('');
  const [name03, setName03] = useState('');
  const [name04, setName04] = useState('');
  const [dado01, setDado01] = useState('');
  const [dado02, setDado02] = useState('');
  const [dado03, setDado03] = useState('');
  const [dado04, setDado04] = useState('');

  const history = useHistory()
  const _id = match.params.id;

  useEffect(() => {
    if(_id){
      let editChart = chartData.find(c => c.id === _id)
  
      setTitle(editChart.name)
      setName01(editChart.data[0].name)
      setName02(editChart.data[1].name)
      setName03(editChart.data[2].name)
      setName04(editChart.data[3].name)
      setDado01(editChart.data[0].y)
      setDado02(editChart.data[1].y)
      setDado03(editChart.data[2].y)
      setDado04(editChart.data[3].y)
    }
  }, [_id, chartData])

  function handleSubmit(e) {
    e.preventDefault();

    const createChart = {
      id: uuidv4(),
      name: title,
      colorByPoint: true,
      data: [
        {
          name: name01,
          y: Number(dado01),
          drilldown: name01
        },
        {
          name: name02,
          y: Number(dado02),
          drilldown: name02
        },
        {
          name: name03,
          y: Number(dado03),
          drilldown: name03
        },
        {
          name: name04,
          y: Number(dado04),
          drilldown: name04
        },
      ]
    }

    const chartEdited = {
      id: _id,
      name: title,
      colorByPoint: true,
      data: [
        {
          name: name01,
          y: Number(dado01),
          drilldown: name01
        },
        {
          name: name02,
          y: Number(dado02),
          drilldown: name02
        },
        {
          name: name03,
          y: Number(dado03),
          drilldown: name03
        },
        {
          name: name04,
          y: Number(dado04),
          drilldown: name04
        },
      ]
    }

    if (_id) {
      addEditChart(chartData.map(chart => chart.id === _id ? chartEdited : chart))
    }else {
      addNewChart(createChart)
    }

    history.push("/")

  }

  return (
    <Container>
      <Content>
        <h1>Novo Gráfico</h1>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Nome do Gráfico"
            fullWidth
            margin="normal"
            variant="filled"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <Coluns>
            <div className="itens">
              <h3>Nome do item</h3>
              <TextField
                label="Item 01"
                size="small"
                margin="normal"
                variant="filled"
                value={name01}
                onChange={e => setName01(e.target.value)}
              />
              <TextField
                label="Item 02"
                size="small"
                margin="normal"
                variant="filled"
                value={name02}
                onChange={e => setName02(e.target.value)}
              />
              <TextField
                label="Item 03"
                size="small"
                margin="normal"
                variant="filled"
                value={name03}
                onChange={e => setName03(e.target.value)}
              />
              <TextField
                label="Item 04"
                size="small"
                margin="normal"
                variant="filled"
                value={name04}
                onChange={e => setName04(e.target.value)}
              />
            </div>

            <div className="values">
              <h3>Procentagens</h3>
              <TextField
                label="Valor 01"
                size="small"
                margin="normal"
                variant="filled"
                type="number"
                value={dado01}
                onChange={e => setDado01(e.target.value)}
              />
              <TextField
                label="Valor 02"
                size="small"
                margin="normal"
                variant="filled"
                type="number"
                value={dado02}
                onChange={e => setDado02(e.target.value)}
              />
              <TextField
                label="Valor 03"
                size="small"
                margin="normal"
                variant="filled"
                type="number"
                value={dado03}
                onChange={e => setDado03(e.target.value)}
              />
              <TextField
                label="Valor 04"
                size="small"
                margin="normal"
                variant="filled"
                type="number"
                value={dado04}
                onChange={e => setDado04(e.target.value)}
              />
            </div>
          </Coluns>
          <Buttons>
            <Button variant="outlined" className="buttons" fullWidth size="large" color="secondary" onClick={() => history.push("/")}>
              VOLTAR
            </Button>
            <Button variant="contained" type="submit" className="buttons" fullWidth size="large" color="primary">
              SALVAR
            </Button>
          </Buttons>  
        </form>
      </Content>
    </Container>
  );
};

export default NewChart;
