import { Card, Container, Row, Col, Image } from "react-bootstrap";
import { funcionarios } from '../../assets/tabelas';
import './style.css';

export default function Funcionarios({ id }) {
    const fData = funcionarios.find(f => f.id===id)

    if (!fData) {
        return null;
    }

    const FotoFuncionario = fData.foto;

    return (
        // <div className="col-md-4 d-flex align-self-stretch px-4 ftco-animate"> 
        //     <div className="d-block services text-center custom-card">
        //         <div className="icon-circle">
        <div className="col-md-3 d-flex justify-content-center mb-5">
            <div className="card-funcionario text-center">
                <div className="foto-funcionario-wrapper">
                    {FotoFuncionario && (<img src={FotoFuncionario} alt={fData.nome} className="foto-funcionario"/>) }
                </div>
                 {/* <div className="media-body">
                    <div className="text-content">
                        <h3 className="heading">{fData.nome}</h3>
                        <p>{fData.ocupacao}</p>
                    </div>

                </div> */}
                <div className="info-funcionario">
                    <h3 className="nome-funcionario">{fData.nome}</h3>
                    <p className="ocupacao-funcionario">{fData.ocupacao}</p>
                </div>
            </div>
        </div>
    )
}