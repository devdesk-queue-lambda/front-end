import { Card, ButtonSection, TypeDisp, TicketDesc, Description } from '../styles/Card'
import { InfoButton, KillButton,SuccessButton } from "../styles/Buttons";
import {useDispatch,useSelector} from 'react-redux'
import { removeTicket, finishTicket, assign, getCard } from '../actions'
import {withRouter} from 'react-router-dom'
import '../styles/styles.css';

import React from 'react'

function Task(props) {

    const dispatch=useDispatch()

    const id=Number(useSelector(state=>state.tickets.id))
    const authType=useSelector(state=>state.tickets.authType)
    const mods=useSelector(state=>state.tickets.users.filter(user=>user.authType!=='user'))
    const assigned=mods.filter(mod=>mod.id===props.assigned)[0]

    const edit=e=>{
        props.history.push(`/edit-ticket/${props.id}`)
    }

    const finish=e=>{
        let temp={...props}
        delete temp.history
        delete temp.location
        delete temp.match
        delete temp.staticContext
        dispatch(finishTicket(temp))
    }

    const del=e=>{
        dispatch(removeTicket(props.id))
    }

    const viewOne=e=>{
        dispatch(getCard(props.id))
        props.history.push(`/ticket/${props.id}`)
    }

    const assignSelf=e=>{
        dispatch(assign({
            ...props,
            assigned:id
        }))
    }

    const assignOther=e=>{
        console.log(e.target.value);
    }

    const removeAssignment=e=>{
        dispatch(assign({
            ...props,
            assigned:null
        }))
    }

    return (
        <Card>
            <TicketDesc>
                <TypeDisp onClick={viewOne}>
                    {console.log(props)}
                    Topic: <span>{props.type}</span><br/>
                    Assigned: {props.assigned && assigned?assigned.username:"No One"}
                </TypeDisp>
                <Description>
                    <span>Description:</span><br/>
                    {props.description}
                    <br/>
                    <span>Things Tried:</span><br/>
                    {props.tried}
                </Description>
                {(props.owner===id || (authType==='helper' && props.assigned===id)|| (props.id && authType==='admin')) &&     
                    <label htmlFor="done">Done: <input type="checkbox" name="done" checked={props.done} onChange={finish}/></label>
                }
                <SuccessButton onClick={viewOne}>View Card Alone</SuccessButton>
            </TicketDesc>
            <ButtonSection>
                {props.owner===id && 
                    <InfoButton onClick={edit}>
                        Edit Ticket
                    </InfoButton>
                }
                {(authType==='helper' && props.assigned===null)&& 
                    <InfoButton onClick={assignSelf}>
                        Assign Self
                    </InfoButton>
                }{(authType==='helper' && props.assigned===id)&& 
                    <InfoButton onClick={removeAssignment}>
                        Remove Assignment
                    </InfoButton>
                }
                {(authType==='mod' || authType==='admin') &&
                  <select onChange={assignOther}>
                      <option value="">Assign Helper</option>
                      {mods.map(mod=>(
                          <option value={mod.id} key={mod.id}>{mod.username}</option>
                      ))}
                  </select>
                }
                {(props.owner===id || (authType==='helper' && props.assigned===id) || authType==='admin') && 
                    <KillButton onClick={del}>
                        Delete Ticket
                    </KillButton>
                }
            </ButtonSection>
        </Card>
    )
}

export default withRouter(Task)
