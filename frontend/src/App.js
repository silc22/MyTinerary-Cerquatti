import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Cities from './pages/Cities';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {

  const [cities, setCities] = useState([])

  useEffect(()=>{
    fetch("https://localhost:4000/api/cities")
    .then(res => res.json)
    .then(data => setCities(data.response.cities))
    .catch(err => console.error(err.message))
  },[])

  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Cities" element={<Cities/>}/>
        </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
