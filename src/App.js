
import SearchAppBar from './components/AppBar';
import { ThemeProvider } from '@mui/material/styles';
import AppBarTheme from './themes/AppBarTheme'
import CollapsibleTable from './components/TableCharts';
import React from 'react';

function App() {
  return (
  <>
    <ThemeProvider theme={AppBarTheme}>
      <SearchAppBar/>
    <CollapsibleTable/>
    </ThemeProvider>
  </>
  );
 
}

export default App;
