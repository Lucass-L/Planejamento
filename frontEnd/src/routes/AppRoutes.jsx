import { BrowserRouter, Routes, Route} from 'react-router-dom';


import Dashboard from '../pages/Dashboard/Dashboard.jsx';
import Login from '../pages/Login/Login.jsx';

import Home from '../pages/Home/Home.jsx';
import Turmas from '../pages/Turmas/Turmas.jsx';
import Configuracao from '../pages/Configuracoes/Configuracoes.jsx';
import Professores from '../pages/Professores/Professores.jsx';
import Transferencia from '../pages/Transferencia/Transferencia.jsx';


const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login/>}/>


                <Route path='/dashboard' element={<Dashboard/>}>
                    <Route index element={<Home/>}/>
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