import React from 'react';
import {ThemeProvider} from 'styled-components'

import { Route } from 'react-router-dom';
import {Wrapper} from './styles/App'

import Navigation from './components/Navigation';
import Home from './components/Home';
import Register from './components/Register';
import UserHome from './components/UserHome';
// import Ticket from './components/Ticket';


const theme={
  bgAccent:'#2f2c4b',
  accent:'white',
  errBgAccent:'#d84a5a',
  errAccent:'white',
  infoBgAccent:'#1a61af',
  infoAccent:'white',
  pBorderColor:'black',
  pBgColor:'#f0f4f7',
  accBorderColor:'transparent'
}

function App() {
  const id=0
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route path="/user" component={UserHome} />
        {/* <Route path={`/ticket/${id}`} component={Ticket} />  */}
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
