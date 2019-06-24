import React,{useState} from 'react'
import {Navigate} from '../styles/navigation'
import cn from '../helpers/ClassReducer'
import {FaBars} from 'react-icons/fa'

function Navigation() {

    const [display,setDisplay]=useState(false)

    const classlist=cn({
        show:display,
        menu:true
    })

    const show=e=>{ 
        setDisplay(!display)
    }

    const toList=e=>{
        console.log('to tickets');
    }

    const toUsers=e=>{
        console.log('to users')
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

export default Navigation
