import React from 'react'
import "./index.scss"
import LOGO from "../../assets/images/LOGO.png"

export default function Footer() {
  return (
    <div className='footer'>
        <div className='contentFooter'>
            <ul className="nav">
                <li className="nav-item item_LOGO">
                    <img src={LOGO} alt="LOGO" />
                    <p className="nav-link active">
                        Sandwich Network is the definite hub to start your decentralized cryptocurrency journey. Join us!
                    </p>
                </li>
                <li className="nav-item Products">
                    <h4>Products</h4>
                    <p className="nav-link">
                        SandwichBeta
                        SandwichSAFU
                        SandwichTools
                        SandwichSwap
                    </p>
                </li>
                <li className="nav-item Support">
                    <h4>Support</h4>
                    <p className="nav-link">
                        Tutorials
                        Documentation
                        Customer support
                    </p>
                </li>
                <li className="nav-item Social">
                    <h4>Social</h4>
                    <p className="nav-link">
                        Telegram
                        Twitter
                        Medium
                    </p>
                    <div className='item_Telegram'></div>
                    <div className='item_Twitter_black'></div>
                    <div className='item_Medium'></div>
                </li>
            </ul>
        </div>
        <div className='end'>Copyright © 2021 Sandwich Network. All rights reserved.</div>
    </div>
  )
}