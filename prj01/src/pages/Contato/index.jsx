import ImagemComecoPagina from "../../components/ImagemComecoPagina";
import './style.css'
export default function Contato(){
    return(
        <>
        <ImagemComecoPagina titulo="Contato" />
        <section className="ftco-section-contato">
            <div className="container">
                <div className="row justify-content-center">
                <div className="col-md-6 text-center mb-5 boardTexto5">
                    <h2 className="heading-section">Formas de contato</h2>
                </div>
                </div>
                <div className="row justify-content-center">
                <div className="col-md-12">
                    <div className="wrapper">
                    <div className="row mb-5">

                        <div className="col-md-3 mb-5">
                        <div className="dbox w-100 text-center custom-card-contato">
                            <div className="icon d-flex align-items-center justify-content-center btn-custom">
                            <span className="fa fa-map-marker" />
                            </div>
                            <div className="text">
                            <p className="texto-contato">
                                <a href="https://www.google.com/maps/place/PET+DA+MONTANHA+Hotel+e+Veterin%C3%A1ria/data=!4m2!3m1!1s0x0:0x4b476edcf9d82e5?sa=X&ved=1t:2428&ictx=111&cshid=1759434184470773">
                                    R. Leovigildo Lourenço da Cunha, 90 - Centro, Joanópolis - SP, 12980-000
                                </a>
                            </p>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-3 mb-5">
                        <div className="dbox w-100 text-center custom-card-contato">
                            <div className="icon d-flex align-items-center justify-content-center btn-custom">
                            <span className="fa fa-phone" />
                            </div>
                            <div className="text">
                            <p className="texto-contato">
                                <a href="https://wa.me/+5511944926547" >(11) 944926547</a>
                            </p>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-3 mb-5">
                        <div className="dbox w-100 text-center custom-card-contato">
                            <div className="icon d-flex align-items-center justify-content-center btn-custom">
                            <span className="fa fa-paper-plane" />
                            </div>
                            <div className="text">
                            <p className="texto-contato">
                                <a href="mailto: petdamontanha.joa@gmail.com">
                                petdamontanha.joa@gmail.com
                                </a>
                            </p>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-3 mb-5">
                        <div className="dbox w-100 text-center custom-card-contato">
                            <div className="icon d-flex align-items-center justify-content-center btn-custom">
                            <span className="fa fa-globe" />
                            </div>
                            <div className="text">
                            <p className="texto-contato">
                                <a href="https://pet-da-montanha.vercel.app/">
                                pet-da-motanha.vercel.app
                                </a>
                            </p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>

        <div className = "boardTexto"> {/*Esse css está no css do sobre. Lá eu explico o porquê*/} {/* não ta mais :P */}
        <h2 className="titulo">Nossa localização!</h2>  
        </div>
        <div className="boardMap"> {/*Esse css está no css do sobre. Lá eu explico o porquê*/} {/* não ta mais :P */}
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.4742422831982!2d-46.2806688!3d-22.9327553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cea7043fdf44c1%3A0x4b476edcf9d82e5!2sPET%20DA%20MONTANHA%20Hotel%20e%20Veterin%C3%A1ria!5e0!3m2!1spt-BR!2sbr!4v1761241127457!5m2!1spt-BR!2sbr"
            width="100%"
            height={450}
            style={{ border: 0 }}
            allowFullScreen="123"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            
            
        />
        </div>

        </>
    )
}