import { BrowserRouter, Routes, Route} from 'react-router-dom';


import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';

import Home from '../pages/Home';
import Turmas from '../pages/Turmas';
import Configuracao from '../pages/Configuracoes/Configuracoes';
import Professores from '../pages/Professores';
import Transferencia from '../pages/Transferencia';
import Requisicoes from '../pages/Requisições';


const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login/>}/>


                <Route path='/dashboard' element={<Dashboard/>}>
                    <Route index element={<Home/>}/>
                    <Route path='requisicoes' element={<Requisicoes/>}/>
                    <Route path='turmas' element={<Turmas/>}/>
                    <Route path='professores' element={<Professores/>}/>
                    <Route path='transferencia' element={<Transferencia/>}/>
                    <Route path='configuracao' element={<Configuracao/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;