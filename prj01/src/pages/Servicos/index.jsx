import React from 'react';
import ImagemComecoPagina from "../../components/ImagemComecoPagina";
import { tabserviços } from '../../assets/tabelas';
import TabServicos from '../../components/TabServiços/index'; 
import './style.css'

import Cachorro1 from '../../assets/images/Cachorro1.png'
import Maira02 from '../../assets/images/Maira02.avif'
import BiscoitoPet from '../../assets/images/Padaria/BiscoitoPet.png'

const imageMap = {
  1:  Cachorro1,
  2: Maira02,
  3: BiscoitoPet,
  /* Quem for colocar as proximas imagens importa aqui nesse arquivo e coloca o número de acordo com o id lá na tabela*/
};

const servicosCompletos = tabserviços.map((servico) => ({
  ...servico,
  imagem: imageMap[servico.id] || 'https://placehold.co/600x500', /* Imagem TOP placeholder vai tomando*/
}));

export default function Servicos() {
  return (
    <>
      <ImagemComecoPagina titulo="Serviços" />
      <section className="py-5">
        <div className="container ">
          <div className="d-flex flex-column g-5 ">
            {servicosCompletos.map((servico, index) => (
              <TabServicos
                key={servico.id}
                servico={servico} 
                imageSide={index % 2 === 0 ? 'left' : 'right'} 
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}