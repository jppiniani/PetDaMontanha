import CachorroTriste from '../../assets/images/CachorroTriste.gif'
import './style.css'

export default function PaginaErro(){
    return(
        <>
        <div className="erro">
            <h1>Erro 404. Essa página não existe!</h1>
            <img src={CachorroTriste} alt="Cachorro Triste" className="erro-imagem"/>
        </div>
        </>
    )
}