import React from 'react'
import gif from '../gelatoGif.gif';

const ThirdHero = () => {
  return (
    <div className='third_hero_component'>
      <div className="third_hero_gif">
         <div className="third_hero_gif_box">
           <img src={gif} alt="" />
         </div>
      </div>
      <div className="third_hero_text_box">
        <p>For print producers</p>
        <h1>GelatoConnect</h1>
        <h4>Elevate efficiency, cut costs, and seamlessly automate with our all-in-one software solution for the print industry</h4>
        <button className='button signup_btn first_hero_btn third_hero_btn'>Learn more</button>
      </div>
    </div>
  )
}

export default ThirdHero
