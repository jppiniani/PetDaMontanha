import React from 'react';
// import { produtos } from '../../assets/tabelas'; // <-- REMOVER
import { productImageMap } from '../../assets/tabelas'; // <-- IMPORTAR O MAPA

// Recebe 'produtoData' e 'onShowDetails' como props
export default function ItensPadaria({ produtoData, onShowDetails }) {
    
    // const produtoData = produtos.find(p => p.id === id); // <-- REMOVER
    
    if (!produtoData) {
        return null;
    }

    // Converte 'sale' (0 ou 1) para booleano
    const isSale = produtoData.sale === 1; 

    return (
        <div className="col mb-5">
            <div className="card h-100">
                {/* Badge "Sale" condicional */}
                {isSale && (
                    <div
                        className="badge bg-dark text-white position-absolute"
                        style={{ top: "0.5rem", right: "0.5rem" }}
                    >
                        Oferta
                    </div>
                )}

                {/* Imagem do Produto (MODIFICADA) */}
                <img
                    className="card-img-top"
                    // Usa o mapa para encontrar a imagem importada
                    src={productImageMap[produtoData.imagem] || 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg'} // Imagem padrão
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
                                {/* Simples, apenas para mostrar que tem rating */}
                                {Array.from({ length: produtoData.rating }, (_, i) => (
                                    <div key={i} className="bi-star-fill" />
                                ))}
                            </div>
                        )}

                        {/* Preço (sem alterações) */}
                        {produtoData.precoOriginal ? (
                            <>
                                <span className="text-muted text-decoration-line-through">
                                    {produtoData.precoOriginal}
                                </span>
                                {' '}
                                {produtoData.preco}
                            </>
                        ) : (
                            produtoData.preco
                        )}
                    </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                        <button 
                            className="btn btn-outline-dark mt-auto btn-detalhes" 
                            // Chama a função do pai passando o ID
                            onClick={() => onShowDetails(produtoData.id)} 
                        >
                            Mostrar Detalhes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}