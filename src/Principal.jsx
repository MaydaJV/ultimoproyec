import { BrowserRouter,Routes, Route,Link} from "react-router-dom";
import Acordeon from "./Acordeon";
import './estilos.css'
import { Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import Peliculas from "./Peliculas";
function Princi(props){
    return(
        <div className>
            <h1>Actores Famosos</h1>
            <div>
                <h2>Robert Downer Jr.</h2>
            </div>
            <div>
                <h2>Dwayne johnson</h2>
            </div>
            <div>
                <h2>Bradley Cooper</h2>

                </div>

        </div>
    );
}
function Peli(props){
    return(
        <div className="pelicula">
            <Peliculas></Peliculas>
        </div>
    );
}




function Principal(props)

{
    return(
        <div className="caja">
               <header className="header">
          <h1>Cinemateca Boliviana</h1>
        </header>
        {/**hola */}
        <Navbar color="dark" dark expand="md" className="menu">
          <NavbarBrand href="#">Menú</NavbarBrand>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/">Principal</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/pag2">Películas</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
            <div className="Contenido">
                <Routes>
                    <Route path="/" element={<Princi></Princi>}></Route>
                    <Route path="/pag2" element={<Peli></Peli>}></Route>
                </Routes>
            </div>
        <footer className="footer">
         <h3>Jessica Valkiria Mayda Apaza                         INF122</h3>
        </footer>
        </div>
    );
}
export default Principal;