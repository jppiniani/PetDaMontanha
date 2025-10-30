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


export const produtos = [
  {
    id: 1,
    imagem: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    nome: "TESTE PRODUTO 1",
    preco: "R$40.00 - R$80.00",
    precoOriginal: null,
    rating: 2,
    sale: false,
    imagemDetalhe: "https://dummyimage.com/600x700/dee2e6/6c757d.jpg",
    descricaoLonga: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium at dolorem quidem modi. Nam sequi consequatur obcaecati excepturi alias magni, accusamus eius blanditiis delectus ipsam minima ea iste laborum vero?",
  },
  {
    id: 2,
    imagem: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    nome: "TESTE PRODUTO 2",
    preco: "R$18.00",
    precoOriginal: "R$20.00",
    rating: 5,
    sale: true,
    imagemDetalhe: "https://dummyimage.com/600x700/dee2e6/6c757d.jpg",
    descricaoLonga: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium at dolorem quidem modi. Nam sequi consequatur obcaecati excepturi alias magni, accusamus eius blanditiis delectus ipsam minima ea iste laborum vero?",
  },
  {
    id: 3,
    imagem: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    nome: "TESTE PRODUTO 3",
    preco: "R$25.00",
    precoOriginal: "R$50.00",
    rating: 0,
    sale: true,
    imagemDetalhe: "https://dummyimage.com/600x700/dee2e6/6c757d.jpg",
    descricaoLonga: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium at dolorem quidem modi. Nam sequi consequatur obcaecati excepturi alias magni, accusamus eius blanditiis delectus ipsam minima ea iste laborum vero?",
  },
  {
    id: 4,
    imagem: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    nome: "TESTE PRODUTO 4",
    preco: "R$40.00",
    precoOriginal: null,
    rating: 5,
    sale: false,
    imagemDetalhe: "https://dummyimage.com/600x700/dee2e6/6c757d.jpg",
    descricaoLonga: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium at dolorem quidem modi. Nam sequi consequatur obcaecati excepturi alias magni, accusamus eius blanditiis delectus ipsam minima ea iste laborum vero?",
  },
  {
    id: 5,
    imagem: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    nome: "TESTE PRODUTO 5",
    preco: "R$25.00",
    precoOriginal: "R$50.00",
    rating: 0,
    sale: true,
    imagemDetalhe: "https://dummyimage.com/600x700/dee2e6/6c757d.jpg",
    descricaoLonga: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium at dolorem quidem modi. Nam sequi consequatur obcaecati excepturi alias magni, accusamus eius blanditiis delectus ipsam minima ea iste laborum vero?",
  },
  {
    id: 6,
    imagem: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    nome: "TESTE PRODUTO 6",
    preco: "R$120.00 - R$280.00",
    precoOriginal: null,
    rating: 0,
    sale: false,
    imagemDetalhe: "https://dummyimage.com/600x700/dee2e6/6c757d.jpg",
    descricaoLonga: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium at dolorem quidem modi. Nam sequi consequatur obcaecati excepturi alias magni, accusamus eius blanditiis delectus ipsam minima ea iste laborum vero?",
  },
  {
    id: 7,
    imagem: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    nome: "TESTE PRODUTO 7",
    preco: "R$18.00",
    precoOriginal: "R$20.00",
    rating: 5,
    sale: true,
    imagemDetalhe: "https://dummyimage.com/600x700/dee2e6/6c757d.jpg",
    descricaoLonga: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium at dolorem quidem modi. Nam sequi consequatur obcaecati excepturi alias magni, accusamus eius blanditiis delectus ipsam minima ea iste laborum vero?",
  },
  {
    id: 8,
    imagem: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    nome: "TESTE PRODUTO 8",
    preco: "R$40.00",
    precoOriginal: null,
    rating: 5,
    sale: false,
    imagemDetalhe: "https://dummyimage.com/600x700/dee2e6/6c757d.jpg",
    descricaoLonga: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium at dolorem quidem modi. Nam sequi consequatur obcaecati excepturi alias magni, accusamus eius blanditiis delectus ipsam minima ea iste laborum vero?",
  }
];