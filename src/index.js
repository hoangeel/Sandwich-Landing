import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import Header from './component/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Section from './component/Content/Slider';
import TheMostDeliciousTools from './component/Content/TheMostDeliciousTools';
import WhySandwichNetwork from './component/Content/WhySandwichNetwork';
import SANDWICHToken from './component/Content/SANDWICHToken';
import HowToBuySANDWICH from './component/Content/HowToBuySANDWICH';
import PartnersBackers from './component/Content/PartnersBackers';
import JoinTheCommunity from './component/Content/JoinTheCommunity';
import Footer from './component/Footer';



ReactDOM.render(
  <React.StrictMode>
    <div className='sandwich'>
      <Header/>

      <Section/>
      <TheMostDeliciousTools/>
      <WhySandwichNetwork/>
      <SANDWICHToken/>
      <HowToBuySANDWICH/>
      <PartnersBackers/>
      <JoinTheCommunity/>

      <Footer/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
