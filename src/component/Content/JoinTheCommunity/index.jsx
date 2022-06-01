import React from 'react'
import "./index.scss"
import IMG from "../../../assets/images/Join_the_Community_2.png"
import OurMedium from "../../../assets/images/Our_Medium.png"
import OurTwitter from "../../../assets/images/Our_Twitter.png"


export default function JoinTheCommunity() {
  return (
    <div className='JoinTheCommunity'>
        <div className='ContentJoinTheCommunity'>
            <div className='content'>
                <h1>Join the Community</h1>
                <p>Join the fastest growing decentralized ecosystem in the world of crypto.</p>
                <div className='JoinUsOnTelegram'>Join Us On Telegram</div>
                <div className='button'>
                    <div className='OurMedium'>
                      <img src={OurMedium} alt="Our Medium" />
                      <h6>Our Medium</h6>
                    </div>
                    <div className='OurTwitter'>
                      <img src={OurTwitter} alt="Our Twitter" />
                      <h6>Our Twitter</h6>
                    </div>
                </div>
            </div>
            <div className='img'><img src={IMG} alt="" /></div>
        </div>
    </div>
  )
}
