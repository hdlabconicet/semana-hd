import { useRoutes, BrowserRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";
import ColorBar from "../../Components/ColorBar/ColorBar";
import Home from "../Home/Home";
import NotFound from "../NotFound/NotFound";
import "./App.css";

const AppRoutes = () => {
  return useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
  ]);
};

function App() {
  return (
    <BrowserRouter>
      <nav>
        <a href="https://aahd.net.ar/">
          <img
            src="images/aahd.png"
            alt="Asociación Argentina de Humanidades Digitales"
            width={60}
          />
        </a>
        <a href="https://rchd.com.co/">
          <img src="images/rchd.png" alt="Red Colombiana de Humanidades Digitales" width={78} />
        </a>
        <a href="http://humanidadesdigitales.net/">
          <img src="images/rhd.png" alt="Red de Humanidades Digitales" width={68} />
        </a>
        <a href="https://cuaieed.unam.mx/"><img src="images/cuaieed.svg" alt="Coordinación de Universidad Abierta y Educación Digital" width={60} /></a>
        <NavLink to="/proposal" className="proposal">Propón un evento</NavLink>
        <ColorBar />
      </nav>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
