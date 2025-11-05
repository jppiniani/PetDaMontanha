import ImagemComecoPagina from "../../components/ImagemComecoPagina";
import TabServiços from "../../components/TabServiços";
export default function Servicos(){
    return(
        <>
        <ImagemComecoPagina titulo="Serviços" />
         <section className="ftco-section ftco-no-pt ftco-intro">
                        <div className="container">
                            <div className="row" >
                                <TabServiços id={1} />
                                <TabServiços id={2} />
                                <TabServiços id={3} />
                                
                            </div>
                        </div>
                    </section>
        </>
    )
}