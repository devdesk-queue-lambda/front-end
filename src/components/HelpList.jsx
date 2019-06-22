import React,{useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import Ticket from './Task'
import {List,Header} from '../styles/HelpList'
import {mods} from '../actions'

function HelpList() {
    
    const tickets=useSelector(state=>state.tickets)
    const viewed=useSelector(state=>state.viewed)
    const id=Number(useSelector(state=>state._id))
    const auth=useSelector(state=>state.authType)
    const helpers=useSelector(state=>state.mods)
    const [sort,setSort]=useState('standard')

    const dispatch=useDispatch();

    useEffect(()=>{
        if(helpers.length<1){
            dispatch(mods())
        }
    })

    if(viewed){
        return (
            <section>
                <Header>
                    DevDesk
                    <select onChange={e=>{
                        setSort(e.target.value)}
                    }>
                        <option value="null">Sort Order</option>
                        <option value="standard">Entry</option>
                        <option value="owned">Your Tickets</option>
                        <option value="age">Eldest First</option>
                    </select>
                </Header>
                <List>
                    <Ticket {...viewed} />
                </List>
            </section>
        )
    }
    return (
        <section>
            <Header>
                DevDesk
                <select onChange={e=>{
                    setSort(e.target.value)}
                }>
                    <option value="null">Sort Order</option>
                    <option value="standard">Entry</option>
                    <option value="owned">Your Tickets</option>
                    <option value="age">Eldest First</option>
                </select>
            </Header>
            <List>
                {tickets.sort((first,second)=>{
                    switch(sort){
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
                    <Ticket {...ticket} key={ticket._id}/>
                ))}
            </List>
        </section>
    )
}

export default HelpList
