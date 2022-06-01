import React from 'react'
import "./index.scss"
import BBS from "../../../assets/images/logo_1.png"
import OddiyanaVentures from "../../../assets/images/logo_2.png"
import DUTCH_CRYPTO from "../../../assets/images/logo_3.png"
import LAVENDER_CAPITAL from "../../../assets/images/logo_4.png"
import MAGNUS_CAPITAL from "../../../assets/images/logo_5.png"
import MagNet from "../../../assets/images/logo_6.png"
import RubinVentures from "../../../assets/images/logo_2_1.png"
import MOONWHALE from "../../../assets/images/logo_2_2.png"
import AU21_CAPITAL from "../../../assets/images/logo_2_3.png"
import x21 from "../../../assets/images/logo_2_4.png"
import KASO2KA_VENTURES from "../../../assets/images/logo_2_5.png"
import LAUNCH_CODE from "../../../assets/images/logo_2_6.png"
import PeechCapital from "../../../assets/images/logo_3_1.png"
import Polygon from "../../../assets/images/logo_3_2.png"
import LD_CAPITAL from "../../../assets/images/logo_3_3.png"
import EXCALIBUR_CAPITAL from "../../../assets/images/logo_3_4.png"
import ChainfirCapital from "../../../assets/images/logo_4_1.png"
import FAIRUM from "../../../assets/images/logo_4_2.png"
import LOGO from "../../../assets/images/LOGO.png"

export default function PartnersBackers() {
  const logo = [
    {
        id:1,
        className:"BBS" ,
        img: BBS,
    },
    {
        id:2,
        className:"OddiyanaVentures" ,
        img: OddiyanaVentures,
    },
    {
        id:3,
        className:"DUTCH_CRYPTO" ,
        img: DUTCH_CRYPTO,
    },
    {
        id:4,
        className:"LAVENDER_CAPITAL" ,
        img: LAVENDER_CAPITAL,
    },
    {
        id:5,
        className:"MAGNUS_CAPITAL" ,
        img: MAGNUS_CAPITAL,
    },
    {
        id:6,
        className:"MagNet" ,
        img: MagNet,
    },
    {
        id:7,
        className:"RubinVentures" ,
        img: RubinVentures,
    },
    {
        id:8,
        className:"MOONWHALE" ,
        img: MOONWHALE,
    },
    {
        id:9,
        className:"AU21_CAPITAL" ,
        img: AU21_CAPITAL,
    },
    {
        id:10,
        className:"x21" ,
        img: x21,
    },
    {
        id:11,
        className:"KASO2KA_VENTURES" ,
        img: KASO2KA_VENTURES,
    },
    {
        id:12,
        className:"LAUNCH_CODE" ,
        img: LAUNCH_CODE,
    },
    {
        id:13,
        className:"PeechCapital" ,
        img: PeechCapital,
    },
    {
        id:14,
        className:"Polygon" ,
        img: Polygon,
    },
    {
        id:15,
        className:"LD_CAPITAL" ,
        img: LD_CAPITAL,
    },
    {
        id:16,
        className:" EXCALIBUR_CAPITAL" ,
        img: EXCALIBUR_CAPITAL,
    },
    {
        id:17,
        className:"ChainfirCapital" ,
        img: ChainfirCapital,
    },
    {
        id:18,
        className:"FAIRUM" ,
        img: FAIRUM,
    },
]
const Logo_Partners_Backers = logo.map((index) => {
  return(
        <div className={index.className} key = {index.id}>
          <img src={index.img} alt={index.className} />
        </div>
  )
})
  return (
    <div className='PartnersBackers'>
      <div className='headerPartnersBackers'><h1>Partners & Backers</h1></div>
      <div className='Logos'>
        <div className='LogoPartnersBackers'>
            {Logo_Partners_Backers}
        </div>
      </div>
      <div className='DecentralizedEcosystem'>
        <div className='flexDecentralizedEcosystem'>
          <img src={LOGO} alt="" />
          <div className='divider'></div>
          <div className='text'>Decentralized Ecosystem</div>
          <div className='PitchDeck'><p>Pitch Deck</p></div>
          <div className='Docs'>Docs</div>
        </div>
      </div>
    </div>
  )
}
