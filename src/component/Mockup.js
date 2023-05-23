import './Mockup.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

function Mockup() {
  
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='carrucel'>

      <Slider {...settings}>
        <div id="box2" className='box'>
          <p>Camiseta Pickle Rick. Todas las tallas disponibles</p>
        </div>
        
        <div id="box3" className='box'>
          <p>Tazas Rick & Morty Szechuan Sauce</p>
        </div>

        <div id="box4" className='box'>
          <p>Afiche Rick & Morty</p>
        </div>

        <div id="box5" className='box'>
          <p>Gorras Rick & Morty. Colores disponibles</p>
        </div>

        <div id="box6" className='box'>
          <p>Almohadilla para ratón Rick & Morty. Muchos diseños, en tres tamaños</p>
        </div>

        <div id="box7" className='box'>
          <p>Almohadilla para ratón Rick & Morty. Muchos diseños, en tres tamaños</p>
        </div>

        <div id="box8" className='box'>
          <p>Forros Rick & Morty para móvil. Muchos diseños, disponible para muchos modelos</p>
        </div>

        <div id="box9" className='box'>
          <p>Forros Rick & Morty para móvil. Muchos diseños, disponible para muchos modelos</p>
        </div>

        <div id="box10" className='box'>
        <p>Toalla Rick & Morty. Muchos diseños, diferentes tamaños</p>
        </div>

        <div id="box11" className='box'>
          <p>Camiseta Rick & Morty. Todas las tallas disponibles</p>
        </div>

        <div id="box12" className='box'>
          <p>Sticker para mando. Disponible para diferentes consolas</p>
        </div>

        <div id="box13" className='box'>
          <p>Sudadera Rick & Morty. Todas las tallas disponibles</p>
        </div>
        
        <div id="box14" className='box'>
          <p>Sudadera Rick & Morty, personalizadas. Todas las tallas disponibles</p>
        </div>
        
        <div id="box15" className='box'>
          <p>Tazas Rick & Morty</p>
        </div>
      </Slider>

    </div>
  );
}

export default Mockup;
