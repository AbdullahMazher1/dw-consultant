import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/Navbar';
import Programs from './components/Programs';
import Events from './components/Events';
import Slider from './components/Slider';
import Partners from './components/Partners';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import SkillsDisplay from './components/SkillsDisplay';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <link
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <script
        src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGaXMOvQ2K7jaPz0XKp5vvo5MR"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
        crossOrigin="anonymous"
      ></script>
    <Navbar />
    <Slider/>
    <SkillsDisplay/>
    <Programs/>
    <div className='MyEvents'>
    <Events/>
    <Events/>
    <Events/>
    <Events/>
    <Events/>
    <Events/>
    </div>
    <Partners/>
    <Reviews/>
    <Footer/>
    
  </React.StrictMode>
);
reportWebVitals();
