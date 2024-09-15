import React from 'react'
import down from '../down.svg'
import right from '../right.svg'

const Navbar = (props) => {

  const applyOverlay = (e)=>{
    
    const el = e.currentTarget;
    const arrowImg = el.querySelector('img')

    setTimeout(() => {
      arrowImg.classList.add('img_rotate_class');
      el.style.backgroundColor = 'rgba(185, 179, 179, 0.20)';
      props.overlay();
    }, 500);
  }

  const removeOverlay = (e)=>{
    const el = e.currentTarget;
    const arrowImg = el.querySelector('img')

    setTimeout(() => {
      arrowImg.classList.remove('img_rotate_class');
      el.style.backgroundColor = '';
      props.overlay2();
    }, 500);
  }

  return (
    <div className='navbar_component'>
        <div className="dropdown" onMouseOver={applyOverlay} onMouseLeave={removeOverlay}>
          <button className="btn menu_btn" type="button" aria-expanded="false">
            <div className='menu_text_box'>
            Products <img src={down} alt="" />
            </div>
            <div className="menu_arrow_box">
              <div className="triangle"></div>
            </div>
          </button>
          <ul className="dropdown-menu">
            <li><button className="dropdown-item" type="button">Bestseller <img src={right} alt="" /></button></li>
            <li><button className="dropdown-item" type="button">Mens clothing <img src={right} alt="" /></button></li>
            <li><button className="dropdown-item" type="button">Women clothing <img src={right} alt="" /></button></li>
            <li><button className="dropdown-item" type="button">Kids & baby clothing <img src={right} alt="" /></button></li>
            <li><button className="dropdown-item" type="button">Wall art <img src={right} alt="" /></button></li>
            <li><button className="dropdown-item" type="button">Calenders</button></li>
            <li><button className="dropdown-item" type="button">Cards</button></li>
            <li><button className="dropdown-item" type="button">Photo books<img src={right} alt="" /></button></li>
            {/* <li><button className="dropdown-item" type="button">Hats<img src={right} alt="" /></button></li>
            <li><button className="dropdown-item" type="button">Phone cases</button></li> */}
          </ul>
        </div>
        
        <div className="dropdown" onMouseOver={applyOverlay} onMouseLeave={removeOverlay}>
          <button className="btn menu_btn" type="button" aria-expanded="false">
            <div className='menu_text_box'>
            Start selling <img src={down} alt="" />
            </div>
            <div className="menu_arrow_box">
              <div className="triangle"></div>
            </div>
          </button>
          <ul className="dropdown-menu">
            <li><button className="dropdown-item" type="button">Print on demand</button></li>
            <li><button className="dropdown-item" type="button">Setup your business <img src={right} alt="" /></button></li>
            <li><button className="dropdown-item" type="button">Sell custom products <img src={right} alt="" /></button></li>
            <li><button className="dropdown-item" type="button">Integrations <img src={right} alt="" /></button></li>
            <li><button className="dropdown-item" type="button">Shippping and delivery <img src={right} alt="" /></button></li>
            <li><button className="dropdown-item" type="button">Partner services</button></li>
            <li><button className="dropdown-item" type="button">Custom packaging</button></li>
            <li><button className="dropdown-item" type="button">Move your products</button></li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar
