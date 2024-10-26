import { AppBar, Toolbar, Typography } from '@mui/material';
import { createBrowserRouter, Link, Outlet, RouterProvider } from 'react-router-dom';
import './App.css';
import OverviewPompes from "./components/OverviewPompes/OverviewPompes";
import Rapport from './components/rapports/Rapport';

function App() {

  /** App Layout Structure */
const Layout = () => {
  return (
      <>
        <AppBar>
          <Toolbar variant="dense">
            <Link to={"/"}><Typography sx={{ padding: '20px', color: "white !important" }} component="div">Overview</Typography></Link>
            <Link to={"/rapports"}><Typography sx={{ padding: '20px', color:"white !important" }} component="div">Rapports</Typography></Link>
            <Link to={"/comptes"}><Typography sx={{ padding: '20px', color:"white !important" }} component="div">Comptes</Typography></Link>
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
        element:<OverviewPompes />
      },
      {
        path: "/rapports",
        element: <Rapport />
      }
    ]
  },
]);

  return (
    <RouterProvider router={router}/>
  )
}

export default App
