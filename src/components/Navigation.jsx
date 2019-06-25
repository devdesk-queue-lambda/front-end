import React,{useState} from 'react'
import {Navigate} from '../styles/navigation'
import cn from '../helpers/ClassReducer'
import {FaBars} from 'react-icons/fa'
import {withRouter} from 'react-router-dom'

function Navigation(props) {

    const [display,setDisplay]=useState(false)

    const classlist=cn({
        show:display,
        menu:true
    })

    const show=e=>{ 
        setDisplay(!display)
    }

    const toList=e=>{
        props.history.push('/');
    }

    const toUsers=e=>{
        props.history.push('/users')
    }

    return (
        <Navigate>
            <span className="menuHeader" onClick={show}>
                DevDesk <FaBars/>
            </span>
            <section className={classlist}>
                <section onClick={toList}>
                    Tickets
                </section>
                <section onClick={toUsers}>
                    Users
                </section>
            </section>
        </Navigate>
    )
}

export default withRouter(Navigation)
