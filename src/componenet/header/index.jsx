import React from 'react';
import "./index.scss";

export default function Header() {
  return (
    <div className=' header'>
      <div className=' menu'>
        <div className='Logo '> 
            <div className='divider'></div>
            <div className="dropdown menu_dropdown">
              <a className="btn btn-secondary dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                MENU
              </a>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li><a className="dropdown-item">SandwichBeta</a></li>
                <li><a className="dropdown-item">SandwichSAFU</a></li>
                <li><a className="dropdown-item">SandwichTools</a></li>
                <li><a className="dropdown-item">SandwichSwap</a></li>
              </ul>
            </div>
        </div>

        <div className='list_menu '>
              <tr className="nav justify-content-center">
                  <td>
                      <p className="nav-trnk active " aria-current="page" >SandwichBeta</p>
                  </td>
                  <td>
                      <p className="nav-trnk " >SandwichSAFU</p>
                      <span className="nav-trnk Comingsoon" >Coming soon</span>
                  </td>
                  <td>
                      <p className="nav-trnk " >SandwichTools</p>
                      <span className="nav-trnk Comingsoon" >Coming soon</span>
                  </td>
                  <td>
                      <p className="nav-trnk "  >SandwichSwap</p>
                      <span className="nav-trnk Comingsoon" >Coming soon</span>
                  </td>
              </tr>
        </div> 
        <button className='ConnectWallet'>
            Connect Wallet
        </button>
      </div>

      <div className='header_content'>
        <div className='header_background_0'></div>
        <div className='IMG'></div>
        <div className='header_background_1'></div>
        <div className='header_background_2'></div>
        <div className='header_background_3'></div>
        <div className='header_background_4'></div>
        <div className='header_background_5'></div>
        <div className='header_background_6'></div>
        <div className='header_background_7'></div>
        <div className='header_background_8'></div>
        <div className='title'>
                <p>Astronauts are eating <span>Sandwiches.</span> </p>
        </div>
        <div className='text'>
            Sandwich Network is the definite hub to start your decentralized cryptocurrency journey. A one-stop-shop with all tools you will ever need to trade. User-friendly and permissionless access to anyone.
        </div>
        <button className='LaunchApp'>Launch App</button>
        <button className='PitchDeck'>Pitch Deck</button>
      </div>


    </div>
  );}