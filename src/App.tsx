import { Features } from "@features";
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import OverviewPompes from "./components/OverviewPompes/OverviewPompes";
import Parametres from "./components/parametres/Parametres";
import PompeView from "./components/pompe/PompeView";
import Rapport from './components/rapports/Rapport';

function App() {

  /** App Layout Structure */
const NavBar = () => {
  const dispatch = useDispatch();
  const isUserConected = useSelector(Features.UserFeature.selector.isUserSignedIn);
  
  /**
   * Log user out
   */
  const handleLogout = () => {
    dispatch(Features.UserFeature.action.setUserAuthStatus(false));
  }

  return (
    <AppBar>
      <Toolbar variant="dense">
        <div style={{ display: 'flex', flex: '1'}}>
          <Link to={"/pompes"}><Typography sx={{ padding: '20px', color: "white !important" }} component="div">Overview</Typography></Link>
          <Link to={"/rapports"}><Typography sx={{ padding: '20px', color:"white !important" }} component="div">Rapports</Typography></Link>
          <Link to={"/comptes"}><Typography sx={{ padding: '20px', color:"white !important", flexGrow: '1', mr: "1" }} component="div">Comptes</Typography></Link>
          <Link to={"/pompeIndividuelle"}><Typography sx={{ padding: '20px', color:"white !important", flexGrow: '1', mr: "1" }} component="div">Pompe</Typography></Link>
          <Link to={"/parametres"}><Typography sx={{ padding: '20px', color:"white !important", flexGrow: '1', mr: "1" }} component="div">Parametres</Typography></Link>
          
        </div>
        {isUserConected && <Link to={"/"}><Button variant='outlined' size='small' onClick={handleLogout} sx={{ padding: '12px', color:"black !important", backgroundColor: "white" }} component="div">Déconnexion</Button></Link>}
      </Toolbar>
    </AppBar>
  );
};

  return (
    <BrowserRouter basename='/inf1583-gestion-pompe'>
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/rapports' element={<Rapport />}/>
        <Route path='/pompes' element={<OverviewPompes />}/>
        <Route path='/pompeIndividuelle' element={<PompeView />}/>
        <Route path='/parametres' element={<Parametres />}/>
        <Route path='*' element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
