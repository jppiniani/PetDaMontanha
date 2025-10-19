import ImagemComecoPagina from "../../components/ImagemComecoPagina";
import PetDaMontanhaLogo from '../../assets/images/PetDaMontanhaLogo.png';
import Cachorro1 from '../../assets/images/Cachorro1.png'
import Cachorro2 from '../../assets/images/Cachorro2.png'
import Gato1 from '../../assets/images/Gato1.png'
import PetDaMontanhaMesa from '../../assets/images/PetDaMontanhaMesa.png'
import './style.css';

export default function Sobre(){
    return(
        <>
        <ImagemComecoPagina titulo="Sobre nós"/>
        <section className="ftco-section ftco-degree-bg">
        <div className="container">
            <div className="row">
            <div className="col-lg-8 ftco-animate">
                <p>
                <img
                    src={PetDaMontanhaLogo}
                    alt="Logo Pet da Montanha"
                    className="img-fluid pet-logo"
                />
                </p>
                <bold>
                <h2 className="sobre1">Conheça a nossa história</h2>
                </bold>
                <h4 className="sobre2">Quem somos? <br/> </h4>
                <div className = "boardTexto">
                <p className="texto1">
                Pioneiros de Joanopólis. <br/>    
                Hotel de cachorro e gato, será? <br />
                Pois é, a ideia inovadora de nossas vidas veio ao decorrer do segundo ano da pandemia em 2020. Eu já formada em veterinária há 2 anos, com um bebê de meses, 
                meu marido sem emprego, precisávamos de alguma coisa. Começamos a hospedar em nossa casa e eu atendia a domicílio. Mas a procura de hospedagem pet começou a 
                aumentar e pensei : Por que não abrir um hotelzinho com clínica veterinária ?<br/>  Então, coloquei o sonho no papel : Estudei, fiz cursos, contratamos uma ótima 
                arquiteta e pensamos em cada detalhe para os pets terem conforto e uma experiência maravilhosa. E assim cresceu o Pet da Montanha - Hotel e Veterinária, na 
                cidade de Joanópolis, nossa Joia da Mantiqueira, terra do Lobisomem, com muitas cachoeiras e seus encantos naturais.
                </p>
                </div>
                <h4 className="sobre3">Por que nos escolher?</h4>
                

                <div className="boardTexto2">

                <p className="texto1">
                Possuímos diversos serviços que serão úteis e agradáveis para seu pet :
                </p>

                <ul className="texto1">
                <li> Prezamos pela saúde e conforto do seu pet</li>
                <li> Cuidado veterinário de confiança e profissional</li>
                <li> Produtos de qualidade</li>
                <li> Atendimento humanizado</li>
                </ul> </div>
                <p>

                <img src={PetDaMontanhaMesa} alt="" className="img-fluid" />
                </p>
            </div>{" "}
            {/* .col-md-8 */}
            <div className="col-lg-4 sidebar pl-lg-5 ftco-animate">
                <div className="sidebar-box ftco-animate">
                <div className="categories">
                    <h3 className="titulo-secao">Serviços</h3>
                    <li>
                    <a href="services.html#petFeliz" className ="servicos">
                        Hotel e Veterinária <span className="fa fa-chevron-right" />
                    </a>
                    </li>
                    <li>
                    <a href="services.html#petShow" className ="servicos">
                        Cuidados Veterinários <span className="fa fa-chevron-right" />
                    </a>
                    </li>
                    <li>
                    <a href="services.html#petPremium" className ="servicos">
                        Farmácia e Padaria Pet <span className="fa fa-chevron-right" />
                    </a>
                    </li>
                </div>
                </div>
                <div className="sidebar-box ftco-animate">
                <h3 className="titulo-secao">Contato</h3>
                <p className="titulo-secao">Telefone:</p>
                <p>
                    <a href="https://wa.me/+5511944926547"className="mr-2">
                    <span className="fa fa-phone mr-1" />
                    (11) 94492-6547
                    </a>
                </p>
                <p />
                <p className="titulo-secao">Email: </p>

                <p>
                    <a href="mailto: petdamontanha.joa@gmail.com" className="mr-2">
                    petdamontanha.joa@gmail.com
                    </a>
                </p>
                
                <img src={Cachorro1} alt="" className="img-fluid1" />
                <img src={Cachorro2} alt="" className="img-fluid2" />
                <img src={Gato1} alt="" className="img-fluid3" />
                </div>
            </div>
            </div>
        </div>
        </section>

        </>
    )
}