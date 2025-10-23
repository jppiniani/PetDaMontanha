import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap'; // <-- IMPORTAÇÕES NOVAS
import './style.css';
import PetDaMontanhaLogo from '../../assets/images/PetDaMontanhaLogo2.png';

export default function NavBar() {
    const location = useLocation();
    const { pathname } = location;

    return (
        <Navbar 
            expand="lg" 
            className="navbar-dark ftco_navbar bg-dark ftco-navbar-light" 
            id="ftco-navbar"
        >
            <Container fluid className="container-nav">
                
                <Navbar.Brand as={Link} to="/">
                    <img
                        src={PetDaMontanhaLogo}
                        alt="Logo Pet da Montanha"
                        className="mr-2"
                        style={{ width: 40, height: 40, verticalAlign: "-4px", marginLeft: 15}}
                    />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="ftco-nav" />

                <Navbar.Collapse id="ftco-nav">
                    
                    <Nav>
                        <Nav.Link as={Link} to="/" active={pathname === "/"}>
                            Início
                        </Nav.Link>
                        <Nav.Link as={Link} to="/sobre" active={pathname === "/sobre"}>
                            Sobre
                        </Nav.Link>
                        <Nav.Link as={Link} to="/funcionarios" active={pathname === "/funcionarios"}>
                            Funcionários
                        </Nav.Link>
                        <Nav.Link as={Link} to="/servicos" active={pathname === "/servicos"}>
                            Serviços
                        </Nav.Link>
                        <Nav.Link as={Link} to="/fotos" active={pathname === "/fotos"}>
                            Galeria
                        </Nav.Link>
                        <Nav.Link as={Link} to="/padaria" active={pathname === "/padaria"}>
                            Padaria PET
                        </Nav.Link>
                        <Nav.Link as={Link} to="/contato" active={pathname === "/contato"}>
                            Contato
                        </Nav.Link>
                    </Nav>

                    <Nav className="nav-botao-entrar"> 
                        <Nav.Link as={Link} to="/entrar" className="btn btn-login">
                            Entrar
                        </Nav.Link>
                    </Nav>
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}