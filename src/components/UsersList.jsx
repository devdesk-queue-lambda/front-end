import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {mods} from '../actions'
import User from './User'

import {UserList} from '../styles/UsersList'

function UsersList() {
    const dispatch=useDispatch()

    const users=useSelector(state=>state.tickets.users)

    useEffect(()=>{
        if(users.length<1){
            dispatch(mods())
        }
    })

    return (
        <UserList>
            {users.map(user=>(
                <User {...user} key={user.id}/>
            ))}
        </UserList>
    )
}

export default UsersList
