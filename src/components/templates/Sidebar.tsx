import {useState} from 'react'
import logoImg from '../assets/logo.svg'
import bagImg from '../assets/bag.svg'
import payImg from '../assets/pay.svg'
import editImg from   '../assets/edit.svg'
import addImg from   '../assets/add.svg'
import employeeImg from '../assets/employee.svg'
import notificationsImg from '../assets/notifications.svg'
import menuImg from '../assets/menu.svg'
import closeImg from '../assets/close.svg'

import './Sidebar.css'

const Sidebar = () =>{

    const [active, setActive] = useState(false);

    return(
        <>
        <aside className='sidebar'>
            <header className='sidebar-header'>
                <img src={logoImg} alt="" className='logo' />
            </header>
            <nav>
                <button>
                    <span>
                        <img src={bagImg} className='image-button' style={{ fill: 'black' }}/>
                        <span>Home</span>
                    </span>
                </button>
                <button>
                    <span>
                        <img src={payImg} alt="" className='image-button'/>
                        <span>Vencimento</span>
                    </span>
                </button>
                <button>
                    <span>
                         <img src={editImg} alt="" className='image-button'/>
                        <span>editar</span>
                    </span>
                </button>
                <button>
                    <span>
                        <img src={addImg} alt="" className='image-button'/>
                        <span>cadastrar</span>
                    </span>
                </button>
                <button>
                    <span>
                        <img src={employeeImg} alt="" className='image-button' />
                        <span>monitor</span>
                    </span>
                </button>
                <button>
                    <span>
                        <img src={notificationsImg} alt="" className='image-button'/>
                        <span>Notificações</span>
                    </span>
                </button>
            </nav>
        </aside>
        <button className="button-mobile"  onClick={()=> setActive(!active)}>
            <img src={menuImg} />
            <span>Menu</span>
        </button>
        <nav className={`menu-mobile ${active ? 'menu-mobile-active':''} `}>
            <button >
                <span >
                     <img src={closeImg} className="button-mobile"  onClick={()=> setActive(!active)}/>
                </span>
            </button>
            <button>
                    <span>
                        <img src={bagImg}/>
                        <span className="mobile-text">Home</span>
                    </span>
                </button>
                <button>
                    <span>
                        <img src={payImg} alt="" />
                        <span className="mobile-text">Vencimento</span>
                    </span>
                </button>
                <button>
                    <span>
                         <img src={editImg} alt="" />
                        <span className="mobile-text">editar</span>
                    </span>
                </button>
                <button>
                    <span>
                        <img src={addImg} alt="" />
                        <span className="mobile-text">cadastrar</span>
                    </span>
                </button>
                <button>
                    <span>
                        <img src={employeeImg} alt="" />
                        <span className="mobile-text">monitor</span>
                    </span>
                </button>
                <button>
                    <span>
                        <img src={notificationsImg} alt="" />
                        <span className="mobile-text">Notificações</span>
                    </span>
                </button>
        </nav>
        </>
    )
} 

export default Sidebar;