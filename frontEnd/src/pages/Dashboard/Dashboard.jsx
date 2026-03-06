import { Outlet } from 'react-router-dom';
import styles from './Dashboard.module.css';
import Header from './Header/Header.jsx';
import Sidebar from './Sidebar/Sidebar.jsx';


const Dashboard = () => {
    return(
        <>
            <Header/>
        <div className={styles.container}>
            <Sidebar/>
            <main className={styles.content}>
                <Outlet/>
            </main>
        </div>
        </>
    )
}

export default Dashboard;