import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { createBrowserRouter, Link, Outlet, RouterProvider } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import OverviewPompes from "./components/OverviewPompes/OverviewPompes";
import Rapport from './components/rapports/Rapport';
import { Features } from "./redux/features";

function App() {

  /** App Layout Structure */
const Layout = () => {
  const dispatch = useDispatch();
  const isUserConected = useSelector(Features.UserFeature.selector.isUserSignedIn);
  
  /**
   * Log user out
   */
  const handleLogout = () => {
    dispatch(Features.UserFeature.action.setUserAuthStatus(false));
  }

  return (
      <>
        <AppBar>
          <Toolbar variant="dense">
            <div style={{ display: 'flex', flex: '1'}}>
              <Link to={"/pompes"}><Typography sx={{ padding: '20px', color: "white !important" }} component="div">Overview</Typography></Link>
              <Link to={"/rapports"}><Typography sx={{ padding: '20px', color:"white !important" }} component="div">Rapports</Typography></Link>
              <Link to={"/comptes"}><Typography sx={{ padding: '20px', color:"white !important", flexGrow: '1', mr: "1" }} component="div">Comptes</Typography></Link>
            </div>
            {isUserConected && <Link to={"/"}><Button variant='outlined' size='small' onClick={handleLogout} sx={{ padding: '12px', color:"black !important", backgroundColor: "white" }} component="div">Déconnexion</Button></Link>}
          </Toolbar>
        </AppBar>
        <Outlet />
      </>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout/>,
    path: "/",
    children: [
      {
        path:"/",
        element: <HomePage />
      },
      {
        path: "/rapports",
        element: <Rapport />
      },
      {
        path: "/pompes",
        element:<OverviewPompes />

      }
    ]
  },
]);

  return (
    <RouterProvider router={router}/>
  )
}

export default App
