import Fundo from '../../assets/images/FundoDesfoque.jpg'
import './style.css'

export default function ImagemComecoPagina({ titulo }){ /*PROPS É DIIIMAIS*/
    return(
        <section
        className="hero-wrap hero-wrap-2 hero-wrap-comeco"
        style={{ backgroundImage: `url(${Fundo})` }}
        data-stellar-background-ratio="0.5"
        >
        <div className="overlay" />
        <div className="container">
            <div className="row no-gutters slider-text align-items-end">
            <div className="col-md-9 ftco-animate pb-5">
                <h1 className="mb-0 bread">{titulo}</h1>
            </div>
            </div>
        </div>
        </section>
    )
}