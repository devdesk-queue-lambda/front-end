import React from 'react';
import './App.css';
import HelpList from './components/HelpList'
import {ThemeProvider} from 'styled-components'

const theme={
  bgAccent:'#2f2c4b',
  accent:'white',
  errBgAccent:'#d84a5a',
  errAccent:'white',
  infoBgAccent:'#1a61af',
  infoAccent:'white',
  pBorderColor:'black'
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <HelpList/>
      </div>
    </ThemeProvider>
  );
}

export default App;
