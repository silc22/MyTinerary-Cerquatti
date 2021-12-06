import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import City from './components/City';
import Cities from './pages/Cities';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";

function App() {

  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route  path="/"  element={<Home/>}/>
          <Route  path="/signUp"  element={<SignUp/>}/>
          <Route  path="/signIn"  element={<SignIn/>}/>
          <Route path="/cities" element={<Cities/>}/>
          <Route path="/city/:id" element={<City />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
