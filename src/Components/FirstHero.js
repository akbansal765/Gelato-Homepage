import React from 'react'
import firstHero from '../first_hero.webp'
import shopify from '../shopify_monotone_black.svg'
import star from '../star.svg'

const FirstHero = () => {
  return (
    <div className='first_hero_component'>
        <div className="first_hero_text_box">
            <div className="first_hero_text_container">
               <h1>Print on demand for your ecommerce business</h1>
               <p className="signup_free_text">Sign up for free and only pay for what you sell</p>
               <p className="turn_your_passion_text">Turn your passion into profit with the world's largest <a href="">print on demand</a> network.</p>
               <div className="first_hero_buttons_box">
                    <button className='button signup_btn first_button first_hero_btn'>Get started for free</button>
                    <button className='button signup_btn second_button first_hero_btn'>See our products</button>
               </div>
               <div className="shopify_container">
                  <div className="shopify_img_box">
                     <img src={shopify} alt="" />
                  </div>
                  <div className="star_img_box">
                     <img src={star} alt="" />
                     <img src={star} alt="" />
                     <img src={star} alt="" />
                     <img src={star} alt="" />
                     <img src={star} alt="" />
                     <span>4.8/5</span>
                  </div>
                  <p>based on 887 reviews</p>
               </div>
            </div>
        </div>
        <div className="first_hero_image">
            <div className="first_hero_image_box">
                <img src={firstHero} alt="Img" />
            </div>
        </div>
    </div>
  )
}

export default FirstHero
