import { Link } from 'react-router-dom'
import LogoDesfoque from '../../assets/images/LogoDesfoque.png'
import './style.css'

export default function Inicio(){
    return(
        <>
        <div
        className="hero-wrap js-fullheight hero-wrap-custom"
        style={{ backgroundImage: `url(${LogoDesfoque})` }}
        data-stellar-background-ratio="0.5"
        >
        <div className="overlay" />
        <div className="container">
            <div
            className="row no-gutters slider-text js-fullheight align-items-center justify-content-center"
            data-scrollax-parent="true"
            >
            <div className="col-md-11 ftco-animate text-center">
                <h1 className="mb-4">
                Pet da Montanha <br />
                Creche e Veterinária
                </h1>
                <p>
                    <Link to = '/sobre' className="btn btn-primary mr-md-4 py-3 px-4">
                            Saiba mais
                        <span className="ion-ios-arrow-forward" />
                    
                    </Link>
                </p>
            </div>
            </div>
        </div>
        </div>

        <h1>Início</h1>
        <p>Testezão top</p>

        {/* Elfsight Google Reviews | Untitled Google Reviews */}
        <div>
            <script async src="https://elfsightcdn.com/platform.js" />
            <div
                className="elfsight-app-460d81af-6ecf-45b4-b09c-da7ed695db2b"
                data-elfsight-app-lazy=""
            />
        </div>
        </>
    )
}

