import React from 'react'
import "./index.scss"
import LOGO from "../../assets/images/LOGO.png"
import Telegram from "../../assets/images/item_Telegram.png"
import Twitter from "../../assets/images/item_Twitter_black.png"
import Medium from "../../assets/images/item_Medium.png"

export default function Footer() {
  return (
    <div className='footer'>
        <div className='contentFooter'>
            <div className='logo'>
                <img src={LOGO} alt="logo" />
                <p className=''>Sandwich Network is the definite hub to start your decentralized cryptocurrency journey. Join us!</p>
            </div>
            <div className='Products'>
                <h4>Products</h4>
                <p>SandwichBeta</p>
                <p>SandwichSAFU</p>
                <p>SandwichTools</p>
                <p>SandwichSwap</p>
            </div> 
            <div className='Support'>
                <h4>Support</h4>
                <p>Tutorials</p>
                <p>Documentation</p>
                <p>Customer support</p>
            </div> 
            <div className='Social'>
                <h4>Social</h4>
                <div className='Telegram'>
                    <img src={Telegram} alt="" />
                    <p>Telegram</p>
                </div>
                <div className='Twitter'>
                    <img src={Twitter} alt="" />
                    <p>Twitter</p>
                </div>
                <div className='Medium'>
                    <img src={Medium} alt="" />
                    <p>Medium</p>
                </div>
            </div>                
        </div>
        <div className='end'>Copyright © 2021 Sandwich Network. All rights reserved.</div>
    </div>
  )
}