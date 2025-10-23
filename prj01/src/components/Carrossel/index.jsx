import Carousel from 'react-bootstrap/Carousel';
import PetDaMontanhaMesa from '../../assets/images/PetDaMontanhaMesa.png';
import Carrossel1 from '../../assets/images/Carrossel/Carrossel1.avif';
import Carrossel2 from '../../assets/images/Carrossel/Carrossel2.avif';
import Carrossel3 from '../../assets/images/Carrossel/Carrossel3.avif';
import Carrossel4 from '../../assets/images/Carrossel/Carrossel4.avif';
import Carrossel5 from '../../assets/images/Carrossel/Carrossel5.avif';

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
            <h3>Título</h3>
            <p>DescriçãoDescriçãoDescriçãoDescriçãoDescriçãoDescrição</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img-fixed"
            src={Carrossel2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Título</h3>
            <p>DescriçãoDescriçãoDescriçãoDescriçãoDescriçãoDescrição</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img-fixed"
            src={Carrossel3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Título</h3>
            <p>DescriçãoDescriçãoDescriçãoDescriçãoDescriçãoDescrição</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img-fixed"
            src={Carrossel4}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Título</h3>
            <p>DescriçãoDescriçãoDescriçãoDescriçãoDescriçãoDescrição</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img-fixed"
            src={Carrossel5}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Título</h3>
            <p>DescriçãoDescriçãoDescriçãoDescriçãoDescriçãoDescrição</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carrossel;