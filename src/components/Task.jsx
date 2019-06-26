import { Card, ButtonSection, TypeDisp, TicketDesc, Description } from '../styles/Card'
import { InfoButton, KillButton } from "../styles/Buttons";
import {useDispatch,useSelector} from 'react-redux'
import { removeTicket, finishTicket, assign, getCard } from '../actions'
import {withRouter} from 'react-router-dom'

import React from 'react'

function Task(props) {

    const dispatch=useDispatch()

    const id=Number(useSelector(state=>state.login.id))
    const authorizationType=useSelector(state=>state.login.authorizationType)
    const mods=useSelector(state=>state.tickets.users.filter(user=>user.authorizationType!=='user'))
    const assigned=mods.filter(mod=>mod.id===props.assigned)[0]

    const edit=e=>{
        console.log(props);
    }

    const finish=e=>{
        dispatch(finishTicket({...props}))
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
                    Topic: <span>{props.type}</span><br/>
                    Assigned: {props.assigned && assigned?assigned.username:"No One"}
                </TypeDisp>
                <Description onClick={viewOne}>
                    <span>Description:</span><br/>
                    {props.description}
                </Description>
                {(props.owner===id || (authorizationType==='helper' && props.assigned===id)|| (props.id && authorizationType==='admin')) &&     
                    <label htmlFor="done">Done: <input type="checkbox" name="done" checked={props.done} onChange={finish}/></label>
                }
            </TicketDesc>
            <ButtonSection>
                {props.owner===id && 
                    <InfoButton onClick={edit}>
                        Edit Selection
                    </InfoButton>
                }
                {(authorizationType==='helper' && props.assigned===null)&& 
                    <InfoButton onClick={assignSelf}>
                        Assign Self
                    </InfoButton>
                }{(authorizationType==='helper' && props.assigned===id)&& 
                <InfoButton onClick={removeAssignment}>
                    Remove Assignment
                </InfoButton>
            }
                {(authorizationType==='mod' || authorizationType==='admin') && 
                    <select onChange={assignOther}>
                        <option value="">Assign Helper</option>
                        {mods.map(mod=>(
                            <option value={mod.id} key={mod.id}>{mod.username}</option>
                        ))}
                    </select>
                }
                {(props.owner===id || (authorizationType==='helper' && props.assigned===id) || authorizationType==='admin') && 
                    <KillButton onClick={del}>
                        Delete Selection
                    </KillButton>
                }
            </ButtonSection>
        </Card>
    )
}

export default withRouter(Task)
