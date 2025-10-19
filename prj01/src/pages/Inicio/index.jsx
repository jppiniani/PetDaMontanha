import { Link } from 'react-router-dom'
import Card from '../../components/Card'
import LogoDesfoqueEscuro from '../../assets/images/LogoDesfoqueEscuro.jpg'
import { GiDogHouse } from "react-icons/gi";
import { CiPill } from "react-icons/ci";
import { MdOutlineLocalHospital } from "react-icons/md";
import './style.css'

export default function Inicio(){
    return(
        <>
        <div
        className="hero-wrap js-fullheight hero-wrap-custom"
        style={{ backgroundImage: `url(${LogoDesfoqueEscuro})`}}
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

       <section className="ftco-section ftco-no-pt ftco-intro">
            <div className="container">
                <div className="row" >
                    <Card 
                    icone = {GiDogHouse}
                    titulo = 'Hotel e Veterinária'
                    texto = 'Nossas instalações foram projetadas pensando no conforto e bem-estar dos animais. Temos espaços amplos e seguros para que seu pet se sinta em casa durante a estadia conosco. Venha nos visitar e conhecer nosso espaço.'
                    />
                    <Card
                    icone = {MdOutlineLocalHospital}
                    titulo = 'Cuidados Veterinários'
                    texto = 'Oferecemos cuidados veterinários como avaliações médicas, banho e tosa e ozonioterapia.'
                    />
                    <Card 
                    icone = {CiPill}
                    titulo = 'Farmácia e Padaria Pet'
                    texto = 'Em nosso espaço, o cliente poderá pedir '
                    />
                </div>
            </div>
        </section>

        <section className='feedback'>    
            <script src="https://elfsightcdn.com/platform.js" async></script>
            <div class="elfsight-app-aab09656-a86c-4120-91d0-c5dc8ed705d5" data-elfsight-app-lazy></div>
        </section>

        </>
    )
}

