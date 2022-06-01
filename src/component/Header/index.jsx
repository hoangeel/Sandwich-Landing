import React from 'react';
import "./index.scss";
import LOGO from "../../assets/images/LOGO.png"
import Menu from "../../assets/images/menu.png"


export default function Header() {
  return (
    <div className='header'>
      <div className='flexHeader'>
          <div className='LOGO'><img src={LOGO} alt="LOGO" /></div>
          <div className='divider'></div>
          <div className='menu'>
            <div className='SandwichBeta'>SandwichBeta</div>
            <div className='SandwichSAFU'>
              SandwichSAFU
              <p>Coming soon</p>
            </div>
            <div className='SandwichTools'>
              SandwichTools
              <p>Coming soon</p>
            </div>
            <div className='SandwichSwap'>
              SandwichSwap
              <p>Coming soon</p>
            </div>
          </div>
          <button className='ConnectWallet'>Connect Wallet</button>

          <div className='iconMenu'>
            <img src={Menu} alt="menu"  data-bs-toggle="dropdown" aria-expanded="false"/>
            <div className="dropdown-menu dropdown-menu-end list">
              <div>
                <li>
                  <a href="" >SandwichBeta</a>
                </li>
                <li>
                  <a href="">
                    SandwichTools
                    <p>Coming soon</p>
                  </a>
                </li>
                <li>
                  <a href="">
                    SandwichTools
                    <p>Coming soon</p>
                  </a>
                </li>
                <li>
                  <a href="">
                    SandwichSwap
                    <p>Coming soon</p>
                  </a>
                </li>
                <li>
                  <a href="">Connect Wallet</a>
                </li>
              </div>
            </div>
          </div>
      </div>
    </div>
  );}