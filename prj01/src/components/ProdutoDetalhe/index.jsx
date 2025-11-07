import React from 'react';
import { produtos } from '../../assets/tabelas';

export default function ProdutoDetalhe({ productId, onBack }) {
    
    const produtoData = produtos.find(p => p.id === productId);

    if (!produtoData) {
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
                            src={produtoData.imagemDetalhe}
                            alt={produtoData.nome}
                        />
                    </div>
                    <div className="col-md-6">
                        <div className="small mb-1">{produtoData.sku}</div>
                        <h1 className="display-5 fw-bolder">{produtoData.nome}</h1>
                        <div className="fs-5 mb-5">
                            {produtoData.precoOriginal ? (
                                <>
                                    <h2 className="text-decoration-line-through">
                                        {produtoData.precoOriginal}
                                    </h2>
                                    {' '}
                                    <h2>{produtoData.preco}</h2>
                                </>
                            ) : (
                                <h2>{produtoData.preco}</h2>
                            )}
                        </div>
                        <p className="lead">{produtoData.descricaoLonga}</p>
                        <h4>Estoque: {produtoData.estoque}</h4>
                        <br />
                        <div className="d-flex">
                            {/* <input
                                className="form-control text-center me-3"
                                id="inputQuantity"
                                type="num"
                                defaultValue="1"
                                style={{ maxWidth: "3rem" }}
                            /> */}
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