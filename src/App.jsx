import React, { useState } from 'react'
import { GlobalStyles } from "./styles/globalStyles";
import ChartContext from './utils/chartContext'
import { v4 as uuidv4 } from 'uuid';

import Routes from './routes';

function App() {
  const [search, setSearch] = useState('');

  function addNewChart(chart) {
    setChartData([...chartData, chart])
  }

  function addEditChart(chart) {
    setChartData(chart)
  }

  const [chartData, setChartData] = useState(
    [
      {
        id: uuidv4(),
        name: "Browsers",
        colorByPoint: true,
        data: [
          {
              name: "Chrome",
              y: 62.74,
              drilldown: "Chrome"
          },
          {
              name: "Internet Explorer",
              y: 7.23,
              drilldown: "Internet Explorer"
          },
          {
              name: "Safari",
              y: 5.58,
              drilldown: "Safari"
          },
          {
              name: "Other",
              y: 7.62,
              drilldown: null
          }
        ]
      },
    ],
  );

  return (
    <ChartContext.Provider value={{chartData, setChartData, search, setSearch, addNewChart, addEditChart}}>
      <Routes />
      <GlobalStyles />
    </ChartContext.Provider>
  );
}

export default App;
