import React from 'react'
import whiteLogo from '../gelato_white_logo.svg'
import instagram from '../instagram.png'
import facebook from '../facebook-app-symbol.png'
import tiktok from '../tik-tok.png'
import linkedin from '../linkedin-big-logo.png'
import youtube from '../youtube.png'
import applestore from '../appstore.svg'
import googlestore from '../googlestore.svg'

const Footer = () => {
  return (
    <div className='footer_component'>
      <div className="social_media_bar">
        <img className='gelato_white_logo' src={whiteLogo} alt="" />
        <div className="social_icons">
            <p>Find Gelato on:</p>
            <div>
                <img src={instagram} alt="" />
            </div>
            <div>
                <img src={facebook} alt="" />
            </div>
            <div>
                <img src={tiktok} alt="" />
            </div>
            <div>
                <img src={linkedin} alt="" />
            </div>
            <div>
                <img src={youtube} alt="" />
            </div>
        </div>
      </div>

      <div className="footer_content_box">
        <div className="content_box_1">
            <p>Gelato has created the world's largest network for local production and distribution of customized products. Together we bring creativity to life - and into business.</p>
            <button className="btn footer_btn">Get started</button>
            <div className="playstore_box">
                <p>Get the app</p>
                <div className="playstore_image">
                  <img src={applestore} alt="" />
                  <img src={googlestore} alt="" />
                </div>
            </div>
        </div>
        <div className="content_box_2 footer_text_box">
            <p className="text_header">Print on demand</p>
            <p>What is print on demand?</p>
            <p>Product catalog</p>
            <p>Shipping and delivery</p>
            <p>Dropshipping products</p>
            <p>Pro sellers</p>
            <p>White label products</p>
            <p>Returns policy</p>
            <p>Global, yet local</p>
            <p>Sustainability</p>
            <p>Support</p>
        </div>
        <div className="content_box_3 footer_text_box">
            <p className="text_header">Integrations</p>
            <p>Shopify</p>
            <p>Etsy</p>
            <p>WooCommerce</p>
            <p>Wix</p>
            <p>Squarespace</p>
            <p>BigCommerce</p>
            <p>API</p>
        </div>
        <div className="content_box_4 footer_text_box">
            <p className="text_header">Start selling</p>
            <p>Embroidery</p>
            <p>Print on demand t-shirts</p>
            <p>Print on demand hoodies</p>
            <p>Print on demand posters</p>
            <p>Print on demand canvas</p>
            <p>Print on demand calendars</p>
            <p>Print on demand mugs</p>
            <p>Custom products</p>
            <p>Custom clothing</p>
            <p>Custom merchandise</p>
            <p>Custom phone cases</p>
            <p>Print on demand Europe</p>
            <p>Print on demand UK</p>
            <p>Print on demand France</p>
            <p>Print on demand Canada</p>
            <p>Merch maker</p>
        </div>
        <div className="content_box_5 footer_text_box">
            <p className="text_header">Company</p>
            <p>GelatoConnect</p>
            <p>About Gelato</p>
            <p>Leadership team</p>
            <p>Board & investors</p>
            <p>Newsroom</p>
            <p>Blog</p>
            <p>Customer Stories</p>
            <p>Partners</p>
            <p>Careers</p>
            <p>Affiliates program</p>

        </div>
      </div>
      <div className="footer_task_bar">
         <div className="task_links">
            <p>Contact us</p>|
            <p>Legal</p>|
            <p>Privacy policy</p>|
            <p>Cookie policy</p>|
            <p>API terms</p>|
            <p>Sitemap</p>
         </div>
         <select>
            <option>English</option>
            <option>English (Canada)</option>
            <option>English (United Kingdom)</option>
            <option>English (Australia)</option>
            <option>English (India)</option>
            <option>日本語</option>
            <option>Français</option>
            <option>Español</option>
            <option>Italiano</option>
            <option>Deutsch</option>
            <option>Norsk</option>
            <option>Svenska</option>
            <option>Tiếng Việt</option>
            <option>Nederlands</option>
            <option>Dansk</option>
         </select>
      </div>
    </div>
  )
}

export default Footer
