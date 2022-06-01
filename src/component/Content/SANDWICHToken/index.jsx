import React from 'react'
import "./index.scss"
import Item_1 from "../../../assets/images/SANDWICH_Token_Vector(2).png"
import Item_2 from "../../../assets/images/SANDWICH_Token_Vector(3).png"
import Item_3 from "../../../assets/images/SANDWICH_Token_Vector(4).png"
import Item_4 from "../../../assets/images/SANDWICH_Token_Vector(5).png"
import Item_5 from "../../../assets/images/SANDWICH_Token_Vector(6).png"
import Item_6 from "../../../assets/images/SANDWICH_Token_Vector(7).png"

export default function SANDWICHToken() {
  const dataCart = [
      {
        id: 1,
        class: "Participate",
        item: Item_1,
        text: "Participate in seed, private and public rounds of top-tier projects on SandwichSAFU.",
      },
      {
        id: 2,
        class: "Discounts",
        item: Item_2,
        text: "Discounts on all tools and applications.",
      },
      {
        id: 3,
        class: "Key",
        item: Item_3,
        text: "Key governance votes for new updates & functionality.",
      },
      {
        id: 4,
        class: "Access",
        item: Item_4,
        text: "Access to premium tools & applications such as wallet tracking.",
      },
      {
        id: 5,
        class: "Staking",
        item: Item_5,
        text: "Staking & farming through SandwichSwap.",
      },
      {
        id: 6,
        class: "Benefit",
        item: Item_6,
        text: "Benefit from more token utility with each new update and app.",
      },
  ]
  return (
    <div className='SANDWICHToken'>
      <h1>$SANDWICH Token</h1>
      <div className='flex'>
        {
            dataCart.map((index) => {
            return(
                <div className="flex_map" key={index.id}>
                    <div className='cardMap'>
                        <div className='item'>
                        <img src={index.item} alt={index.item} />
                        </div>
                        <p className={index.class}>{index.text}</p>
                    </div>
                </div>
            )
            })
        }
      </div>
    </div>
  )
}
