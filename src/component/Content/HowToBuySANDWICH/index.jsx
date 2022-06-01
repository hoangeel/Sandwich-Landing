import React from 'react'
import "./index.scss"
import Logo_Sandwich_Network from "../../../assets/images/Logo_Sandwich_Network.png"
import Logo_PancakeSwap from "../../../assets/images/Logo_PancakeSwap.png"

export default function HowToBuySANDWICH() {
  return (
    <div className='How_to_buy_SANDWICH'>
        <div className='Flex_How_to_buy_SANDWICH'>
            <div className='content'>
              <h1>How to buy $SANDWICH?</h1>
              <div className='text'>
                <div className='Sandwich_Network'>
                    <div className='background'><img src={Logo_Sandwich_Network} alt="" /></div>
                    <p>Sandwich Network</p>
                </div>
                <div className='PancakeSwap'>
                    <div className='background'><img src={Logo_PancakeSwap} alt="" /></div>
                    <p>PancakeSwap</p>
                </div>
              </div>
            </div>
            <div className='button'><p>Learn More</p></div>
        </div>
    </div>
  )
}
