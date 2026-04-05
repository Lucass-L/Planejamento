import styles from './CardTurma.module.css'
import {Users,CircleUser} from 'lucide-react'

const CardTurma = ({turma, regente, onClick}) => {
    return(
    <div className={styles.cardContainer} onClick={onClick} >
        <div className={styles.cardHeader}>
            <h3 className={styles.nameTurma}>Turma {turma}</h3> 
            <span className={styles.iconUsers}> <Users color='white'/> </span>
        </div>
        <div className={styles.cardFooter}>
                <span>
                <CircleUser color='#F1D32D'/>   
                <p className={styles.paragrafoRegente}>Professor Regente:</p>
                </span>
                <p className={styles.paragrafoRegente}><strong>{regente}</strong></p>
        </div>
    </div>
    )
}

export default CardTurma