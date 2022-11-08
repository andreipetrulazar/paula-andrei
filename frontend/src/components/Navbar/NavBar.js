import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/paulalogo.png';
import '../Navbar/Navbar.css'
import  {FaMicrophoneAlt} from 'react-icons/fa'
import { FaMicrophoneSlash } from 'react-icons/fa'
import './Navbar.css';

export const NavBar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);


  return (
  
<nav className="app__navbar">
      <div className="app__navbar-logo">
       <a href='/#acasa'> <img src={logo} alt="app__logo" /> </a>
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="/#acasa" className="p__opensans">Acasă</a></li>
        <li className="p__opensans"><a href="/#muzica-poezie" className="p__opensans">Muzică & Poezie</a></li>
        <li className="p__opensans"><a href="/#pictura" className="p__opensans">Pictură</a></li>
        <li className="p__opensans"><a href="/#artist" className="p__opensans">Crezul Artistic</a></li>
        <li className="p__opensans"><a href="/#noutati" className="p__opensans">Noutăți</a></li>
       
        <li className="p__opensans"><Link to="/contact">Contact</Link></li>
          </ul>
      <div className="app__navbar-login">
        <div />
       <Link to="/post" className="p__opensans">Blogul Meu</Link>
      </div>
      <div className="app__navbar-smallscreen">
        <FaMicrophoneAlt color="#fff" cursor={'pointer'} fontSize={27} onClick={() => setToggleMenu(true)} />       
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <FaMicrophoneSlash fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
            <li className="p__opensans"><a href="/#acasa" onClick={() => setToggleMenu(false)} >Acasă</a></li>
            <li className="p__opensans"><a href="/#muzica-poezie" onClick={() => setToggleMenu(false)} >Muzică & Poezie</a></li>
            <li className="p__opensans"><a href="/#pictura" onClick={() => setToggleMenu(false)} >Pictură</a></li>
            <li className="p__opensans"><a href="/#artist" onClick={() => setToggleMenu(false)} >Crezul Artistic</a></li>
            <li className="p__opensans"><a href="/#noutati" onClick={() => setToggleMenu(false)} >Noutăți</a></li>
            <li className="p__opensans"><Link to="/post" onClick={() => setToggleMenu(false)} >Blog</Link></li>
            <li className="p__opensans"><Link to="/contact" onClick={() => setToggleMenu(false)} >Contact</Link></li>
            </ul>
          </div>
        )}
      </div>
    </nav>



















      // <div className='app__navbar'>
      //   <ul className='app__navbar-links'>
      //         <li className='p__opensans'>
      //     <Link to='/' exact className='app__navbar-logo'><img src={logo} alt='logo' /></Link>
      //        </li>
             
      //     <Link to='/post' className='links'>Blog</Link>
           
      //         <li className='p__opensans'>
      //     <Link to='/project' className=''>Projects</Link>
      //         </li>
      //         <li className ="p__opensans">
      //     <Link to='/about' className=''>About me!</Link>
      //          </li>

      //   </ul>
      //   <div className='inline-flex py-8 px-3 my-6'>
      //     <SocialIcon url='https://www.facebook.com/andrei.p.lazar' className='mr-4' target="_blank" fgColor='#fff' style={{ height: 35, width: 35 }} />

      //     <SocialIcon url='https://www.linkedin.com/in/andreipetrulazar/' className='mr-4' target="_blank" fgColor='#fff' style={{ height: 35, width: 35 }} />

      //     <SocialIcon url='https://github.com/andreipetrulazar' className='mr-4' target="_blank" fgColor='#fff' style={{ height: 35, width: 35 }} />

      //   </div>
      // </div>
  
  )
}
