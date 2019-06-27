import React,{useState,useEffect} from 'react'
import {Navigate} from '../styles/navigation'
import {Header} from '../styles/Header'
import cn from '../helpers/ClassReducer'
import Lambda_Logo from '../imgs/Lambda_Logo.png';
import {withRouter,NavLink} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import { sortChange,logout, load } from '../actions';

function Navigation(props) {
    const dispatch=useDispatch()

    const [display,setDisplay]=useState(false)
    
    const sort=useSelector(state=>state.tickets.sort)
    const auth=useSelector(state=>state.tickets.authType)
    const id=localStorage.getItem('userId')
    
    useEffect(()=>{
        let temp=['/home','/register']
        if(auth===null && id){
            dispatch(load())
        }
        if(auth!==null && temp.includes(props.location.pathname)){
            props.history.push('/list')
        }
    })

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
                    <img src={Lambda_Logo} alt="Lambda Logo Mark" height="29" />DevDesk Queue
                </span>
                {(auth && auth==='admin') &&
                <section className={classlist}>
                    <NavLink to="/users" activeClassName='active'>
                        <section>
                            Users
                        </section>
                    </NavLink>
                </section>
                }
                <section className={classlist}>
                    <NavLink to="/list" activeClassName='active' exact>
                        <section>
                            Home
                        </section>
                    </NavLink>
                    {!auth && 
                        <NavLink to={'/register'} activeClassName='active'><section>Register</section></NavLink>
                    }
                    {auth && 
                        <NavLink to={'/create-ticket'}>
                            <section>
                                Create Ticket
                            </section>
                        </NavLink>
                    }
                    {auth &&
                        <section onClick={log}>
                            Logout
                        </section>
                    }
                </section>
            </Navigate>
            {auth && 
                <select onChange={setSort}
                    value={sort}
                >
                    <option value="null">Sort Order</option>
                    <option value="standard">Entry</option>
                    <option value="owned">Your Tickets</option>
                    <option value="age">Eldest First</option>
                    {(auth && auth!=='user')&&
                        <option value="assigned">Assigned</option>
                    }
                </select>
            }
        </Header>
    )
}

export default withRouter(Navigation)
