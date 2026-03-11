
import CardRequest from '../../components/CardRequest';
import styles from './Home.module.css';
import {Search} from 'lucide-react';

const Home = () => {
    //professor, materia, data, hora, turma
    const listaCardsExemplo = [
        {professor: 'Marina Finger', materia: 'Matemática', data:'11/03', hora:'19:30', turma:'103'},
        {professor: 'Patrick', materia: 'Educação Física', data:'09/03', hora:'19:10', turma:'203'},
        {professor: 'Marina ', materia: 'Inglês', data:'02/03', hora:'21:30', turma:'303'},
        {professor: 'Natália', materia: 'Geografia', data:'27/02', hora:'17:30', turma:'6°B'},
        {professor: 'Itaci', materia: 'Filosofia', data:'05/03', hora:'23:30', turma:'8°A'},{professor: 'Marina Finger', materia: 'Matemática', data:'11/03', hora:'19:30', turma:'103'},
        {professor: 'Patrick', materia: 'Educação Física', data:'09/03', hora:'19:10', turma:'203'},
        {professor: 'Marina ', materia: 'Inglês', data:'02/03', hora:'21:30', turma:'303'},
        {professor: 'Natália', materia: 'Geografia', data:'27/02', hora:'17:30', turma:'6°B'},
        {professor: 'Itaci', materia: 'Filosofia', data:'05/03', hora:'23:30', turma:'8°A'},{professor: 'Marina Finger', materia: 'Matemática', data:'11/03', hora:'19:30', turma:'103'},
        {professor: 'Patrick', materia: 'Educação Física', data:'09/03', hora:'19:10', turma:'203'},
        {professor: 'Marina ', materia: 'Inglês', data:'02/03', hora:'21:30', turma:'303'},
        {professor: 'Natália', materia: 'Geografia', data:'27/02', hora:'17:30', turma:'6°B'},
        {professor: 'Itaci', materia: 'Filosofia', data:'05/03', hora:'23:30', turma:'8°A'}
    ]
    return(
    <div className={styles.containerDashboard}>
            <h2 className={styles.titulo}>Dashboard</h2>
        <div className={styles.containerInput}>
            <Search className={styles.icon}/>
            <input className={styles.inputSearch} type='text' placeholder='Nome do Professor'/>
            <select className={styles.containerFiltro} name='Status'>
                <option disabled selected hidden>Status</option>
                <option >Atrasado</option>
                <option>Pendente</option>
                <option>Aprovado</option>
            </select>
        </div>

        <div className={styles.containerCards}>
            {listaCardsExemplo.map((dado) => 
            <CardRequest 
            professor={dado.professor}
            materia={dado.materia}
            data={dado.data}
            hora={dado.hora}
            turma={dado.turma}
            />)}
        </div>
                <div className={styles.containerCards}>
            {listaCardsExemplo.map((dado) => 
            <CardRequest 
            professor={dado.professor}
            materia={dado.materia}
            data={dado.data}
            hora={dado.hora}
            turma={dado.turma}
            />)}
        </div>
    </div>
    )
}
export default Home;