import React from 'react';
import './Artist.css';

import quote from '../../assets/quote.png';
import sign from '../../assets/sign.png';
import artist from '../../assets/paula2.png';
import SubHeading from '../../constants/SubHeading/SubHeading';;


const Artist = () => (
  <div className="app__bg app__wrapper section__padding" id='artist'>
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={artist} alt="artist_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Motto" />
      <h1 className="headtext__cormorant">Crezul Artistic</h1>

      <div className="app__artist-content">
        <div className="app__artist-content_quote">
          <img src={quote} alt="quote_image" />
          <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit . Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo velit, et maiores iure distinctio excepturi doloribus unde at.</p>
        </div>
        <p className="p__opensans"> auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc. </p>
      </div>

      <div className="app__artist-sign">
        <p>Paula Andrei</p>
        <p className="p__opensans">Artist</p>
        <img src={sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Artist;