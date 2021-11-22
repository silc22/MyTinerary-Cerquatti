import React, { Component } from "react";
import Slider from "react-slick";



export default class CustomSlide extends Component {
        
  constructor (props){
    super(props);
    this.state = {
      cities: [
        {nombre:"Dolomitas",
        pais: "Italia",
        src: './cities/italia-dolomitas.jpg'
        },
        {nombre:"Cotswolds",
        pais: "Inglaterra",
        src: './cities/inglaterra-cotswolds.jpg'
        },
        {nombre:"Feroe",
        pais: "Dinamarca",
        src: './cities/dinamarca-feroe.jpg'
        },
        {nombre:"Sa Foradada",
        pais: "España",
        src: './cities/mallorca.jpg'
        },
        {nombre:"Masái Mara",
        pais: "Kenia",
        src: './cities/kenia.jpg'
        },
        {nombre:"Cantón de Zúrich",
        pais: "Suiza",
        src: './cities/suiza.jpg'
        },
        {nombre:"San Carlos de Bariloche",
        pais: "Argentina",
        src: './cities/argentina.jpg'
        },
        {nombre:"Chiang Mai",
        pais: "Tailandia",
        src: './cities/tailandia.jpg'
        },
        {nombre:"Bacalar",
        pais: "México",
        src: './cities/mexico.jpg'
        },
        {nombre:"Ksamil",
        pais: "Albania",
        src: './cities/albania.jpg'
        },
        {nombre:"Leeuwarden",
        pais: "Paises Bajos",
        src: './cities/paisesbajos.jpg'
        },
        {nombre:"Mestia",
        pais: "Georgia",
        src: "./cities/georgia.jpg"
        }
      ]
    }
  } 


  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 2000,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 4000,
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
      <div className="carousel-container">
        <h2>Discover paradises in the world that <span> only a few people</span> know about</h2>
        <Slider {...settings} className="slider-cities">
            {this.state.cities.map((element, index) => (
              <>
              <div key={index} className="img-container">
                <img src={element.src} alt="Paradises"></img>
              </div>
              <div className="text-container">
                  <p>{element.nombre} - {element.pais}</p>
              </div>
              </>
            ))}
        </Slider>
      </div>
    );
  }
}