import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';
import PetDaMontanhaMesa from '../../assets/images/PetDaMontanhaMesa.png'
import { api } from "../../api";
import { useAuth } from '../../context/AuthContext';
import './style.css'

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

export default function Entrar() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [msg, setMsg] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const resposta = await api.post("/login", { usuario, senha });
      login(resposta.data.token); 
      navigate("/"); 
      // localStorage.setItem("token", resposta.data.token);
      // setMsg("Login realizado com sucesso!");
    } catch (error) {
      setMsg(error.response?.data?.error || "Erro ao tentar fazer login.");
    }
  }

  return (
    <>
      <Container fluid className="login-container-fluid">
        <Row className="login-row">

          <Col 
            md={7} 
            className="image-column d-none d-md-block"
            style={{ backgroundImage: `url(${PetDaMontanhaMesa})` }}
          />

          <Col md={5} className="form-column form-column-entrar">
            <div className="form-container">
              <h2 className="text-center">Entrar</h2>
              <p className="text-muted text-center">
                Insira seus dados de acesso abaixo
              </p>
              
              <Form onSubmit={handleLogin}>

                <Form.Group className="input-group-icon">
                  <EnvelopeIcon />
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
                    placeholder="Digite sua senha" 
                    className="form-control-icon"
                    onChange={e => setSenha(e.target.value)}
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="btn-login">
                  Log in
                </Button>

                <p style={{ color: "red", marginTop: "10px" }}>{msg}</p>

                <a href="#forgot" className="forgot-password-link">Esqueceu a Senha?</a>
                <hr className="separator" />
                <p className="signup-text">Ainda não tem uma conta?</p>

                <Button
                  variant="secondary"
                  type="button"
                  className="btn-signup"
                  as={Link}
                  to="/cadastrar"
                >
                  Cadastrar
                </Button>

              </Form>

            </div>
          </Col>

        </Row>
      </Container>
    </>
  );
}