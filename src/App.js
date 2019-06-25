import React from 'react';
import {ThemeProvider} from 'styled-components'
import PrivateRoute from './utilities/PrivateRoute';
import NewTicket from './components/NewTicket';

import { Route } from 'react-router-dom';
import {Wrapper} from './styles/App'

import Navigation from './components/Navigation';
import Home from './components/Home';
import Register from './components/Register';
import Ticket from './components/Task';
import {useSelector,useDispatch} from 'react-redux'
import {getCard} from './actions'
import Users from './components/UsersList'
import HelpList from './components/HelpList';

const theme={
  bgAccent:'#2f2c4b',
  accent:'white',
  errBgAccent:'#d84a5a',
  errAccent:'white',
  infoBgAccent:'#1a61af',
  infoAccent:'white',
  pBorderColor:'black',
  pBgColor:'#f0f4f7',
  accBorderColor:'transparent',
  alertBgAccent:'#3bb5e6',
  pAlertColor:'#bb1333',
  pTextColor:'#bb1333'
}


function App() {
  const id=0
  const single=useSelector(state=>state.tickets.viewed)
  const auth=useSelector(state=>state.login.authorizationType)

  const dispatch=useDispatch()

  const aquire=e=>{
    if(!single){
      dispatch(getCard(e))
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Navigation/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/register" component={Register} />
        
        <Route path="/users" render={()=>{
          return <Users/>
        }}/>
        <Route path={`/ticket/:id`} render={props=>{ 
          aquire(props.match.params.id)
          return <Ticket {...single} />
        }}/> 
        <PrivateRoute path="/create-ticket/" component={NewTicket} /> 
        <PrivateRoute path='/list' component={HelpList}/>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
