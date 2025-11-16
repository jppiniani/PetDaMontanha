import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { api } from '../../api';
import { Container, Button, Table, Modal, Form, Row, Col } from 'react-bootstrap';
import ImagemComecoPagina from '../../components/ImagemComecoPagina';
import './style.css'

export default function AdminProdutos() {
    const { isAdmin, isAuthenticated } = useAuth();
    const navigate = useNavigate();

    const [produtos, setProdutos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Estados para o Modal de Edição/Criação
    const [showModal, setShowModal] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [currentProduto, setCurrentProduto] = useState(null);

    // Proteção da Rota
    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/entrar');
        } else if (!isAdmin) {
            navigate('/');
        }
    }, [isAuthenticated, isAdmin, navigate]);

    // Buscar Produtos
    useEffect(() => {
        if (isAdmin) {
            fetchProdutos();
        }
    }, [isAdmin]);

    const fetchProdutos = async () => {
        try {
            setLoading(true);
            const response = await api.get('/api/produtos/');
            setProdutos(response.data);
            setError(null);
        } catch (err) {
            setError("Erro ao buscar produtos.");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    // --- Funções do Modal ---
    const handleCloseModal = () => {
        setShowModal(false);
        setCurrentProduto(null);
        setIsEditing(false);
    };

    const handleShowCreate = () => {
        // Objeto base para um novo produto
        setCurrentProduto({
            nome: "",
            preco: "",
            precoOriginal: "",
            rating: 0,
            sale: 0,
            imagem: "",
            imagemDetalhe: "",
            descricaoLonga: "",
            estoque: 0
        });
        setIsEditing(false);
        setShowModal(true);
    };

    const handleShowEdit = (produto) => {
        setCurrentProduto(produto);
        setIsEditing(true);
        setShowModal(true);
    };

    // --- Funções de API (CRUD) ---
    
    const handleDelete = async (id) => {
        if (window.confirm("Tem certeza que deseja deletar este produto?")) {
            try {
                await api.delete(`/api/produtos/${id}`);
                fetchProdutos(); // Re-busca a lista
            } catch (err) {
                setError("Erro ao deletar produto.");
                console.error(err);
            }
        }
    };

    const handleSaveChanges = async () => {
        try {
            if (isEditing) {
                // Atualizar (PUT)
                await api.put(`/api/produtos/${currentProduto.id}`, currentProduto);
            } else {
                // Criar (POST)
                await api.post('/api/produtos/', currentProduto);
            }
            fetchProdutos();
            handleCloseModal();
        } catch (err) {
            setError("Erro ao salvar produto.");
            console.error(err);
        }
    };

    // Atualiza o estado do formulário no modal
    const handleFormChange = (e) => {
        const { name, value, type, checked } = e.target;
        setCurrentProduto(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? (checked ? 1 : 0) : value
        }));
    };

    if (!isAdmin) return null; // Não renderiza nada se não for admin
    if (loading) return <Container><h2>Carregando...</h2></Container>;
    if (error) return <Container><h2 className="text-danger">{error}</h2></Container>;

    return (
        <>
            <ImagemComecoPagina titulo="Gerenciar Produtos" />
            <Container className="py-5">
                <Button variant="primary" onClick={handleShowCreate} className="mb-3">
                    Adicionar Novo Produto
                </Button>

                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Preço</th>
                            <th>Estoque</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {produtos.map(produto => (
                            <tr key={produto.id}>
                                <td>{produto.id}</td>
                                <td>{produto.nome}</td>
                                <td>{produto.preco}</td>
                                <td>{produto.estoque}</td>
                                <td>
                                    <Button variant="warning" size="sm" onClick={() => handleShowEdit(produto)} className="me-2">
                                        Editar
                                    </Button>
                                    <Button variant="danger" size="sm" onClick={() => handleDelete(produto.id)}>
                                        Deletar
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>

            {/* --- Modal de Edição/Criação --- */}
            <Modal show={showModal} onHide={handleCloseModal} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>{isEditing ? 'Editar Produto' : 'Criar Novo Produto'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {currentProduto && (
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Nome</Form.Label>
                                <Form.Control type="text" name="nome" value={currentProduto.nome} onChange={handleFormChange} />
                            </Form.Group>
                            
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Preço (ex: R$20,00)</Form.Label>
                                        <Form.Control type="text" name="preco" value={currentProduto.preco} onChange={handleFormChange} />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Preço Original (opcional)</Form.Label>
                                        <Form.Control type="text" name="precoOriginal" value={currentProduto.precoOriginal || ''} onChange={handleFormChange} />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Estoque</Form.Label>
                                        <Form.Control type="number" name="estoque" value={currentProduto.estoque} onChange={handleFormChange} />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Rating (0-5)</Form.Label>
                                        <Form.Control type="number" name="rating" value={currentProduto.rating} onChange={handleFormChange} />
                                    </Form.Group>
                                </Col>
                                <Col>
                                     <Form.Group className="mb-3">
                                        <Form.Label>Em Oferta?</Form.Label>
                                        <Form.Check type="switch" name="sale" checked={currentProduto.sale === 1} onChange={handleFormChange} />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Form.Group className="mb-3">
                                <Form.Label>Nome Imagem (ex: Femur.png)</Form.Label>
                                <Form.Control type="text" name="imagem" value={currentProduto.imagem || ''} onChange={handleFormChange} />
                            </Form.Group>

                             <Form.Group className="mb-3">
                                <Form.Label>Nome Imagem Detalhe (ex: Sorvete2.png)</Form.Label>
                                <Form.Control type="text" name="imagemDetalhe" value={currentProduto.imagemDetalhe || ''} onChange={handleFormChange} />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Descrição Longa</Form.Label>
                                <Form.Control as="textarea" rows={3} name="descricaoLonga" value={currentProduto.descricaoLonga || ''} onChange={handleFormChange} />
                            </Form.Group>
                        </Form>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={handleSaveChanges}>
                        Salvar Alterações
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}