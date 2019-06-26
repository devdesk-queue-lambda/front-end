import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import Ticket from './Task'
import {List} from '../styles/HelpList'
import {mods} from '../actions'

function HelpList(props) {

    const tickets=useSelector(state=>state.tickets.tickets)
    const id=Number(localStorage.getItem('userId'))
    const helpers=useSelector(state=>state.tickets.users.filter(user=>user.authType!=='user'))
    const loading=useSelector(state=>state.tickets.fetching)
    const dispatch=useDispatch();

    const sort=useSelector(state=>state.tickets.sort)
    console.log('rendering',sort);
    return (
        <section>            
            <List>
                {( !loading && tickets.length<1) && <section>No Tickets</section>}
                {tickets.sort((first,second)=>{
                    switch(sort){
                        case 'standard':
                            return new Date(second.date)-new Date(first.date);
                        case 'owned':
                            if(first.owner===id && second.owner===id){
                                return first.date-second.date;
                            }else if(first.owner===id){
                                return -1
                            }else{
                                return 1;
                            }
                        case 'age':
                            return first.date-second.date
                        case 'assigned':
                            if(first.assigned===id && second.assigned===id){
                                return new Date(first.date)-new Date(second.date);
                            }else if(first.assigned===id){
                                return 1
                            }else{
                                return -1;
                            }
                        default:
                            return 0;
                    }
                }).map(ticket=>(
                    <Ticket {...ticket} key={ticket.id}/>
                ))}
            </List>
        </section>
    )
}

export default HelpList
