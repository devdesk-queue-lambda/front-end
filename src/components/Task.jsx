import { Card, ButtonSection, TypeDisp, TicketDesc, Description } from '../styles/Card'
import { InfoButton, KillButton } from "../styles/Buttons";
import {useDispatch,useSelector} from 'react-redux'
import { removeTicket, finishTicket, assign } from '../actions'

import React from 'react'

function Task(props) {

    const dispatch=useDispatch()

    const id=Number(useSelector(state=>state._id))
    const authType=useSelector(state=>state.authType)
    const mods=useSelector(state=>state.mods)
    const assigned=mods.filter(mod=>mod._id===props.assigned)[0]

    const edit=e=>{
        console.log(props);
    }

    const finish=e=>{
        dispatch(finishTicket({...props}))
    }

    const del=e=>{
        dispatch(removeTicket(props._id))
    }

    const viewOne=e=>{
        console.log(props.assigned);
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
            <TicketDesc onClick={viewOne}>
                <TypeDisp>
                    Topic: <span>{props.type}</span><br/>
                    Assigned: {props.assigned && assigned?assigned.username:"No One"}
                </TypeDisp>
                <Description>
                    <span>Description:</span><br/>
                    {props.description}
                </Description>
                {(props.owner===id || (authType==='helper' && props.assigned===id)|| authType==='moderator') &&     
                    <label htmlFor="done">Done: <input type="checkbox" name="done" checked={props.done} onChange={finish}/></label>
                }
            </TicketDesc>
            <ButtonSection>
                {props.owner===id && 
                    <InfoButton onClick={edit}>
                        Edit Selection
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
                            <option value={mod._id} key={mod._id}>{mod.username}</option>
                        ))}
                    </select>
                }
                {(props.owner===id || (authType==='helper' && props.assigned===id) || authType==='moderator') && 
                    <KillButton onClick={del}>
                        Delete Selection
                    </KillButton>
                }
            </ButtonSection>
        </Card>
    )
}

export default Task
