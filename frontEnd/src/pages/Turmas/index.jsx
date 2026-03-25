import { useState } from 'react'
import CardTurma from '../../components/CardTurma'
import styles from './Turmas.module.css'

const TURMAS_DATA = [
  { id: 1, turma: "101", professor: "Ricardo Oliveira" },
  { id: 2, turma: "102", professor: "Ana Costa" },
  { id: 3, turma: "103", professor: "Marcio Santos" },
  { id: 4, turma: "201", professor: "Juliana Melo" },
  { id: 5, turma: "202", professor: "Roberto Ferreira" },
  { id: 6, turma: "203", professor: "Fernanda Lima" },
  { id: 7, turma: "301", professor: "Carlos Gomes" },
  { id: 8, turma: "302", professor: "Beatriz Almeida" },
  { id: 9, turma: "303", professor: "Sérgio Rocha" },
  { id: 10, turma: "401", professor: "Patrícia Nunes" }
];

const Turmas = () => {


    const [busca, setBusca] = useState('')
    const [turmas, setTurmas] = useState(TURMAS_DATA)



    return(
        <>
        <h2>Pagina de Turmas</h2>
        <div className={styles.containerOptions}>
            <label htmlFor='input-filter' >Turma:</label>
            <input className={styles.opnFilter} placeholder='Ex: 103' id='input-filter' type='text'/>
        </div>
        <section className={styles.containerCards}>
            <CardTurma turma={'103'} regente={'Marina'}/>
            <CardTurma turma={'104'} regente={'Flávio'}/>
            <CardTurma turma={'203'} regente={'Mario'}/>
            <CardTurma turma={'105'} regente={'Marcelo'}/>
            <CardTurma turma={'303'} regente={'Itaci'}/>
            <CardTurma turma={'201'} regente={'Keli'}/>
            <CardTurma turma={'302'} regente={'Jéssica'}/>
            <CardTurma turma={'202'} regente={'Ana'}/>
        </section>
        </>
    )
}

export default Turmas