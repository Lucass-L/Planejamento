import styles from './Header.module.css'

const Header = () => {
    return(
        <header className={styles.banner}>
                <div>
                    <h1 className={styles.title}>Planejamento Escolar</h1>
                    <p className={styles.paragrafo}>Sistema de Gestão Educacional</p>
                </div>
        </header>
    )
}

export default Header