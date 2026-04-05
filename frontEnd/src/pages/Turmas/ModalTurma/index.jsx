import styles from './ModalTurma.module.css'


export const ModalTurma = ({ turma, onClose }) => {
    return(
    <div className={styles.overlay} onClick={onClose}>
        <div className={styles.modal} onClick={e => e.stopPropagation()}>
            <div className={styles.header}>
                <h3>Nome da turma</h3>
                 {<button className={styles.closeBtn} >&times</button> }
            </div>


        </div>
    </div>
    )
}