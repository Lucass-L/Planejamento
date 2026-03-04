import styles from './Dashboard.module.css';
import Sidebar from './Sidebar/Sidebar.jsx';


const Dashboard = () => {
    return(
        <div className={styles.container}>
            <Sidebar/>
        </div>
    )
}

export default Dashboard;