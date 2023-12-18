import React, { useEffect } from 'react';
import logo from '../images/logo.png';
import champ from '../images/champ.png';

const Header: React.FC = () => {
  useEffect(() => {
    const video = document.getElementById('myVideo') as HTMLVideoElement;
    
    video.play().catch(function (error) {
      console.error('Autoplay was prevented:', error);
    });
  }, []); 

  return (
    <div className='header-div'>
      <header>
        <div className='logo'>
          <img src={logo} alt='Blasesoft logo' />
        </div>
        <div className='header-menu'>
          <ul>
            <li>Get to know us</li>
            <li>Careers</li>
            <li>Partnerships</li>
            <li>Let’s Talk</li>
          </ul>
        </div>
      </header>

      <div className='intro-div'>
        <video id="myVideo" muted loop>
          <source
            type='video/mp4'
            src='https://www.blazesoft.ca/wp-content/uploads/2023/07/shutterstock_1106130415.mov'
          />
        </video>
        <div className='intro-main'>
            <p>My name is</p>
            <img src={champ} alt='My name is Champion'/>
            <p>This is my book library assessment</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
