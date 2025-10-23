import ImagemComecoPagina from "../../components/ImagemComecoPagina";
import Carrossel from "../../components/Carrossel";
import './style.css'

export default function Fotos(){
    return(
        <>
        <ImagemComecoPagina titulo="Galeria" />
        <h2 className="titulo">Venha conhecer nosso trabalho mais de perto!</h2>
        <Carrossel />
        </>
    )
}