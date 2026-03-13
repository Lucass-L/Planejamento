
import { useEffect, useState } from 'react';
import CardRequest from '../../components/CardRequest';
import styles from './Home.module.css';
import {Car, Search, ArrowRight, ArrowLeft} from 'lucide-react';


const Home = () => {
    
    const [listaCardsExemplo, setListaCardsExemplos] = useState([]);

    useEffect (() => {
        const buscarDados = async () => {
    try {
      const resposta = await fetch('http://localhost:3001/aulas');
      const dados = await resposta.json();
      setListaCardsExemplos(dados);
    } catch (error) {
      console.error("Erro ao buscar os professores:", error);
    }
  };

  buscarDados();
}, []);


    const [nomeBusca,setNomeBusca] = useState('');
    const [paginaAtual, setPaginaAtual] = useState(1);
    const itensPorPagina = 5;

    const handleChange = (event) =>{
        setNomeBusca(event.target.value);
        console.log(nome);
    }

    const listaDeItensFiltrados = listaCardsExemplo.filter((item) => item.professor.toLowerCase().includes(nomeBusca.toLowerCase()));

    const indiceUltimo = paginaAtual * itensPorPagina;
    const IndicePrimeiro = indiceUltimo - itensPorPagina;
    const itensExibidos = listaDeItensFiltrados.slice(IndicePrimeiro, indiceUltimo);

    const totalDePaginas = Math.ceil(listaDeItensFiltrados.length / itensPorPagina)

    useEffect(()  => {
        setPaginaAtual(1)
    }, [nomeBusca])

    return(
    <div className={styles.containerDashboard}>
            <h2 className={styles.titulo}>Dashboard</h2>
        <div className={styles.containerInput}>
            <Search className={styles.icon}/>
            <input className={styles.inputSearch} type='text' placeholder='Nome do Professor' value={nomeBusca} onChange={handleChange}/>
            <select defaultValue="Status" className={styles.containerFiltro} name="Status">
                <option value="Status" disabled>Status</option>
                <option value="Atrasado">Atrasado</option>
                <option value="Pendente">Pendente</option>
                <option value="Aprovado">Aprovado</option>
            </select>

        </div>

        <div className={styles.containerCards}>
            {itensExibidos.length > 0 ? (
                itensExibidos.map((dado, index) => (
                    <CardRequest
                    key={index}
                    professor={dado.professor}
                    materia={dado.materia}
                    data={dado.data}
                    hora={dado.hora}
                    turma={dado.turma}
                    />
                ))
            ) : (
                    <p>Nenhum professor Encontrado</p>
            )}
        <div className={styles.paginacao}>
            <button disabled={paginaAtual === 1} onClick={() => setPaginaAtual(paginaAtual -1)}>
                <ArrowLeft size={'16px'}/>
            </button>
            <span className={styles.paginacaoControl}>{paginaAtual} / {totalDePaginas}</span>
            <button disabled={paginaAtual >= totalDePaginas} onClick={() => setPaginaAtual(paginaAtual +1)}>
                <ArrowRight size={'16px'}/>
            </button>
        </div>
        </div>
    </div>
    )
}
export default Home;