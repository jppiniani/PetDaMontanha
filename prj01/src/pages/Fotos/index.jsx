import ImagemComecoPagina from "../../components/ImagemComecoPagina";
import Carrossel from "../../components/Carrossel";
import './style.css'

export default function Fotos(){
    return(
        <>
        <ImagemComecoPagina titulo="Galeria" />
        <h2 className="titulo">Venha conhecer nosso trabalho mais de perto!</h2>
        <div className="instagram">
            <script async src="https://elfsightcdn.com/platform.js" />
            <div
                className="elfsight-app-74e876ca-b715-47e3-8dc3-f950dde34fef"
                data-elfsight-app-lazy=""
            />
        </div>
        <p>Aqui embaixo temos o carrossel que o João não quis ;(</p>
        <Carrossel />
        </>
    )
}