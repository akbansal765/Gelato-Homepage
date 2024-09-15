import React, { useEffect, useRef } from 'react';
import infoImg from '../information.png';

const NotificationBar = () => {

    const imgRef = useRef(null);

    useEffect(() => {
      // Initialize the Bootstrap Popover using the global `bootstrap` from the CDN
      const popover = new window.bootstrap.Popover(imgRef.current, {
        trigger: 'hover',
        placement: 'bottom',
        html: true,
        content: `<div class="popover_container">
                          Full <a class='popover_link' href="#">terms and conditions</a> apply.
                  </div>`,
        container: 'body',
        offset: [0, 15],
        customClass: 'popover-class',
        delay: { show: 0, hide: 1000}
      });
  
      // Cleanup on component unmount
      return () => {
        if (popover) {
          popover.dispose();
        }
      };
    }, []);


  return (
    <div className='notification_bar'>
      <a className='notification_link' href="#">FREE SHIPPING for orders over $300. Order today.</a>
      <img ref={imgRef} id="popoverImage" src={infoImg} alt="Popover Image" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="Bottom popover"/>
    </div>
  )
}

export default NotificationBar
