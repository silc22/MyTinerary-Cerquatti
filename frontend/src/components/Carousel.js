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
        const settings = {
        dots: true,
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 1,
        slidesPerRow: 4,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 3000,
        cssEase: "linear"
        };


    return (
      <div className="carousel-container">
        <h2>Discover paradises in the world that only a few people know about</h2>
        <Slider {...settings} className="slider-cities">
            {this.state.cities.map((element, index) => (
              <div key={index} className="img-container">
                <img src={element.src}></img>
                <p>{element.nombre}</p>
                <p>{element.pais}</p>
              </div>
            ))}
        </Slider>
      </div>
    );
  }
}