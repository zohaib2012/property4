import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from "react-redux";
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import store from './Redux/Store';
import '../src/index.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    
      <BrowserRouter>
        <App />
      </BrowserRouter>
   
  </Provider>

);

// reportWebVitals();
