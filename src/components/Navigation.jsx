import React,{useState} from 'react'
import {Navigate} from '../styles/navigation'
import {Header} from '../styles/Header'
import cn from '../helpers/ClassReducer'
import {FaBars} from 'react-icons/fa'
import {withRouter,NavLink} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import { sortChange,logout } from '../actions';

function Navigation(props) {
    const dispatch=useDispatch()

    const [display,setDisplay]=useState(false)
    
    const sort=useSelector(state=>state.tickets.sort)
    const auth=useSelector(state=>state.authorizationType)
    
    const setSort=e=>{
        dispatch(sortChange(e.target.value))
    }

    const classlist=cn({
        show:display,
        menu:true
    })

    const show=e=>{
        setDisplay(!display)
    }

    const log=e=>{
        props.history.push('/')
        dispatch(logout())
    }

    return (
        <Header>
            <Navigate>
                <span className="menuHeader" onClick={show}>
                    DevDesk <FaBars/>
                </span>
                {auth!=='user' &&
                <section className={classlist}>
                    <NavLink to="/users">
                        <section>
                            Users
                        </section>
                    </NavLink>
                </section>
                }
                <section className={classlist}>
                    <NavLink to="/">
                        <section>
                            Home
                        </section>
                    </NavLink>
                    <section onClick={log}>
                        Logout
                    </section>
                </section>
            </Navigate>
            <select onChange={setSort}
                value={sort}
            >
                <option value="null">Sort Order</option>
                <option value="standard">Entry</option>
                <option value="owned">Your Tickets</option>
                <option value="age">Eldest First</option>
            </select>
        </Header>
    )
}

export default withRouter(Navigation)
