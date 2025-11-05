import { tabserviços } from '../../assets/tabelas';
import './style.css';

export default function TabServiços({ id }) {

    const tsData = tabserviços.find(ts => ts.id === id);

    if (!tsData) {
        return null;
    }

    const IconeComponente = tsData.icone;

    return (
        <div className="col-md-4 d-flex align-self-stretch px-4 ftco-animate">
            <div className="d-block services text-center custom-card">
                <div className="icon-circle">
                    {IconeComponente && <IconeComponente />}
                </div>

                <div className="media-body">
                    <div className="text-content">
                        <h3 className="heading">{tsData.titulo}</h3>
                        <p>{tsData.texto}</p>
                        <h3 className="heading">{tsData.titulo2}</h3>
                        <p>{tsData.texto2}</p>
                    </div>                  
                </div>
            </div>
        </div>
    );
}