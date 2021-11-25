import React, { Component } from "react";
import Slider from "react-slick";



export default class CustomSlide extends Component {
        
  constructor (props){
    super(props);
    this.state = {
      cities: [
        {nombre:"Dolomitas",
        pais: "Italy",
        src: './cities/italia-dolomitas.jpg'
        },
        {nombre:"Cotswolds",
        pais: "United Kingdom",
        src: './cities/inglaterra-cotswolds.jpg'
        },
        {nombre:"Feroe",
        pais: "Denmark",
        src: './cities/dinamarca-feroe.jpg'
        },
        {nombre:"Sa Foradada",
        pais: "Spain",
        src: './cities/mallorca.jpg'
        },
        {nombre:"Masái Mara",
        pais: "Kenya",
        src: './cities/kenia.jpg'
        },
        {nombre:"Zürich",
        pais: "Switzerland",
        src: './cities/suiza.jpg'
        },
        {nombre:"Bariloche",
        pais: "Argentina",
        src: './cities/argentina.jpg'
        },
        {nombre:"Chiang Mai",
        pais: "Tailand",
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
        pais: "Netherlands",
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
        <h2>Popular <span>Mytineraries</span></h2>
        <Slider {...settings} className="slider-cities">
            {this.state.cities.map((element, index) => (
              <>
              <div key={index} className="img-container">
                <img src={element.src} alt="Paradises"></img>
              <div className="text-container">
                  <p>{element.nombre}</p>
                  <p>{element.pais}</p>
              </div>
              </div>
              </>
            ))}
        </Slider>
      </div>
    );
  }
}