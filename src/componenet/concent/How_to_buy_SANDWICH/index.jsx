import React from 'react'
import "./index.scss"
import Logo_Sandwich_Network from "../../img/Logo_Sandwich_Network.png"
import Logo_PancakeSwap from "../../img/Logo_PancakeSwap.png"

export default function How_to_buy_SANDWICH() {
  return (
    <div className='How_to_buy_SANDWICH'>
        <div className='background_How_to_buy_SANDWICH'>
            <h1>How to buy $SANDWICH?</h1>
            <div className='Sandwich_Network'>
                <div className='background'><img src={Logo_Sandwich_Network} alt="" /></div>
                <p>Sandwich Network</p>
            </div>
            <div className='PancakeSwap'>
            <div className='background'><img src={Logo_PancakeSwap} alt="" /></div>
                <p>PancakeSwap</p>
            </div>
            <button>Learn More</button>
        </div>
    </div>
  )
}
