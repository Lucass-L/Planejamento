import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css';
import { Home, Users, UserCircle, ArrowLeftRight, Settings } from 'lucide-react';



const Sidebar = () => {

    const itensNavegacao = [
        {label: 'Início', Icon: Home, path: ''},
        {label: 'Turmas', Icon: Users, path: '/turmas'},
        {label: 'Professores', Icon: UserCircle, path: '/professores'},
        {label: 'Transferência', Icon: ArrowLeftRight, path: '/transferencia'},
        {label: 'Configurações', Icon: Settings, path: '/configuracoes'}
    ]

    return(
    <aside className={styles.side}>
        <div className={styles.containerNav}>
            <ul className={styles.List}>
                {itensNavegacao.map((item) => {
                    const pathCompleto = `/dashboard${item.path}`
                    const Icon = item.Icon
                    return(
                        <li className={styles.itemLista} key={item.path}>
                         <NavLink 
                            to={pathCompleto}
                            end={item.path === '/dashboard'}
                            className={({isActive}) =>  `${styles.linkContent} ${isActive ? styles.pathAtivo :''}` }
                        >
                                <Icon className={styles.icon}/>
                                <span className={styles.label}>{item.label}</span>
                        </NavLink>
                        </li>
                    )
                })}
            </ul>
        </div>
    </aside>
    )
}


export default Sidebar