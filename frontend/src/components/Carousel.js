import React, { Component } from "react";
import Slider from "react-slick";



export default class CustomSlide extends Component {
        
  constructor (props){
    super(props);
    this.state = {
      cities: [
          {id: 1,
          nombre:"Dolomitas",
          pais: "Italy",
          src: './cities/italia-dolomitas.jpg'
          },
          {id: 2,
          nombre:"Cotswolds",
          pais: "United Kingdom",
          src: './cities/inglaterra-cotswolds.jpg'
          },
          {id: 3,
          nombre:"Feroe",
          pais: "Denmark",
          src: './cities/dinamarca-feroe.jpg'
          },
          {id: 4,
          nombre:"Sa Foradada",
          pais: "Spain",
          src: './cities/mallorca.jpg'
          },
          {id: 5,
          nombre:"Masái Mara",
          pais: "Kenya",
          src: './cities/kenia.jpg'
          },
          {id: 6,
          nombre:"Zürich",
          pais: "Switzerland",
          src: './cities/suiza.jpg'
          },
          {id: 7,
          nombre:"Bariloche",
          pais: "Argentina",
          src: './cities/argentina.jpg'
          },
          {id: 8,
          nombre:"Chiang Mai",
          pais: "Tailand",
          src: './cities/tailandia.jpg'
          },
          {id: 9,
          nombre:"Bacalar",
          pais: "México",
          src: './cities/mexico.jpg'
          },
          {id: 10,
          nombre:"Ksamil",
          pais: "Albania",
          src: './cities/albania.jpg'
          },
          {id: 11,
          nombre:"Leeuwarden",
          pais: "Netherlands",
          src: './cities/paisesbajos.jpg'
          },
          {id: 12,
          nombre:"Mestia",
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
            {this.state.cities.map((element) => (  
              <div className="container-card">           
                <div key={element.id} className="img-container">
                    <img src={element.src} alt={element.nombre}></img>
                    <div className="text-container">
                        <p className="name-city">{element.nombre}</p>
                        <p>{element.pais}</p>
                    </div>
                </div>
              </div>
            ))}
        </Slider>
      </div>
    );
  }
}