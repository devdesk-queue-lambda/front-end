import { Card, ButtonSection, TypeDisp, TicketDesc, Description } from '../styles/Card'
import { InfoButton, KillButton } from "../styles/Buttons";
import {useDispatch,useSelector} from 'react-redux'

import React from 'react'

function Task(props) {

    const dispatch=useDispatch()

    const id=Number(useSelector(state=>state._id))
    const authType=useSelector(state=>state.authType)

    const edit=e=>{
        console.log(props);
    }

    const finish=e=>{
        console.log(props);
    }

    const del=e=>{
        console.log(props)
    }

    const viewOne=e=>{
        console.log(e);
    }

    return (
        <Card>
            <TicketDesc onClick={viewOne}>
                <TypeDisp>
                    Topic: <span>{props.type}</span>
                </TypeDisp>
                <Description>
                    <span>Description:</span><br/>
                    {props.description}
                </Description>
                {(props.owner===id || authType==='helper' || authType==='moderator') &&     
                    <label htmlFor="done">Done: <input type="checkbox" name="done" value={props.done} onChange={finish}/></label>
                }
            </TicketDesc>
            <ButtonSection>
                {props.owner===id && 
                    <InfoButton onClick={edit}>
                        Edit Selection
                    </InfoButton>
                }
                {(props.owner===id || authType==='helper' || authType==='moderator') && 
                    <KillButton onClick={del}>
                        Delete Selection
                    </KillButton>
                }
            </ButtonSection>
        </Card>
    )
}

export default Task
