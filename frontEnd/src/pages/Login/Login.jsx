import { useState } from 'react'
import styles from './Login.module.css'

const Login = () => {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [error, setError] = useState('')

    const handlesubmit = async (e) =>{
        e.preventDefault();

        alert(`Usuário: ${email} \n Senha: ${senha}`)

        //Chamar o context para verificar se o usuario existe e tem permissao, usando await!
    }

    return(
    <>
        <section className={styles.container}>
            <form className={styles.card} onSubmit={handlesubmit}>
                <h2 className={styles.title}>
                    Login
                </h2>
                <div className={styles.groupFormMargin}>
                        <div className={styles.inputGroup}>
                        <label htmlFor="username-input" className={styles.label}>
                            Usuário
                        </label>
                        <input 
                        type="email" 
                        className={styles.inputLogin} 
                        id='email-input'
                        onChange={(e) => setEmail(e.target.value)}
                        required/>
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="password-input" className={styles.label}>
                            Senha
                        </label>
                        <input 
                        type="text" 
                        className={styles.inputLogin} 
                        id='password-input'
                        onChange={(e) => setSenha(e.target.value)} 
                        required/>
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