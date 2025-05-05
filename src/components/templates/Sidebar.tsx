import React from 'react'
import userImg from '../assets/user.svg'
import bagImg from '../assets/bag.svg'
import payImg from '../assets/pay.svg'
import editImg from   '../assets/edit.svg'
import addImg from   '../assets/add.svg'
import employeeImg from '../assets/employee.svg'
import notificationsImg from '../assets/notifications.svg'
import './Sidebar.css'

const Sidebar = () =>{
    return(
        <aside className='sidebar'>
            <header className='sidebar-header'>
                <img src={userImg} alt="" className="logo-img"/>
            </header>
            <nav>
                <button>
                    <span>
                        <img src={bagImg}/>
                        <span>Home</span>
                    </span>
                </button>
                <button>
                    <span>
                        <img src={payImg} alt="" />
                        <span>Vencimento</span>
                    </span>
                </button>
                <button>
                    <span>
                         <img src={editImg} alt="" />
                        <span>editar</span>
                    </span>
                </button>
                <button>
                    <span>
                        <img src={addImg} alt="" />
                        <span>cadastrar</span>
                    </span>
                </button>
                <button>
                    <span>
                        <img src={employeeImg} alt="" />
                        <span>monitor</span>
                    </span>
                </button>
                <button>
                    <span>
                        <img src={notificationsImg} alt="" />
                        <span>Notificações</span>
                    </span>
                </button>
            </nav>
        </aside>
    )
} 

export default Sidebar;