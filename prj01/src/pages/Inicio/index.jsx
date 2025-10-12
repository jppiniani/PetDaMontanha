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

       

        
<script src="https://elfsightcdn.com/platform.js" async></script>
<div class="elfsight-app-aab09656-a86c-4120-91d0-c5dc8ed705d5" data-elfsight-app-lazy></div>


        </>
    )
}

