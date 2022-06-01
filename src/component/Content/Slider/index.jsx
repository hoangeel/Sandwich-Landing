import React from 'react'
import "./index.scss"
import BINANCE from "../../../assets/images/Header_PngItem_5.png"
import polygon from "../../../assets/images/Header_PngItem_4.png"
import ethereum from "../../../assets/images/Header_PngItem_3.png"
import SOLANA from "../../../assets/images/Header_PngItem_2.png"
import AVALANCHE from "../../../assets/images/Header_PngItem_1.png"


export default function Section() {
  return (
    <div className='Section'>
        <div className='contentSection'>
            <h1>Astronauts are eating <span>Sandwiches.</span></h1>
            <p>Sandwich Network is the definite hub to start your decentralized cryptocurrency journey. A one-stop-shop with all tools you will ever need to trade. User-friendly and permissionless access to anyone.</p>
            <div className='button'>
                <button className='LaunchApp'>Launch App</button>
                <button className='PitchDeck'>Pitch Decka</button>
            </div>
        </div>
        <div className='logoCP'>
          <div className='cp1'>
            <img src={BINANCE} alt="" />
          </div>
          <div className='cp2'>
            <img src={polygon} alt="" />
            <p>Coming Soon</p>
          </div>
          <div className='cp3'>
            <img src={ethereum} alt="" />
            <p>Coming Soon</p>
          </div>
          <div className='cp4'>
            <img src={SOLANA} alt="" />
            <p>Coming Soon</p>
          </div>
          <div className='cp5'>
            <img src={AVALANCHE} alt="" />
            <p>Coming Soon</p>
          </div>
        </div>
    </div>
  )
}
