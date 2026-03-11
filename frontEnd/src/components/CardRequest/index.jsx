import styles from './cardRequest.module.css';
import {ClipboardList} from 'lucide-react';

const CardRequest = ({professor, materia, data, hora, turma}) => {
    return(
        <div className={styles.cardRequest}>
            <div className={styles.componentes}>
                    <ClipboardList className={styles.iconeTask}/>
                    <span className={styles.textos}>
                    <p className={styles.textoPrincipal}>{professor} - {materia}</p>
                    <p className={styles.textoData}>{data} - {hora} </p>
                    </span>
            </div>
            <p className={styles.textoTurma}>{turma}</p>
        </div>
    )
}

export default CardRequest