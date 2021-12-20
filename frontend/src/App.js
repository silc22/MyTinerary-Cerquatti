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
import { useSelector, useDispatch } from 'react-redux';
import authActions from "./redux/actions/authActions";
import { useEffect } from "react";


function App() {

  const dispatch = useDispatch()

  const token = localStorage.getItem('token')

  const usuario = useSelector(state => state.authReducer.usuario)

  useEffect(() => {
    if(!usuario.name && token){
      dispatch(authActions.logInLS(token))
    }
  },[])

  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route  path="/"  element={<Home/>}/>
          { !usuario.name && <Route path="/signUp"  element={<SignUp/>}/> }
          { !usuario.name && <Route path="/signIn"  element={<SignIn/>}/> }
          <Route path="*" element={<Home/>}/>
          <Route path="/cities" element={<Cities/>}/>
          <Route path="/city/:id" element={<City />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
