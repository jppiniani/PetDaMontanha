import { Link } from 'react-router-dom'
import Card from '../../components/Card'
import LogoDesfoqueEscuro from '../../assets/images/LogoDesfoqueEscuro.jpg'
import { FaDog, FaCat, FaShower } from 'react-icons/fa';
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
                    icone = {FaDog}
                    titulo = 'Equilíbrio Canino'
                    texto = 'Brincadeiras e adestramento saudável e divertido para cães, com participação dos tutores e foco no bem-estar animal.'
                    />
                    <Card
                    icone = {FaCat}
                    titulo = 'Hospedagem e cuidados diários para pets'
                    texto = 'Oferecemos creche durante o dia e hospedagem completa para pets, com todo o conforto, segurança e carinho que eles merecem.'
                    />
                    <Card 
                    icone = {FaShower}
                    titulo = 'Cuidados com higiene'
                    texto = 'Oferecemos serviços de banho, tosa e cuidados estéticos para pets, garantindo higiene, conforto e beleza para seu melhor amigo.'
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

