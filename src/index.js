import React from 'react';
import ReactDOM from 'react-dom';
import './styling/index.css';
import Homepage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import ProductPage from "./pages/ProductPage";
import OverOnsPage from "./pages/ProductPage";
import reportWebVitals from './reportWebVitals';

if (window.location.href.toLowerCase().includes("?page=home")) {
  ReactDOM.render(
    <React.StrictMode>
      <Homepage />
    </React.StrictMode>,
    document.getElementById('root')
  );
} else if (window.location.href.toLowerCase().includes("?page=contact")) {
  ReactDOM.render(
    <React.StrictMode>
      <ContactPage />
    </React.StrictMode>,
    document.getElementById('root')
  );
} else if (window.location.href.toLowerCase().includes("?page=producten")) {
  ReactDOM.render(
    <React.StrictMode>
      <ProductPage />
    </React.StrictMode>,
    document.getElementById('root')
  );
} else if (window.location.href.toLowerCase().includes("?page=overons")) {
  ReactDOM.render(
    <React.StrictMode>
      <OverOnsPage />
    </React.StrictMode>,
    document.getElementById('root')
  );
} else {
  ReactDOM.render(
    <React.StrictMode>
      <Homepage />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
