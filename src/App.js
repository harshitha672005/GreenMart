/* import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './material/hom/Home';
import About from './material/abo/About';
import Login from './material/Log/Login';
import Form from './material/pay/Form';
import Ecart from './material/Ecart/Ecart';
const App = () => {

  const ourGroupProject = "Welcome to Our GreenMart";
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home ourGroupProject={ourGroupProject} />} />
        <Route path="about" element={<About/>} />
        <Route path="ecart" element={<Ecart/>} />
        <Route path="Form" element={<Form />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App; */
//import './App.css';
import { Route,Routes } from 'react-router-dom';
import Cart from './example/Cart';
//import Favourite from './example/Favourite';
//import Stock from './example/Stock';
// import Newpage from './example/pay/Newpage';
import Navbar from './example/Navbar';
import  Homee from './example/Homee';
import Profile from './example/Profile';
import LoginSignup from './example/LoginSignup';
import Rating from './example/Rating';

import Vegetables from './example/Vegetable';
import Meet from './example/Meet';
import Dryfruits from './example/Dryfruits';
import Household from './example/Household';
import Foodgrains from './example/Foodgrains';
import Fruits from './example/Fruits';
import Dairy from './example/Dairy';
import Aboutt from './example/Aboutt';
import Dropdown from './example/Dropdown';
import Signup from './example/Signup';
import Privacy from './example/Privacy';
import AccountSettings from './example/UserProfile/AccountSettings';

import LegalNotice from './example/UserProfile/LegalNotice';
import Terms from './example/Terms';
import Password from './example/Password';
import Delivery from './example/Delivery';
function App() {
  return (
   <>
    <Navbar/>
      <div>
    <Routes>  
            
        <Route path="/" element={<Homee />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/sign" element={<Signup />} />
        {/* <Route path="/payment" element={<Newpage/>} /> */}
          <Route path="/rating" element={<Rating />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/terms" element={<Terms/>} />
          <Route path="/password" element={<Password/>} />
        
          <Route path="/dropdown" element={<Dropdown/>} />
          <Route path="/vegetables" element={<Vegetables/>} />
          <Route path="/meet" element={<Meet/>} />
          <Route path="/dryfruits" element={<Dryfruits/>} />
          <Route path="/household" element={<Household/>} />
          <Route path="/foodgrains" element={<Foodgrains/>} />
          <Route path="/fruit" element={<Fruits/>} />
          <Route path="/dairy" element={<Dairy/>} />
          <Route path="/aboutt" element={<Aboutt />} />
          <Route path="/privacy" element={<Privacy />} />
        
          <Route path="/accountsetting" element={<AccountSettings/>} />
          <Route path="/address" element={<Delivery/>} />
          <Route path="/legalnotice" element={<LegalNotice/>} />
    </Routes>
    </div>
    </>
   
  );
}

export default App;