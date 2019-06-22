import React from 'react';
import HelpList from './components/HelpList'
import {ThemeProvider} from 'styled-components'
import {Wrapper} from './styles/App'

const theme={
  bgAccent:'#2f2c4b',
  accent:'white',
  errBgAccent:'#d84a5a',
  errAccent:'white',
  infoBgAccent:'#1a61af',
  infoAccent:'white',
  pBorderColor:'black',
  pBgColor:'#f0f4f7'
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <HelpList/>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
