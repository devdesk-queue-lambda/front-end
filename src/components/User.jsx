import React from 'react'
import {useDispatch} from 'react-redux'

import {UserCard} from '../styles/User'

import {alterPrivlidge} from '../actions'

function User(props) {

    const dispatch=useDispatch()

    const authTypes=[
        'user',
        'helper',
        'admin'
    ]

    const changeAuth=e=>{
        dispatch(alterPrivlidge({id:props.id,authType:e.target.value}))
    }

    return (
        <UserCard>
            <h4>{props.username}</h4>
            <section className="ranks">
                Current Rank: <span className="rank">{props.authType}</span><br/>
                Give Rank: <select name="giveRank" value={props.authType} onChange={changeAuth}>
                    {authTypes.map((authType,i)=>(
                        <option value={authType} key={i}>{authType}</option>
                    ))}
                </select>
            </section>
        </UserCard>
    )
}

export default User
