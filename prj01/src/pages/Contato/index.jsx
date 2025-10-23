import ImagemComecoPagina from "../../components/ImagemComecoPagina";
export default function Contato(){
    return(
        <>
        <ImagemComecoPagina titulo="Contato" />
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.4742422831982!2d-46.2806688!3d-22.9327553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cea7043fdf44c1%3A0x4b476edcf9d82e5!2sPET%20DA%20MONTANHA%20Hotel%20e%20Veterin%C3%A1ria!5e0!3m2!1spt-BR!2sbr!4v1761241127457!5m2!1spt-BR!2sbr"
            width="100%"
            height={450}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        />
        </>
    )
}