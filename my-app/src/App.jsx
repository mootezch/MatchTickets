import { useEffect } from "react";
import Aos from 'aos';

import "./App.css";

import Home from "./components/Pages/Home";


import {
BrowserRouter as Router,
Route,
Routes,
Navigate
} from "react-router-dom";
import MatchesEst from "./components/Pages/MatchesEst";
import MatchesCa from "./components/Pages/MatchesCa";
import Login from "./components/Pages/Login"
import Register from "./components/Pages/Register"
import MatchesEss from "./components/Pages/MatchesEss";
import Cart from "./components/Pages/Cart";
import { useDispatch, useSelector } from "react-redux";
import { getListProducts } from "./Redux/apiCalls";
import { loginSuccess } from "./Redux/userRedux";
import Pay from "./components/Pages/Pay";
import Success from "./components/Pages/Success";




const App = () => {
  const user = useSelector(state=> state.user.currentUser);
  const dispatch = useDispatch();
  getListProducts(dispatch)
  useEffect(()=>{
    loadUserFromLocalStorage()
    Aos.init()   
  }, []);
  

  const loadUserFromLocalStorage = () => {
    try {
      const serializedUser = localStorage.getItem('user');
      if (serializedUser) {
       dispatch(loginSuccess(JSON.parse(serializedUser)))
      }
    
    } catch (error) {
     console.log("error while set the user ");
    }
  };
  return (
  <>
       <Router>
    <Routes>
      <Route path ="/" element={<Home />} />
      <Route exact path="/home" element={<Home />} />

      <Route path ="/" element={<MatchesEss />} />
      <Route path="/ess" element={<MatchesEss />} />

      <Route path ="/" element={<MatchesEst />} />
      <Route path="/est" element={<MatchesEst />} />

      <Route path ="/" element={<MatchesCa />} />
      <Route path="/ca" element={<MatchesCa />} />

      

      <Route path ="/" element={<Cart />} />
      <Route path="/cart" element={<Cart />} />

      <Route path ="/" element={<Pay />} />
      <Route path="/pay" element={<Pay />} />

      <Route path ="/" element={<Success />} />
      <Route path="/success" element={<Success />} />

      <Route path ="/" element={<Login />} />
      <Route path="/login" element= {user ? <Navigate to="/" /> : <Login />} />

      <Route path ="/" element={<Register />} />
      <Route path="/register" element= {user ? <Navigate to="/" /> : <Register />} />
        
      
     
    </Routes>
  </Router>


  </>
  );
};


export default App;
