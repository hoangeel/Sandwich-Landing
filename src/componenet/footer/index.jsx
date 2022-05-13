import React from 'react'
import "./index.scss"
import LOGO from "../img/LOGO.png"

export default function Footer() {
    const logo = [
        {
            id:1,
            className:"BBS" ,
            text: "BBS",
        },
        {
            id:2,
            className:"Oddiyana_ventures" ,
            text: "Oddiyana_ventures",
        },
        {
            id:3,
            className:"DUTCH_CRYPTO" ,
            text: "DUTCH_CRYPTO",
        },
        {
            id:4,
            className:"LAVENDER_CAPITAL" ,
            text: "LAVENDER_CAPITAL",
        },
        {
            id:5,
            className:"MAGNUS_CAPITAL" ,
            text: "MAGNUS_CAPITAL",
        },
        {
            id:6,
            className:"MagNet" ,
            text: "MagNet",
        },
        {
            id:7,
            className:"RubinVentures" ,
            text: "RubinVentures",
        },
        {
            id:8,
            className:"MOONWHALE" ,
            text: "MOONWHALE",
        },
        {
            id:9,
            className:"AU21_CAPITAL" ,
            text: "AU21_CAPITAL",
        },
        {
            id:10,
            className:"x21" ,
            text: "x21",
        },
        {
            id:11,
            className:"KASO2KA_VENTURES" ,
            text: "KASO2KA_VENTURES",
        },
        {
            id:12,
            className:"LAUNCH_CODE" ,
            text: "LAUNCH_CODE",
        },
        {
            id:13,
            className:"peech_capital" ,
            text: "peech_capital",
        },
        {
            id:14,
            className:"polygon" ,
            text: "polygon",
        },
        {
            id:15,
            className:"LD_CAPITAL" ,
            text: "LD_CAPITAL",
        },
        {
            id:16,
            className:" EXCALIBUR_CAPITAL" ,
            text: "EXCALIBUR_CAPITAL",
        },
        {
            id:17,
            className:"Chainfir_Capital" ,
            text: "Chainfir_Capital",
        },
        {
            id:18,
            className:"FAIRUM" ,
            text: "FAIRUM",
        },
    ]
    const Logo_Partners_Backers = logo.map((index) => {
        return(
            <div className={index.className} key = {index.id}></div>
        )
    })
  return (
    <div className='footer'>
        <div className='Partners_Backers'>
            <div className='header_Partners_Backers'><h1>Partners & Backers</h1></div>
            <div className='Logo_Partners_Backers'>
                {Logo_Partners_Backers}
            </div>
        </div>
        <div className='Decentralized_Ecosystem'>
            <div className='background_left'></div>
            <div className='img_1'></div>
            <div className='img_2'></div>
            <div className='img_3'></div>
            <div className='background_right'></div>
        </div>
        <div className='flex_card'>
            <div className='card_Decentralized_Ecosystem'>
                <div className='LOGO'></div>
                <div className='boder'></div>
                <div className='content'>Decentralized Ecosystem</div>
                <button className='Pitch_Deck'>Pitch Deck</button>
                <button className='Docs'>Docs</button>
            </div>
        </div>
        
        <div className='flex_Join_the_Community'>
            <div className='Join_the_Community'>
            <div className='right_Join_the_Community'><div className='img91'></div></div>
                <div className='left_Join_the_Community'>
                    <h1>Join the Community</h1>
                    <p className='text'>Join the fastest growing decentralized ecosystem in the world of crypto.</p>
                    <button className='Join_Us_On_Telegram'>Join Us On Telegram</button>
                    <div className='button'>
                        <button className='Our_Medium'>
                            <div className='item_M'></div>
                            <p>Our Medium</p>
                        </button>
                        <button className='Our_Twitter'>
                            <div className='item_Twitter'></div>
                            <p>Our Twitter</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div className='footer_end'>
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