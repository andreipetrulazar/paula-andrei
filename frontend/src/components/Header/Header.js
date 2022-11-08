import React from 'react';
import paula1 from '../../assets/paula1.png'

import SubHeading from '../../constants/SubHeading/SubHeading';
import './Header.css';

export const Header = () => {
  
  return (
    <div className="app__header app__wrapper section__padding" id="acasa">
    <div className='app__wrapper_info'>
        <SubHeading title ="Fără muzică, viaţa ar fi o greşeală. – Friedrich Nietzsche"/>
        <h1 className='app__header-h1'>Bine ați venit!</h1>

        <p className="p__opensans" style={{margin: '2rem 0' }}>Vă invit cu drag pe pagina mea web, pentru a putea să împărtășesc cu voi toate proiectele artistice! </p>
        <button type='button' className='custom__button'> <a href='#muzica-poezie'>Explorează </a></button>
    </div>

    <div className="app__wrapper_img welcome-img">
      <img src={paula1} alt="header img" />
    </div>
  </div>  
  )
}
