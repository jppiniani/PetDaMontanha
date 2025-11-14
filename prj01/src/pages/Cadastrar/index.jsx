import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { api } from "../../api";
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
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [msg, setMsg] = useState("");

  async function handleCadastro(e) {
    e.preventDefault();

    if (senha !== confirmarSenha) {
      setMsg("As senhas não coincidem.");
      return;
    }

    try {
      await api.post("/register", { usuario, senha });
      setMsg("Conta criada com sucesso!");
    } catch (error) {
      setMsg(error.response?.data?.error || "Erro ao cadastrar.");
    }
  }

  return (
    <>
      <Container fluid className="login-container-fluid">
        <Row className="login-row">
          
          <Col 
            md={7} 
            className="image-column d-none d-md-block"
            style={{ backgroundImage: `url(${Cachorro1})` }}
          />

          <Col md={5} className="form-column form-column-cadastrar">
            <div className="form-container">

              <h2 className="text-center">Cadastrar</h2>
              <p className="text-muted text-center">Crie sua conta preenchendo os dados abaixo</p>
              
              <Form onSubmit={handleCadastro}>

                <Form.Group className="input-group-icon">
                  <UserIcon />
                  <Form.Control 
                    type="text"
                    placeholder="Digite seu usuário"
                    className="form-control-icon"
                    onChange={e => setUsuario(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="input-group-icon">
                  <LockIcon />
                  <Form.Control 
                    type="password"
                    placeholder="Crie uma senha"
                    className="form-control-icon"
                    onChange={e => setSenha(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="input-group-icon">
                  <LockIcon />
                  <Form.Control 
                    type="password"
                    placeholder="Confirme sua senha"
                    className="form-control-icon"
                    onChange={e => setConfirmarSenha(e.target.value)}
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="btn-login">
                  Cadastrar
                </Button>

                <p style={{ color: "red", marginTop: "10px" }}>{msg}</p>

                <hr className="separator" />

                <p className="signup-text">Já tem uma conta?</p>
                
                <Button
                  variant="secondary"
                  type="button"
                  className="btn-signup"
                  as={Link}
                  to="/entrar"
                >
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