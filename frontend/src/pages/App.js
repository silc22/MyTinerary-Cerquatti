import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from  '../components/Hero'
import Header from '../components/Header';
import Calltoaction from '../components/Calltoaction'
import SimpleSlider from '../components/Carousel';
import Footer from '../components/Footer'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Calltoaction />
      <SimpleSlider />
      <Footer />
    </>
  )
}

export default App;
