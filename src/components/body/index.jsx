import React, { useState, useContext, useEffect } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { Fab } from '@material-ui/core';
import { FiMoreVertical } from "react-icons/fi";
import { Dropdown, DropdownButton } from 'react-bootstrap';

import ChartContext from '../../utils/chartContext'
import { Container, Content } from './styles';
import { configChart } from '../../utils/configChart.js'
import { useHistory } from 'react-router-dom';

function Body() {
  const [searchResults, setSearchResults] = useState([]);
  const {chartData, search, setChartData} = useContext(ChartContext);
  const history = useHistory();

  useEffect(() => {
    setSearchResults(chartData.filter(chart => chart.name.toLowerCase().includes(search.toLowerCase())));
  }, [search, chartData])

  function goToNewChart() {
    history.push("/newChart")
  }

  function goToEditChart(id) {
    history.push(`/editChart/${id}`)
  }


  return (
    <Container>
      {searchResults.map(data => (
        <Content key={data.id}>
        <div className="infosCardChart">
          <h2>{data.name}</h2>
            <DropdownButton id={data.id} variant="dropdown" bsPrefix="dropdownIcon" title={<FiMoreVertical/>}>
              <div>
                <Dropdown.Item className="dropdownItem" onClick={() => goToEditChart(data.id)}>
                  Editar
                </Dropdown.Item>
                <Dropdown.Item className="dropdownItem" onClick={() => setChartData(chartData.filter(e => e.id !== data.id))}>
                  Excluir
                </Dropdown.Item>
              </div>
            </DropdownButton>
        </div>
        <hr/>
        <HighchartsReact
          highcharts={Highcharts}
          options={{...configChart, series: [data]}}
        />
      </Content>
      ))}
      <button className="buttonAdd">
        <Fab color="primary" aria-label="add" onClick={goToNewChart} >
          <AddIcon />
        </Fab>
      </button>
    </Container>
  );
};

export default Body;
