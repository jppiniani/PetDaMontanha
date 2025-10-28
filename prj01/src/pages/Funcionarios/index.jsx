import ImagemComecoPagina from "../../components/ImagemComecoPagina";
import Funcionario from "../../components/TabFuncionarios";


export default function Funcionarios(){
    return(
        <>
            <ImagemComecoPagina titulo="Funcionários" />
            <section className="ftco-section ftco-no-pt ftco-intro">
                <div className="container">
                    <div className="row" >
                        <Funcionario id={1} />
                        <Funcionario id={2} />
                        <Funcionario id={3} />
                        <Funcionario id={4} />
                        <Funcionario id={4} />
                        <Funcionario id={4} />
                        <Funcionario id={4} />
                        <Funcionario id={4} />
                    </div>
                </div>
            </section>
        </>
    )
}