import { GiDogHouse } from "react-icons/gi";
import { LuBone } from "react-icons/lu";
import { MdOutlineLocalHospital } from "react-icons/md";
import teste from './images/Cachorro1.png'

// Imagens Padaria
import Femur from './images/Padaria/Femur.png'
import Sorvete1 from './images/Padaria/Sorvete1.png'
import Sorvete2 from './images/Padaria/Sorvete2.png'
import MolhoRacao1 from './images/Padaria/MolhoRacao1.png'
import MolhoRacao2 from './images/Padaria/MolhoRacao2.png'
import Cerveja from './images/Padaria/Cerveja.png'
import TirasCarne from './images/Padaria/TirasCarne.png'
import Ossinhos from './images/Padaria/Ossinhos.png'
import Caolorado from './images/Padaria/Caolorado.png'
import Muffin from './images/Padaria/Muffin.png'
import BoloAniversario from './images/Padaria/BoloAniversario.png'
import BiscoitoPet from './images/Padaria/BiscoitoPet.png'
import PatePremium from './images/Padaria/PatePremium.png'
import PipocasDoce from './images/Padaria/PipocasDoce.png'

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
    imagem: Femur,
    nome: "Fêmur",
    preco: "R$20,00",
    precoOriginal: null,
    rating: 2,
    sale: false,
    imagemDetalhe: Femur,
    descricaoLonga: "Suíno Natural, deliciosa para seus cães!!",
    estoque: 10
  },
  {
    id: 2,
    imagem: Sorvete1,
    nome: "Sorvete para cães e gatos",
    preco: "R$7,00",
    precoOriginal: null,
    rating: 5,
    sale: false,
    imagemDetalhe: Sorvete2,
    descricaoLonga: "Foundue de chocolate",
    estoque: 12
  },
  {
    id: 3,
    imagem: MolhoRacao1,
    nome: "Molho para ração cães e gatos",
    preco: "R$25,00",
    precoOriginal: null,
    rating: 0,
    sale: false,
    imagemDetalhe: MolhoRacao2,
    descricaoLonga: "Costinha e frango",
    estoque: 8,
  },
  {
    id: 4,
    imagem: Cerveja,
    nome: "Cerveja para cachorros",
    preco: "R$10,00",
    precoOriginal: null,
    rating: 5,
    sale: false,
    imagemDetalhe: Cerveja,
    descricaoLonga: "Carne",
    estoque: 5,
  },
  {
    id: 5,
    imagem: TirasCarne,
    nome: "Tiras de Carne",
    preco: "R$6,70",
    precoOriginal: null,
    rating: 0,
    sale: false,
    imagemDetalhe: TirasCarne,
    descricaoLonga: "Picanha com açafrão e linhaça",
    estoque: 18,
  },
  {
    id: 6,
    imagem: Ossinhos,
    nome: "Ossinhos",
    preco: "R$16,00",
    precoOriginal: null,
    rating: 0,
    sale: false,
    imagemDetalhe: Ossinhos,
    descricaoLonga: "Chocolate",
    estoque: 17,
  },
  {
    id: 7,
    imagem: Caolorado,
    nome: "Cãolorado",
    preco: "R$16,50",
    precoOriginal: null,
    rating: 5,
    sale: true,
    imagemDetalhe: Caolorado,
    descricaoLonga: "Carne, frango",
    estoque: 14,
  },
  {
    id: 8,
    imagem: Muffin,
    nome: "Muffin",
    preco: "R$7,00",
    precoOriginal: null,
    rating: 5,
    sale: false,
    imagemDetalhe: Muffin,
    descricaoLonga: "Muffin",
    estoque: 9,
  },
  {
    id: 9,
    imagem: BoloAniversario,
    nome: "Bolo de aniversário para gatos e cachorros",
    preco: "R$24,50",
    precoOriginal: null,
    rating: 5,
    sale: false,
    imagemDetalhe: BoloAniversario,
    descricaoLonga: "Chocolate com hortelã, salmão com camomila",
    estoque: 11,
  },
  {
    id: 10,
    imagem: BiscoitoPet,
    nome: "Biscoito pet",
    preco: "R$14,30 - R$15,00",
    precoOriginal: null,
    rating: 5,
    sale: false,
    imagemDetalhe: BiscoitoPet,
    // descricaoLonga: "Carne, frango",
    descricaoLonga: "Seu pet merece o melhor. Apresentamos o Biscoito Pet de 80 gramas, no irresistível sabor Carne e Frango, a recompensa que une prazer e saúde. Oferecemos opções adaptadas a cada fase e necessidade: Super Premium, Idoso e Diet. Formulado com 8 tipos de cereais, este biscoito garante fácil digestão e é rico em proteínas e vitaminas, maximizando a vitalidade e o bem-estar. É o agrado perfeito e nutritivo para o seu companheiro.",
    estoque: 21,
  },
  {
    id: 11,
    imagem: PatePremium,
    nome: "Patê Premium",
    preco: "R$12,00",
    precoOriginal: null,
    rating: 5,
    sale: false,
    imagemDetalhe: PatePremium,
    descricaoLonga: "Frango, carne bovina, carne de panela com legumes",
    estoque: 15,
  },
  {
    id: 12,
    imagem: PipocasDoce,
    nome: "Pipocas Doces",
    preco: "R$13,00",
    precoOriginal: null,
    rating: 5,
    sale: false,
    imagemDetalhe: PipocasDoce,
    descricaoLonga: "Leite",
    estoque: 16,
  }
];