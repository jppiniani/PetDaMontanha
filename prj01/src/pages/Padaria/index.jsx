import React, { useState } from 'react';
import ImagemComecoPagina from "../../components/ImagemComecoPagina";
import { produtos } from '../../assets/tabelas';
import ItensPadaria from "../../components/ItensPadaria/index";
import ProdutoDetalhe from '../../components/ProdutoDetalhe';
export default function Padaria(){
    const [selectedProductId, setSelectedProductId] = useState(null);

    // Função para mostrar detalhes
    const handleShowDetails = (id) => {
        setSelectedProductId(id);
        window.scrollTo(0, 0);
    }; 

    // Função para voltar à lista
    const handleBackToList = () => {
        setSelectedProductId(null);
    };

    // Renderização condicional
    if (selectedProductId) {
        return (
          <ProdutoDetalhe 
            productId={selectedProductId} 
            onBack={handleBackToList} 
          />
        );
    }

    // 'return' padrão (lista de produtos)
    return(
        <>
        <ImagemComecoPagina titulo="Padaria Pet" />

        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                {produtos.map((produto) => (
                    <ItensPadaria
                      key={produto.id} 
                      id={produto.id} 
                      onShowDetails={handleShowDetails}/>
                ))}

                </div>
            </div>
        </section>
        </>
    )
}