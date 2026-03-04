import { BrowserRouter, Routes, Route} from 'react-router-dom';


import Dashboard from '../pages/Dashboard/Dashboard.jsx';
import Login from '../pages/Login/Login.jsx';


const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/dashboard' element={<Dashboard/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;