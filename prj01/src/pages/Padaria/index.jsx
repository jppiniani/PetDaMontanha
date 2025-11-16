import React, { useState, useEffect } from 'react';
import ImagemComecoPagina from "../../components/ImagemComecoPagina";
// import { produtos } from '../../assets/tabelas'; // <-- REMOVER
import { api } from '../../api'; // <-- IMPORTAR API
import ItensPadaria from "../../components/ItensPadaria/index";
import ProdutoDetalhe from '../../components/ProdutoDetalhe';

import './style.css'

export default function Padaria(){
    const [selectedProduct, setSelectedProduct] = useState(null); // Alterado para guardar o objeto todo
    const [produtosList, setProdutosList] = useState([]); // <-- Estado para a lista da API
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // --- Buscar produtos da API ---
    useEffect(() => {
        const fetchProdutos = async () => {
            try {
                setLoading(true);
                const response = await api.get('/api/produtos/');
                setProdutosList(response.data);
                setError(null);
            } catch (err) {
                setError("Erro ao carregar produtos.");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchProdutos();
    }, []); // Array vazio, executa apenas uma vez

    // Função para mostrar detalhes (agora passa o objeto)
    const handleShowDetails = (id) => {
        const product = produtosList.find(p => p.id === id);
        setSelectedProduct(product);
        window.scrollTo(0, 0); 
    }; 

    // Função para voltar à lista
    const handleBackToList = () => {
        setSelectedProduct(null);
    };

    // Renderização condicional (passa o objeto 'productData')
    if (selectedProduct) {
        return (
          <ProdutoDetalhe 
            productData={selectedProduct} // <-- Passa o objeto do produto
            onBack={handleBackToList} 
          />
        );
    }

    // --- Renderização da Lista ---
    
    if (loading) {
        return (
            <>
                <ImagemComecoPagina titulo="Padaria Pet" />
                <div className="container text-center py-5">
                    <h2>Carregando produtos...</h2>
                </div>
            </>
        );
    }

    if (error) {
        return (
            <>
                <ImagemComecoPagina titulo="Padaria Pet" />
                <div className="container text-center py-5">
                    <h2 className="text-danger">{error}</h2>
                </div>
            </>
        );
    }

    // 'return' padrão (lista de produtos)
    return(
        <>
        <ImagemComecoPagina titulo="Padaria Pet" />

        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    
                    {/* Mapeia a lista vinda da API */}
                    {produtosList.map((produto) => (
                        <ItensPadaria
                          key={produto.id} 
                          produtoData={produto} // <-- Passa o objeto completo
                          onShowDetails={handleShowDetails}
                        />
                    ))}

                </div>
            </div>
        </section>
        </>
    )
}