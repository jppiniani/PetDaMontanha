import './style.css'

export default function Card(props){

    const IconeComponente = props.icone;
    
    return(
        <>
        <div className="col-md-4 d-flex align-self-stretch px-4 ftco-animate">
            <div className="d-block services text-center custom-card">
                <div className="icon-circle">
                    {IconeComponente && <IconeComponente />}
                </div>

                <div className="media-body">
                    <div className="text-content">
                        <h3 className="heading">{props.titulo}</h3>
                        <p>{props.texto}</p>
                    </div>

                    <a
                        className="btn-custom d-flex align-items-center justify-content-center"
                        href="services.html"
                    >
                        <span className="fa fa-chevron-right"></span>
                    </a>
                </div>
            </div>
        </div>
        </>
    )
}