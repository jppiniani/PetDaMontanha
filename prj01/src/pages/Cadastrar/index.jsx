import React from 'react';
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import '../Entrar/style.css'

import Cachorro1 from '../../assets/images/Cachorro1.png'

const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="input-icon">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
  </svg>
);

const EnvelopeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="input-icon">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
  </svg>
);

const LockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="input-icon">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 0 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
  </svg>
);

export default function Cadastrar() {
  return (
    <>
      <Container fluid className="login-container-fluid">
        <Row className="login-row">
          
          <Col 
            md={7} 
            className="image-column d-none d-md-block"
            style={{ backgroundImage: `url(${Cachorro1})` }}
          >
          </Col>

          <Col md={5} className="form-column form-column-cadastrar">
            <div className="form-container">
              
              <h2 className="text-center">Cadastrar</h2>
              <p className="text-muted text-center">
                Crie sua conta preenchendo os dados abaixo
              </p>
              
              <Form>
                {/* Nome */}
                <Form.Group className="input-group-icon" controlId="formBasicName">
                  <UserIcon />
                  <Form.Control 
                    type="text" 
                    placeholder="Digite seu nome completo" 
                    className="form-control-icon"
                  />
                </Form.Group>
                {/* Email */}
                <Form.Group className="input-group-icon" controlId="formBasicEmail">
                  <EnvelopeIcon />
                  <Form.Control 
                    type="email" 
                    placeholder="Digite seu e-mail" 
                    className="form-control-icon"
                  />
                </Form.Group>
                {/* Senha */}
                <Form.Group className="input-group-icon" controlId="formBasicPassword">
                  <LockIcon />
                  <Form.Control 
                    type="password" 
                    placeholder="Crie uma senha" 
                    className="form-control-icon"
                  />
                </Form.Group>

                {/* Confirmar Senha */}
                <Form.Group className="input-group-icon" controlId="formBasicConfirmPassword">
                  <LockIcon />
                  <Form.Control 
                    type="password" 
                    placeholder="Confirme sua senha" 
                    className="form-control-icon"
                  />
                </Form.Group>
                {/* Cadastrar */}
                {/* ainda nao leva pra lugar nenhum */}
                <Button variant="primary" type="submit" className="btn-login">
                  Cadastrar
                </Button>

                <hr className="separator" />

                <p className="signup-text">
                  Já tem uma conta?
                </p>
                
                <Button variant="secondary" type="button" className="btn-signup" as={Link} to="/entrar">
                  Entrar
                </Button>

              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}