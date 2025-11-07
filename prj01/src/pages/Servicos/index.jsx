import React from 'react';
import ImagemComecoPagina from "../../components/ImagemComecoPagina";
import { tabserviços } from '../../assets/tabelas';
import TabServicos from '../../components/TabServiços/index'; 
import './style.css'

import Cachorro1 from '../../assets/images/Cachorro1.png'
import Maira01 from '../../assets/images/Maira01.jpeg'
import BiscoitoPet from '../../assets/images/Padaria/BiscoitoPet.png'
import taxidog from '../../assets/images/Serv/taxidog.jpeg'
import banhoetosa from '../../assets/images/Serv/banhoetosa.jpeg'
import farmaciapet from '../../assets/images/Serv/farmaciapet.jpg'
import acessoriopet from '../../assets/images/Serv/acesspet.jpg'

/*Imagens para aparecer nos serviços com seus respectivos id. */
const imageMap = {
  1:  Cachorro1,
  2: Maira01,
  3: BiscoitoPet,
  4 : banhoetosa,
  5:taxidog,
  6:farmaciapet,
  7: acessoriopet

};

const servicosCompletos = tabserviços.map((servico) => ({
  ...servico,
  imagem: imageMap[servico.id] || 'https://placehold.co/600x500',
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