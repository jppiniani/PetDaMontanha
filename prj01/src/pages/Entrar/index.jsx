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
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
        </>
    )
}