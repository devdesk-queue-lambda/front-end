import { Card, ButtonSection } from '../styles/Card'
import { InfoButton, KillButton } from "../styles/Buttons";
import {useDispatch,useSelector} from 'react-redux'

import React from 'react'

function Task(props) {

    const dispatch=useDispatch()

    const id=useSelector(state=>state.id)
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

    return (
        <Card>
            <div className="section">
                Topic:{props.topic}
            </div>
            <div className="desc">
                Description:<br/>
                {props.description}
            </div>
            {(props.owner===id || authType==='helper' || authType==='moderator') &&     
                <input type="checkbox" name="done" value={props.done} onChange={finish}/>
            }
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
