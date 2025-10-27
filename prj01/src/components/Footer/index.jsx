import { Link } from 'react-router-dom';

import './style.css'

export default function Footer (){
    return(
        <>
        <footer className="footer">
        <div className="container">
            <div className="row">
            <div className="col-md-6 col-lg-3 mb-4 mb-md-0">
                <h2 className="footer-heading">Pet da Montanha</h2>
                <p className = "arrumandoFooter">Hotel e veterinária</p>


                <ul className="list-unstyled">
                 <li>
                    <a
                    href="https://www.instagram.com/petdamontanha/"
                    >
                    <span className="fa fa-instagram"/>
                    </a>
                </li>
                </ul>

            </div>
            <div className="col-md-6 col-lg-3 pl-lg-5 mb-4 mb-md-0">
                <h2 className="footer-heading">Navegação Rápida</h2>
                <ul className="list-unstyled">
                    <li>
                        <Link to="/" className="py-2 d-block">
                            Início
                        </Link>
                    </li>
                    <li>
                        <Link to="/sobre" className="py-2 d-block">
                            Sobre
                        </Link>
                    </li>
                    <li>
                        <Link to="/servicos" className="py-2 d-block">
                            Serviços
                        </Link>
                    </li>
                    <li>
                        <Link to="/fotos" className="py-2 d-block">
                            Galeria
                        </Link>
                    </li>
                    <li>
                        <Link to="/planos" className="py-2 d-block">
                            Planos
                        </Link>
                    </li>
                    <li>
                        <Link to="/contato" className="py-2 d-block">
                            Contato
                        </Link>
                    </li>
                </ul>
            </div>

            
            <div className="col-md-6 col-lg-3 mb-4 mb-md-0">
                <h2 className="footer-heading">Alguma Dúvida?</h2>
                <div className="block-23 mb-3">
                <ul className='list-unstyled'>


                    <li>
                    <a href="https://www.google.com/maps/place/PET+DA+MONTANHA+Hotel+e+Veterin%C3%A1ria/data=!4m2!3m1!1s0x0:0x4b476edcf9d82e5?sa=X&ved=1t:2428&ictx=111&cshid=1759434184470773">   
                    <span className="icon fa fa-map"/>
                    <span className="text">R. Leovigildo Lourenço da Cunha, 90 - Centro, Joanópolis - SP, 12980-000</span>
                    </a> 
                    </li>


                    <li className = "listaParaEspacamento">
                    <a href="https://wa.me/+5511944926547">
                        <span className="icon fa fa-phone" />
                        <span className="text">(11) 944926547</span> 
                    </a>
                    </li>


                    <li className="listaParaEspacamento">
                    <a href="mailto:petdamontanha.joa@gmail.com" >
                        <span className="icon fa fa-paper-plane" />
                        <span className="text">petdamontanha.joa@gmail.com</span> 
                    </a>
                    </li> 


                </ul>
                </div>
            </div>
            </div>


            <div className="col-md-12 text-center">
            <p className="copyright">
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                Copyright © All rights reserved | This template is made with{" "}
                <i className="fa fa-heart" aria-hidden="true" /> by {" "}
                <a href="https://colorlib.com" target="_blank" className="linkColorlib">
                Colorlib.com
                </a>
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
            </p>
            </div>
        </div>
        </footer>
        </>
    )
}