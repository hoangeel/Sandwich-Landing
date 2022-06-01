import React from 'react'
import "./index.scss"
import SandwichLaunch from "../../../assets/images/TheMostDeliciousTools1.png"
import SandwichSAFU from "../../../assets/images/TheMostDeliciousTools2.png"
import SandwichTools from "../../../assets/images/TheMostDeliciousTools3.png"
import SandwichSwap from "../../../assets/images/TheMostDeliciousTools4.png"

export default function TheMostDeliciousTools() {
  return (
    <div className='TheMostDeliciousTools'>
      <div className='content'>
        <h1>The most delicious tools</h1>
        <div className='text'>
          <p>Everything you will ever need to start your cryptocurrency project and trade tokens on decentralized exchanges. A one-stop-shop. </p>
        </div>
        <div className='flex'>
          <div className='cards'>
            <div className='SandwichLaunch'>
              <img src={SandwichLaunch} alt="" />
              <h2>SandwichLaunch</h2>
              <h6>Open, decentralized token minting; launching and locking platform. Easily mint, launch and lock or participate in private and public sales. 
              </h6>
            </div>
            <div className='SandwichSAFU'>
              <img src={SandwichSAFU} alt="" />
              <h2>SandwichSAFU (Coming Soon)</h2>
              <h6>Decentralized launchpad with heavy security features for a safe place to participate in seed, private and public rounds of top-tier projects. 
              </h6>
            </div>
            <div className='SandwichTools'>
              <img src={SandwichTools} alt="" />
              <h2>SandwichTools (Coming Soon)</h2>
              <h6>The most extensive toolbox for DEX trading. Analyse and anticipate market movements, statistics and connect personal wallets to track all investments in one place.
              </h6>
            </div>
            <div className='SandwichSwap'>
              <img src={SandwichSwap} alt="" />
              <h2>SandwichSwap (Coming Soon)</h2>
              <h6>Bringing together the ecosystem with
                  one easy to use interface to get
                  access to all market-leading
                  decentralized exchanges. 
              </h6>
            </div>
          </div>
        </div>
        <div className='button'><button className='LaunchApp'>Launch App</button></div>
      </div>
    </div>
  )
}
