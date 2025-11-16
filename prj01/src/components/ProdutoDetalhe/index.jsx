import React from 'react';
// import { produtos } from '../../assets/tabelas'; // <-- REMOVER
import { productImageMap } from '../../assets/tabelas'; // <-- IMPORTAR O MAPA

// Recebe 'productData' como prop
export default function ProdutoDetalhe({ productData, onBack }) {
    
    // const produtoData = produtos.find(p => p.id === productId); // <-- REMOVER

    if (!productData) {
        return null; 
    }
    return (
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="mb-4">
                    <button className="btn btn-outline-dark btn-detalhes" onClick={onBack}>
                        &larr; Voltar para a lista
                    </button>
                </div>

                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img
                            className="card-img-top mb-5 mb-md-0"
                            // Usa o mapa para encontrar a imagem de detalhe
                            src={productImageMap[productData.imagemDetalhe] || 'https://dummyimage.com/600x700/dee2e6/6c757d.jpg'}
                            alt={productData.nome}
                        />
                    </div>
                    <div className="col-md-6">
                        <div className="small mb-1">{productData.sku}</div>
                        <h1 className="display-5 fw-bolder">{productData.nome}</h1>
                        <div className="fs-5 mb-5">
                            {productData.precoOriginal ? (
                                <>
                                    <h2 className="text-decoration-line-through">
                                        {productData.precoOriginal}
                                    </h2>
                                    {' '}
                                    <h2>{productData.preco}</h2>
                                </>
                            ) : (
                                <h2>{productData.preco}</h2>
                            )}
                        </div>
                        <p className="lead">{productData.descricaoLonga}</p>
                        <h4>Estoque: {productData.estoque}</h4>
                        <br />
                        <div className="d-flex">
                            <button className="btn btn-outline-dark flex-shrink-0 btn-detalhes" type="button">
                                <a href="https://wa.me/c/5511944926547" className='bi-cart-fill me-1'>Solicitar produto</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}