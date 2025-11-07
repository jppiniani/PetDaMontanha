import React from 'react';
import { FaInstagram } from 'react-icons/fa'; 
import './style.css';

const TabServicos = ({ servico, imageSide = 'left' }) => {
  const { titulo, texto, titulo2, texto2, imagem, instagramLink } = servico;

  const orderClassImg = imageSide === 'left' ? '' : 'order-md-last';
  const orderClassText = imageSide === 'left' ? '' : 'order-md-first';

  return (
    <div className="row g-0 shadow-lg rounded overflow-hidden servico-card mb-5">
      <div className={`col-12 col-md-5 servico-imagem-col ${orderClassImg}`}>
        <img
          src={imagem}
          alt={titulo}
          className="servico-imagem" 
        />
      </div>
      <div className={`col-12 col-md-7 p-4 p-md-5 servico-texto-wrapper ${orderClassText}`}>
        
        <h2 className="servico-titulo">{titulo}</h2>
        <p className="servico-texto">{texto}</p>

        {/* 3. ADICIONAR O BLOCO DE RENDERIZAÇÃO CONDICIONAL */}
        {instagramLink && (
          <div className="servico-social-icon mt-3">
            <p className = "servico-texto">Acompanhe o Instagram da Lara <a 
              href={instagramLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Link para o Instagram"
            >
              <FaInstagram size={28} /> {/* Você pode ajustar o tamanho aqui */}
            </a>  </p>
          </div>
        )}


        {titulo2 && (
          <div className="mt-auto pt-4 w-100 servico-horario-bloco">
            <h4 className="servico-subtitulo">{titulo2}</h4>
            <p className="servico-texto-secundario">{texto2}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabServicos;