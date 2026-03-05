import styles from './Dashboard.module.css';
import Header from './Header/Header.jsx';
import Sidebar from './Sidebar/Sidebar.jsx';


const Dashboard = () => {
    return(<div className={styles.container}>
        <Header/>
        <Sidebar/>
        </div>
    )
}

export default Dashboard;