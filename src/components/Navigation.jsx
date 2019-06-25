import React,{useState} from 'react'
import {Navigate} from '../styles/navigation'
import cn from '../helpers/ClassReducer'
import {FaBars} from 'react-icons/fa'
import {withRouter} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import { logout } from '../actions';

function Navigation(props) {

    const [display,setDisplay]=useState(false)

    const auth=useSelector(state=>state.authorizationType)
    const dispatch=useDispatch()

    const classlist=cn({
        show:display,
        menu:true
    })

    const show=e=>{ 
        setDisplay(!display)
    }

    const toList=e=>{
        props.history.push('/list');
    }

    const toUsers=e=>{
        props.history.push('/users')
    }

    const toLogout=e=>{
        dispatch(logout())
        props.history.push('/')
    }

    return (
        <Navigate>
            <span className="menuHeader" onClick={show}>
                DevDesk <FaBars/>
            </span>
            {auth!=='user' &&
            <section className={classlist}>
                <section onClick={toList}>
                    Tickets
                </section>
                <section onClick={toUsers}>
                    Users
                </section>
            </section>
            }
            <section className={classlist}>
                <section onClick={toList}>
                    Home
                </section>
                <section onClick={toLogout}>
                    Logout
                </section>
            </section>
        </Navigate>
    )
}

export default withRouter(Navigation)
