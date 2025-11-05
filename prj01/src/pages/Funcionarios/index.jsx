import ImagemComecoPagina from "../../components/ImagemComecoPagina";
import Funcionario from "../../components/TabFuncionarios";


export default function Funcionarios(){
    return(
        <>
            <ImagemComecoPagina titulo="Funcionários" />
            <section className="ftco-section ftco-no-pt ftco-intro">
                <div className="container">
                    <div className="row justify-content-center" >
                        <Funcionario id={1} />
                        <Funcionario id={2} />
                        <Funcionario id={3} />
                    </div>
                </div>
            </section>
        </>
    )
}