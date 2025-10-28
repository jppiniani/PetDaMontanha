import { GiDogHouse } from "react-icons/gi";
import { LuBone } from "react-icons/lu";
import { MdOutlineLocalHospital } from "react-icons/md";
import teste from './images/Cachorro1.png'

export const cards = [
    {
        id: 1,
        icone: GiDogHouse,
        titulo: 'Hotel e Veterinária',
        texto: 'Nossas instalações foram projetadas pensando no conforto e bem-estar dos animais. Temos espaços amplos e seguros para que seu pet se sinta em casa durante a estadia conosco. Venha nos visitar e conhecer nosso espaço.',
    },
    {
        id: 2,
        icone: MdOutlineLocalHospital,
        titulo: 'Cuidados Veterinários',
        texto: 'Oferecemos cuidados veterinários como avaliações médicas, banho e tosa e ozonioterapia. Também atendemos em domicílio.' ,
    },
    {
        id: 3,
        icone: LuBone,
        titulo: 'Padaria Pet',
        texto: 'Quer surpreender seu amigo ? Conheça a Padaria Pet. Nela, você encontrará produtos pets variados e de qualidades como sorvete, molhos para ração e até cerveja !'
    },
]

export const funcionarios = [
    {
        id:1,
        foto: teste,
        nome: 'Teste 1',
        ocupacao: 'Teste' 
    },
    {
        id:2,
        foto: teste,
        nome: 'Teste 222222222222222222 222222222222',
        ocupacao: 'Teste' 
    },
    {
        id:3,
        foto: teste,
        nome: 'Teste 3',
        ocupacao: 'Teste teste teste teste teste teste teste teste teste  teste teste teste teste  teste teste teste teste  teste teste teste teste  ' 
    },
    {
        id:4,
        foto: teste,
        nome: 'Nome Placeholder',
        ocupacao: 'Médico veterinário Placeholder' 
    }
]


