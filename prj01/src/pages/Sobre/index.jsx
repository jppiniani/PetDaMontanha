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
        <ImagemComecoPagina />
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
                <h4 className="sobre2">Quem somos?</h4>
                <p>
                Pioneiros de Joanópolis.
                </p>
                <p>
                Hotel de cachorro e gato, será? <br />
                Pois é, a ideia inovadora de nossas vidas veio ao decorrer do segundo ano da pandemia, em 2020. Eu já formada em veterinária há 2 anos, com um bebê de meses, 
                meu marido sem emprego, precisávamos de alguma coisa. Começamos a hospedar em nossa casa, e eu atendia a domicílio. Mas a procura de hospedagem pet começou a 
                aumentar, e pensei "por quê não abrir um hotelzinho com clínica veterinária?". Então, coloquei o sonho no papel, estudei, fiz cursos, contratamos uma ótima 
                arquiteta e pensamos em cada detalhe para os pets terem conforto e uma experiência maravilhosa. E assim cresceu o Pet da Montanha - Hotel e Veterinária, na 
                cidade de Joanópolis, nossa Joia da Mantiqueira, terra do Lobisomem, com muitas cachoeiras e seus encantos naturais.
                </p>
                <h4 className="sobre3">Por que nos escolher?</h4>
                <p>
                Possuímos diversos serviços que serão úteis e agradáveis para seu dog:
                </p>
                <ul>
                <li> Prezamos pela saúde do seu cão</li>
                <li> Cuidado veterinário de confiança</li>
                <li> Atendimento ao Cliente Especializado</li>
                <li> Central de Atendimento Disponível</li>
                </ul>
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
                    <a href="services.html#petFeliz">
                        Plano Pet Feliz <span className="fa fa-chevron-right" />
                    </a>
                    </li>
                    <li>
                    <a href="services.html#petShow">
                        Plano Pet Show <span className="fa fa-chevron-right" />
                    </a>
                    </li>
                    <li>
                    <a href="services.html#petPremium">
                        Plano Pet Premium <span className="fa fa-chevron-right" />
                    </a>
                    </li>
                </div>
                </div>
                <div className="sidebar-box ftco-animate">
                <h3>Contato</h3>
                <p>Telefone:</p>
                <p>
                    <a href="https://wa.me/+5511944926547"className="mr-2">
                    <span className="fa fa-phone mr-1" />
                    (11) 94492-6547
                    </a>
                </p>
                <p />
                <p>Email: </p>
                <p>
                    <a href="mailto: lambdacrecheveterinaria@gmail.com">
                    lambdacrecheveterinaria@gmail.com
                    </a>
                </p>
                <p />
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