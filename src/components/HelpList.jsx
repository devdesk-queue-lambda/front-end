import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import Ticket from './Task'
import {List} from '../styles/HelpList'
import {mods} from '../actions'

function HelpList(props) {

    const tickets=useSelector(state=>state.tickets.tickets)
    const id=Number(useSelector(state=>state.login.id))
    const helpers=useSelector(state=>state.tickets.users.filter(user=>user.authType!=='user'))
    const loading=useSelector(state=>state.tickets.fetching)
    const dispatch=useDispatch();

    return (
        <section>            
            <List>
                {( !loading && tickets.length<1) && <section>No Tickets</section>}
                {tickets.sort((first,second)=>{
                    switch(props.sort){
                        case 'standard':
                            return 0;
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
                                return first.date-second.date;
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
