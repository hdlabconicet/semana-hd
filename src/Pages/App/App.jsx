import { useRoutes, BrowserRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Home from '../Home/Home';
import NotFound from '../NotFound/NotFound';
import './App.css';

const AppRoutes = () => {
  return useRoutes([
    { path: '/', element: <Home /> },
    { path: "*", element: <NotFound /> },
  ]);
};

function App() {
  return (
    <BrowserRouter>
      {/*<nav>
        <NavLink to="/">Home</NavLink>
  </nav>*/}
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
