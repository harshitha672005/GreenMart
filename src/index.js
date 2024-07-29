import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import Login from './material/Login';
//import ECart from './material/Ecart';
//import Navebar from './material/Navebar'
//import Example from './material/Example'
//import HomePage from './homepage/HomePage';
//import Home from './material/Home';
//import About from './material/About';
//import Nave from './material/Nave';
//import Front from './comp/Front';
//import Cart from './material/Cart';
//import { Form } from './material/Form';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Login/> */}
    {/* <ECart/> */}
    <BrowserRouter>
    
   <App/>
    </BrowserRouter> 
 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
