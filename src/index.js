import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import "alertifyjs/build/css/alertify.min.css";
import "./style.css"
import "./components/navi/style.css"
import App from './components/root/App';
import reportWebVitals from './reportWebVitals';
import configureStore from './redux/store/configureStore';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import  "./components/product/style.css"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const root = ReactDOM.createRoot(document.getElementById('root'));
const store=configureStore()
root.render(
  
  <React.StrictMode>
    <BrowserRouter><Provider store={store}> <App /></Provider></BrowserRouter>  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
