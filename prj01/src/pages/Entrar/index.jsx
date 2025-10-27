import { Form, Button , Container, Row, Col } from "react-bootstrap";
import ImagemComecoPagina from "../../components/ImagemComecoPagina";
import './style.css'
export default function Entrar(){
    return(
        <>
        <ImagemComecoPagina titulo="Acesso do Usuário" />

        {/* Modelo de formulário que está no site do bootstrap
        https://react-bootstrap.netlify.app/docs/forms/overview */}
        <Container className="formulario">
            <Row className="justify-content-md-center">
                <Col md={6} lg={4}>

                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Endereço de e-mail</Form.Label>
                            <Form.Control type="email" placeholder="Digite seu e-mail" />
                            <Form.Text className="text-muted">
                            Nós nunca compartilharemos seu dados.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Lembrar da senha" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Acessar
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
        </>
    )
}