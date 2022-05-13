import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import Header from './componenet/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import The_most_delicious_tools from './componenet/concent/The_most_delicious_tools';
import Why_Sandwich_Network from './componenet/concent/Why_Sandwich_Network';
import SANDWICH_Token from './componenet/concent/SANDWICH_Token';
import How_to_buy_SANDWICH from './componenet/concent/How_to_buy_SANDWICH';
import Footer from './componenet/footer';


ReactDOM.render(
  <React.StrictMode>
    <div className='sandwich'>
      <Header/>

      <The_most_delicious_tools/>
      <Why_Sandwich_Network/>
      <SANDWICH_Token/>
      <How_to_buy_SANDWICH/>
      
      <Footer/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
