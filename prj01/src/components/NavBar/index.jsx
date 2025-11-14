import { useState } from 'react';   
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown, Button } from 'react-bootstrap';
import './style.css';
import PetDaMontanhaLogo from '../../assets/images/PetDaMontanhaLogo2.png';
import { useAuth } from '../../context/AuthContext';

export default function NavBar() {
    const location = useLocation();
    const { pathname } = location;
    const [expanded, setExpanded] = useState(false);
    const handleNavClose = () => setExpanded(false);

    const { user, logout } = useAuth();
    const handleLogout = () => {
      logout();
      handleNavClose(); // Fecha o menu (em telas pequenas)
    }

    return (
        <Navbar 
            expand="lg" 
            className="navbar-dark ftco_navbar bg-dark ftco-navbar-light" 
            id="ftco-navbar"
            expanded={expanded}
            onToggle={() => setExpanded(!expanded)}
        >
            <Container fluid className="container-nav">
                
                <Navbar.Brand as={Link} to="/" onClick={handleNavClose}>
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
                        <Nav.Link as={Link} to="/" active={pathname === "/"} onClick={handleNavClose}>
                            Início
                        </Nav.Link>
                        <Nav.Link as={Link} to="/sobre" active={pathname === "/sobre"} onClick={handleNavClose}>
                            Sobre
                        </Nav.Link>
                        <Nav.Link as={Link} to="/funcionarios" active={pathname === "/funcionarios"} onClick={handleNavClose}>
                            Funcionários
                        </Nav.Link>
                        <Nav.Link as={Link} to="/servicos" active={pathname === "/servicos"} onClick={handleNavClose}>
                            Serviços
                        </Nav.Link>
                        <Nav.Link as={Link} to="/fotos" active={pathname === "/fotos"} onClick={handleNavClose}>
                            Galeria
                        </Nav.Link>
                        <Nav.Link as={Link} to="/padaria" active={pathname === "/padaria"} onClick={handleNavClose}>
                            Padaria PET
                        </Nav.Link>
                        <Nav.Link as={Link} to="/contato" active={pathname === "/contato"} onClick={handleNavClose}>
                            Contato
                        </Nav.Link>
                    </Nav>

                                        <Nav className="nav-botao-entrar"> 
                      {user ? (
                        // Se o usuário ESTIVER LOGADO
                        <NavDropdown title={`Olá, ${user}!`} id="user-menu" align="end">
                          {/* Você pode adicionar mais links aqui (ex: /perfil) */}
                          <NavDropdown.Item onClick={handleLogout}>
                            Sair
                          </NavDropdown.Item>
                        </NavDropdown>
                      ) : (
                        // Se o usuário NÃO ESTIVER LOGADO
                        <Nav.Link as={Link} to="/entrar" className="btn btn-login" onClick={handleNavClose}>
                            Entrar
                        </Nav.Link>
                      )}
                    </Nav>
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}