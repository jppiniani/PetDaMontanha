import { Link, useLocation } from 'react-router-dom';

import './style.css'

import PetDaMontanhaLogo from '../../assets/images/PetDaMontanhaLogo.png'


export default function NavBar(){

    const location = useLocation();
    const { pathname } = location;

    return(
        <>
        <nav
        className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
        id="ftco-navbar"
        >
        <div className="container">
            <a className="navbar-brand" href="index.html">
            <img
                src={PetDaMontanhaLogo}
                alt="Logo Pet da Montanha"
                className="mr-2"
                style={{ width: 40, height: 40, verticalAlign: "-4px" }}
            />
            
            </a>
            <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#ftco-nav"
            aria-controls="ftco-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <span className="fa fa-bars" /> Menu
            </button>
            <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav ml-auto">
                <li className={pathname === "/" ? "nav-item active" : "nav-item"}>
                    <Link to="/" className="nav-link">
                        Início
                    </Link>
                </li>

                <li className={pathname === "/sobre" ? "nav-item active" : "nav-item"}>
                    <Link to="/sobre" className="nav-link">
                        Sobre
                    </Link>
                </li>
                <li className={pathname === "/funcionarios" ? "nav-item active" : "nav-item"}>
                    <Link to="/funcionarios" className="nav-link">
                        Funcionários
                    </Link>
                </li>
                <li className={pathname === "/servicos" ? "nav-item active" : "nav-item"}>
                    <Link to="/servicos" className="nav-link">
                        Serviços
                    </Link>
                </li>
                <li className={pathname === "/fotos" ? "nav-item active" : "nav-item"}>
                    <Link to="/fotos" className="nav-link">
                        Fotos
                    </Link>
                </li>
                <li className={pathname === "/planos" ? "nav-item active" : "nav-item"}>
                    <Link to="/planos" className="nav-link">
                        Planos
                    </Link>
                </li>
                <li className={pathname === "/contato" ? "nav-item active" : "nav-item"}>
                    <Link to="/contato" className="nav-link">
                        Contato
                    </Link>
                </li>
            </ul>
            </div>
        </div>
        </nav>

        </>
    )
}