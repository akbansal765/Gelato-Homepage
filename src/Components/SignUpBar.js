import React, { useEffect } from 'react';
import gelatoLogo from '../gelato_logo_black.svg'
import contactUS from '../contactUs.svg'
import cart from '../cart.svg'
import user from '../user.svg'
import globe from '../globe.svg'
import down from '../down.svg'

const SignUpBar = ({overlayToggle}) => {

    useEffect(() => {
        // Initialize specific popover for SignUpBar component
        const popoverTrigger = document.querySelector('#popover-signupbar');
        if (popoverTrigger) {
          new window.bootstrap.Popover(popoverTrigger, {
            offset: [0, 10], // Add offset or other options as needed
            customClass: 'signupbar_popover',
            html: true,
            content: `
                      <div class="language_box"><p class="language">Language - IN</p></div>
                      <div class="language_box"><p class="language">Currency - INR</p></div>
                      `,
            container: 'body',
          });
        }
      }, []); // Empty dependency array means this runs once after the component mounts
    
  return (
    <div className='signup_bar'>
      <div className="gelato_icon_box">
        <img src={gelatoLogo} alt="" />
      </div>
      <div className="buttons_box">
        <button className='button'><img src={contactUS} alt="" /> Contact us</button>
        <button onClick={overlayToggle} type="button" id="popover-signupbar" className="btn button btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="Bottom popover">
         <img src={globe} alt="" /> IN/INR <img src={down} alt="" />
        </button>
        <button className='button'><img src={cart} alt="" /> Cart</button>
        <button className='button'><img src={user} alt="" /> Sign in</button>
        <button className='button signup_btn'>Sign up for free</button>
      </div>
    </div>
  )
}

export default SignUpBar
