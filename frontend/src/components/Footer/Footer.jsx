import React from 'react';
import { Link } from 'react-router-dom'
import { FiFacebook, FiInstagram } from 'react-icons/fi';
import { FaTiktok } from 'react-icons/fa'
import './Footer.css';
import paulalogo from '../../assets/paulalogo.png'

const Footer = () => (
  <div className="app__footer section__padding" id="footer">
   
   

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Rezervă Eveniment</h1>
        <p className="p__opensans">Piatra Neamț, jud. Neamț, România</p>
        <p className="p__opensans">+40 123-123-123</p>
        <p className="p__opensans" style={{color:'white', textTransform:'lowercase'}}>andreipaula99@gmail.com</p>
      </div>

      <div className="app__footer-links_logo">
       <a href='#home'> <img src={paulalogo} alt="footer_logo" /> </a>
        <p className="p__opensans">&quot;Fără artă, cruzimea realității ar face lumea de nesuportat.&quot;</p>
        <p className="p__opensans">George Bernard Shaw</p>
       
        <div className="app__footer-links_icons">
        <a href='https://www.facebook.com/Paula.Andrei.folclor' target='_blank'>
            <FiFacebook/> 
          </a>

          <a href='https://www.instagram.com/andrei_paula/' target='_blank'>
            <FiInstagram/>
          </a>
          <a href='https://www.tiktok.com/@paulaandrei007' target='_blank' >
            <FaTiktok />
          </a>
        </div>
      </div>

      <div className="app__footer-links_navbar">
      <ul className="app__navbar-footer">
      <li className="p__opensans"><a href="/#acasa" className="p__opensans">Acasă</a></li>
        <li className="p__opensans"><a href="/#muzica-poezie" className="p__opensans">Muzică & Poezie</a></li>
        <li className="p__opensans"><a href="/#pictura" className="p__opensans">Pictură</a></li>
        <li className="p__opensans"><a href="/#artist" className="p__opensans">Crezul Artistic</a></li>
        <li className="p__opensans"><a href="/#noutati" className="p__opensans">Noutăți</a></li>
         <Link to="/post" className="p__opensans">Blogul Meu</Link>
        <li className="p__opensans"><Link to="/contact">Contact</Link></li>
      </ul>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2022 Paula Andrei. Toate Drepturile Rezervate.</p>
    </div>

  </div>
);

export default Footer;