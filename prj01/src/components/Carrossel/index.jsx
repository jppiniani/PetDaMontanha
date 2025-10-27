import Carousel from 'react-bootstrap/Carousel';
import PetDaMontanhaMesa from '../../assets/images/PetDaMontanhaMesa.png';
import Carrossel1 from '../../assets/images/Carrossel/Carrossel1.avif';
import Carrossel2 from '../../assets/images/Carrossel/Carrossel2.avif';
import Carrossel3 from '../../assets/images/Carrossel/Carrossel3.avif';
import Carrossel4 from '../../assets/images/Carrossel/Carrossel4.avif';
import Carrossel5 from '../../assets/images/Carrossel/Carrossel5.avif';
import Carrossel6 from '../../assets/images/Carrossel/Carrossel6.jpg';
import Carrossel7 from '../../assets/images/Carrossel/Carrossel7.jpg';
import Carrossel8 from '../../assets/images/Carrossel/Carrossel8.jpg';
import Carrossel9 from '../../assets/images/Carrossel/Carrossel9.jpg';
import Carrossel10 from '../../assets/images/Carrossel/Carrossel10.jpg';
import Carrossel11 from '../../assets/images/Carrossel/Carrossel11.jpg';
import Carrossel12 from '../../assets/images/Carrossel/Carrossel12.jpg';

import './style.css'

function Carrossel() {
  return (
    <div className='Carrossel'>
      <Carousel>

        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img-fixed" 
            src={Carrossel1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Bob & Pingo</h3>
            <h6>Aumigos se divertindo no nosso espaço!</h6>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img-fixed"
            src={Carrossel2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Floquinho</h3>
            <h6>Branquinho como a neve, o Floquinho sempre se diverte!</h6>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img-fixed"
            src={Carrossel3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Zeca</h3>
            <h6>Zequinha sempre no estilo!</h6>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img-fixed"
            src={Carrossel4}
            alt="Fourth slide"
          />
          <Carousel.Caption>
            <h3>Leona & Meg</h3>
            <h6>Qual será a fofoca da vez?</h6>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img-fixed"
            src={Carrossel5}
            alt="Fifth slide"
          />
          <Carousel.Caption>
            <h3>Miny</h3>
            <h6>A secretária que se cuide!</h6>
          </Carousel.Caption>
        </Carousel.Item>

           <Carousel.Item>
          <img
            className="d-block w-100 carousel-img-fixed" 
            src={Carrossel6}
            alt="Sixth slide"
          />
          <Carousel.Caption>
            <h3>Lila</h3>
            <h6>Lila com a nossa Doutora Maíra!</h6>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img-fixed" 
            src={Carrossel7}
            alt="Seventh slide"
          />
          <Carousel.Caption>
            <h3>Cookie</h3>
            <h6>Quem disse que é somente cães e gatos?</h6>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img-fixed" 
            src={Carrossel8}
            alt="Eighth slide"
          />
          <Carousel.Caption>
            <h3>Charlie</h3>
            <h6>Veja essa qualidade de banho e tosa!</h6>
          </Carousel.Caption>
        </Carousel.Item>

         <Carousel.Item>
          <img
            className="d-block w-100 carousel-img-fixed" 
            src={Carrossel9}
            alt="Ninth slide"
          />
          <Carousel.Caption>
            <h3>Bronks</h3>
            <h6>O nosso menino Bronks não nega um carinho!</h6>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img-fixed" 
            src={Carrossel10}
            alt="Tenth slide"
          />
          <Carousel.Caption>
            <h3>Mina</h3>
            <h6>Depois do banho, a Mina ficou um charme! </h6>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img-fixed" 
            src={Carrossel11}
            alt="Eleventh slide"
          />
          <Carousel.Caption>
            <h3>Fiora</h3>
            <h6>A rainha Fiora em seu trono!</h6>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img-fixed" 
            src={Carrossel12}
            alt="Twelfth slide"
          />
          <Carousel.Caption>
            <h3>Mike</h3>
            <h6>Adivinha quem está de banho tomado para voltar para casa?</h6>
          </Carousel.Caption>
        </Carousel.Item>


      </Carousel>
    </div>
  );
}

export default Carrossel;