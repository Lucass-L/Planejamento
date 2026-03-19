import CardTurma from '../../components/CardTurma'
import styles from './Turmas.module.css'

const Turmas = () => {
    return(
        <>
        <h2>Pagina de Turmas</h2>
        <section className={styles.containerCards}>
            <CardTurma/>
            <CardTurma/>
            <CardTurma/>
            <CardTurma/>
            <CardTurma/>
            <CardTurma/>
            <CardTurma/>
            <CardTurma/>
            
        </section>
        </>
    )
}

export default Turmas