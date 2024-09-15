import './App.css';
import Footer from './Components/Footer';
import HeroSection from './Components/HeroSection';
import Navbar from './Components/Navbar';
import NotificationBar from './Components/NotificationBar';
import SignUpBar from './Components/SignUpBar';

import contactUs from '../src/contactUs_white.svg'

function App() {

  const overlay_fn_1 = () => {
    const overlayWindow = document.querySelector('.overlay_window_2');
    
    overlayWindow.style.display = 'block';
      // overlayWindow.classList.add('active_overlay');
  }
  const overlay_fn_2 = () => {
    const overlayWindow = document.querySelector('.overlay_window_2');
    overlayWindow.style.display = 'none';
    // overlayWindow.classList.remove('active_overlay');

  }
  const overlayToggle = () => {
    const overlayWindow = document.querySelector('.overlay_window_1');
    overlayWindow.classList.toggle('overlay_zindex');
  }

  return (
    <div className="App">
      <button className='button fixed_contact_button'><img src={contactUs} alt="" /> Contact us</button>
      <div className="overlay_window_1"></div>
      <div className="overlay_window_2"></div>
      <NotificationBar />
      <div className="position_fixed">
        <SignUpBar overlayToggle = {overlayToggle}/>
        <Navbar overlay = {overlay_fn_1} overlay2 = {overlay_fn_2}/>
      </div>
      <HeroSection />
      <Footer />
    </div>
  );
}

export default App;