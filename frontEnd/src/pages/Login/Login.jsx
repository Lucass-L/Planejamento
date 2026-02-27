import styles from './Login.module.css'

const Login = () => {
    return(
    <>
        <section className={styles.container}>
            <form className={styles.card}>
                <h2 className={styles.title}>
                    Login
                </h2>
                <div className={styles.groupFormMargin}>
                        <div className={styles.inputGroup}>
                        <label htmlFor="username-input" className={styles.label}>
                            Usuário
                        </label>
                        <input type="email" className={styles.inputLogin} required/>
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="password-input" className={styles.label}>
                            Senha
                        </label>
                        <input type="text" className={styles.inputLogin} id='password-input' required/>
                    </div>
                    <button type='submit' className={styles.buttonForm}>
                        Entrar
                    </button>
                </div>
                
            </form>
        </section>
    </> 
    )
}

export default Login