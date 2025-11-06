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

//Imagens Funcionários
import MairaFunc from './images/Func/MairaFunc.jpeg'
import BrunaFunc from './images/Func/BrunaFunc.jpeg'
import LaraFunc from  './images/Func/LaraFunc.jpeg'

//Imagens serviços


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
        foto: MairaFunc,
        nome: 'Maíra Acedo Romão',
        ocupacao: 'Médica Veterinária, fundadora e administradora' 
    },
    {
        id:2,
        foto: BrunaFunc,
        nome: 'Bruna Gabrielly',
        ocupacao: 'Recepcionista' 
    },
    {
        id:3,
        foto: LaraFunc,
        nome: 'Lara Beatriz Mendonça da Costa Pessoa',
        ocupacao: 'Banhista e Tosadora' 
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
    descricaoLonga: "Fêmur suíno natural, delicioso para seus cães. Combate o estresse e certamente promoverá uma atividade divertida para seu cão!",
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
    descricaoLonga: "Sabor fondue de chocolate sem adição de açúcar. Melhora a digestibilidade e fortalece as articulações. Perfeito para agradar seu pet!",
    estoque: 12
  },
  {
    id: 3,
    imagem: MolhoRacao2,
    nome: "Molho ração para gatos",
    preco: "R$11,00",
    precoOriginal: null,
    rating: 0,
    sale: false,
    imagemDetalhe: MolhoRacao2,
    descricaoLonga: "Aprimore a ração do seu gato com o saboroso molho com sabor costelinha!",
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
    descricaoLonga: "Sem álcool e rica em fibras, vitaminas e minerais. Sabor carne!",
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
    descricaoLonga: "Bifinhos em tiras deliciosos com sabor picanha com açafrão e linhaça. Feito com proteína bovina e rico em fibras. Sem adição de corantes e aromatizantes artificiais!",
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
    descricaoLonga: "Ossinhos deliciosos e seguros com sabor chocolate para divertir seu pet!",
    estoque: 17,
  },
  {
    id: 7,
    imagem: Caolorado,
    nome: "Cãolorado",
    preco: "R$16,50",
    precoOriginal: null,
    rating: 5,
    sale: false,
    imagemDetalhe: Caolorado,
    descricaoLonga: "Cerveja para cães da cervejaria Colorado. Bebida não alcoólica nos sabores carne e frango!",
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
    descricaoLonga: "Muffins para cães e gatos nos sabores vegano (com linhaça), picanha com açafrão, banana com aveia e beijinho com hortelã. Todos com ações específicas e benéficas para seus pets!",
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
    descricaoLonga: "Comemore o aniversário do seu amor com os bolos de aniversário nos sabores salmão com camomila (gatos) e chocolate com hortelã (cachorros). Os produtos acompanham uma vela de patinha. Alivia o estresse do seu gato e melhora a saúde bucal do seu cão!",
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
    descricaoLonga: "Seu pet merece o melhor. Apresentamos o Biscoito Pet de 80 gramas no irresistível sabor Carne e Frango, a recompensa que une prazer e saúde. Oferecemos opções adaptadas a cada fase e necessidade: Super Premium, Idoso e Diet. Formulado com 8 tipos de cereais, este biscoito garante fácil digestão e é rico em proteínas e vitaminas, maximizando a vitalidade e o bem-estar. É o agrado perfeito e nutritivo para o seu companheiro.",
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
    descricaoLonga: "Alimento completo para cães e gatos feitos à base de batata doce. Nos sabores frango, carne bovina e cordeiro e carne de panela com legumes!",
    estoque: 15,
  },
  {
    id: 12,
    imagem: PipocasDoce,
    nome: "Pipocas Doces e Nuts",
    preco: "R$12,00-13,00",
    precoOriginal: null,
    rating: 5,
    sale: false,
    imagemDetalhe: PipocasDoce,
    descricaoLonga: "50 gramas de petiscos nos sabores leite e nutty bavarian!",
    estoque: 16,
  },

  {
    id: 13,
    imagem: MolhoRacao1,
    nome: "Molho ração para cães",
    preco: "R$11,00",
    precoOriginal: null,
    rating: 0,
    sale: false,
    imagemDetalhe: MolhoRacao1,
    descricaoLonga: "Aprimore a ração do seu cão com o saboroso molho sabor frango com açafrão e mandioquinha. Ajuda no apetite, combate o tártaro, melhora a digestibilidade, articulações fortalecidas, rico em vitaminas e minerais e apenas 9 kcal por pote!",
    estoque: 12,
  }
]

export const tabserviços = [
    {
        id: 1,
        icone: GiDogHouse,
        titulo: 'Hotel e Creche Veterinária',
        texto: 'Vai viajar ou possui algum compromisso, mas não quer deixar seu pet sozinho? A melhor opção é conhecer o serviço de hospedagem veterinária. Com ela, você pode deixar seu pet em um ambiente pensado no conforto dos bixinhos, onde ele não se sentirá sozinho, poderá ter contato com outros pets, além de estarem monitorados por profissionais qualificados e apaixonados pelos animais.',
        titulo2: 'Horários',
        texto2: 'Todos os dias das 8h às 19h, com check-in e check-out com agendamento prévio.'
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
        texto: 'Quer surpreender seu amigo ? Conheça a Padaria Pet. Nela, você encontrará produtos pets variados e de qualidades como sorvete, molhos para ração e até cerveja!'
    },
    {
      id: 4,
      titulo: 'Banho e Tosa',
      texto: 'TesteTesteTesteTesteTesteTesteTesteTesteTesteTeste'
    },
    {
      id: 5,
      titulo: 'Motodog',
      texto: 'TesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTeste',
      titulo2: 'Teste',
      texto2: 'TesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTeste',
    }
];