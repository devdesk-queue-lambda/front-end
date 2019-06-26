import React,{useEffect} from 'react';
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
import {getCard, load, logout} from './actions'
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
  const single=useSelector(state=>state.tickets.viewed)
  const auth=useSelector(state=>state.tickets.authenticationType)
  const loading=useSelector(state=>state.login.isLoggingIn)
  const fetching=useSelector(state=>state.tickets.fetching)
  const err=useSelector(state=>state.login.error)
  const errInfo=useSelector(state=>state.login.errorInfo)

  const dispatch=useDispatch()

  const aquire=e=>{
    if(!single){
      dispatch(getCard(e))
    }
  }

  useEffect(()=>{
    if(localStorage.getItem("token") && localStorage.getItem('userId') && auth===undefined){
      dispatch(load())
    }else if(err){
      dispatch(logout());
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Navigation/>
        {loading && <section className="loading">Loading</section>}
        {fetching && <section className="loading">Loading</section>}
        {err && <section className="error">Error: {errInfo}</section>}
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
