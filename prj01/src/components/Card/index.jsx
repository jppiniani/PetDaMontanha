import { cards } from '../../assets/tabelas';
import { Link } from 'react-router-dom';
import './style.css';

export default function Card({ id }) {

    const cardData = cards.find(card => card.id === id);

    if (!cardData) {
        return null;
    }

    const IconeComponente = cardData.icone;

    return (
        <div className="col-md-4 d-flex align-self-stretch px-4 ftco-animate">
            <div className="d-block services text-center custom-card">
                <div className="icon-circle">
                    {IconeComponente && <IconeComponente />}
                </div>

                <div className="media-body">
                    <div className="text-content">
                        <h3 className="heading">{cardData.titulo}</h3>
                        <p>{cardData.texto}</p>
                    </div>

                    <Link
                        className="btn-custom d-flex align-items-center justify-content-center"
                        to="/servicos"
                    >
                        <span className="fa fa-chevron-right"></span>
                    </Link>
                        
                </div>
            </div>
        </div>
    );
}