import React from 'react';
import { produtos } from '../../assets/tabelas';

export default function ItensPadaria({ id, onShowDetails }) {
    const produtoData = produtos.find(p => p.id === id);

    if (!produtoData) {
        return null;
    }

    return (
        <div className="col mb-5">
            <div className="card h-100">
                {/* Badge "Sale" condicional */}
                {produtoData.sale && (
                    <div
                        className="badge bg-dark text-white position-absolute"
                        style={{ top: "0.5rem", right: "0.5rem" }}
                    >
                        Oferta
                    </div>
                )}

                {/* Imagem do Produto */}
                <img
                    className="card-img-top"
                    src={produtoData.imagem}
                    alt={produtoData.nome}
                />

                {/* Detalhes do Produto */}
                <div className="card-body p-4">
                    <div className="text-center">
                        {/* Nome do Produto */}
                        <h5 className="fw-bolder">{produtoData.nome}</h5>

                        {/* Rating (Estrelas) condicional */}
                        {produtoData.rating > 0 && (
                            <div className="d-flex justify-content-center small text-warning mb-2">
                                <div className="bi-star-fill" />
                                <div className="bi-star-fill" />
                                <div className="bi-star-fill" />
                                <div className="bi-star-fill" />
                                <div className="bi-star-fill" />
                            </div>
                        )}

                        {/* Preço Condicional (com/sem desconto) */}
                        {produtoData.precoOriginal ? (
                            <>
                                <span className="text-muted text-decoration-line-through">
                                    {produtoData.precoOriginal}
                                </span>
                                {' '}
                                {produtoData.preco}
                            </>
                        ) : (
                            // Se não tiver preço original, mostra só o preço normal
                            produtoData.preco
                        )}
                    </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                        <button 
                            className="btn btn-outline-dark mt-auto" 
                            onClick={() => onShowDetails(produtoData.id)}
                        >
                            {/* {produtoData.botaoTexto} */}
                            Mostrar Detalhes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}