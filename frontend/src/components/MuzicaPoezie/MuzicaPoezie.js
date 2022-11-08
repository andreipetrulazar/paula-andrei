import React from 'react';

import './MuzicaPoezie.css';
import microphone from '../../assets/microphone.png';
import stagemic from '../../assets/stagemic.png'
import P_letter from '../../assets/P.png'; 


const MuzicaPoezie = () => (
  <div className="app__muzica-poezie app__bg flex__center section__padding" id='muzica-poezie'>
    <div className="app__muzica-poezie-overlay flex__center p_letter">
      <img src={P_letter} alt="g letter" />
    </div>
    <div className="app__muzica-poezie-content flex__center">
      <div className="app__muzica-poezie-content_muzica">
            <h1 className='headtext__cormorant'>Muzică</h1>
            <img src={microphone} alt="microphone" className='microphone__img' />
            <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed mauris vel nisl ultrices porttitor. Nulla eget pulvinar massa. Praesent ac auctor erat. Maecenas id ultricies ex. Donec eu venenatis turpis. Sed interdum molestie pulvinar. 
            </p>
           <a href='https://www.youtube.com/channel/UC-7DnzMhiNvA73BrDGTXzBw/featured' target='_blank'> <button type='button' className='custom__button'>Mai multe</button> </a> 
      </div>

        <div className="app__muzica-poezie-content_stagemic flex__center">
                <img src={stagemic} alt="stage microphone" />
        </div>

          <div className="app__muzica-poezie-content_poezie">
            <h1 className='headtext__cormorant'>Poezie</h1>
            <img src={microphone} alt="microphone" className='microphone__img' />
            <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed mauris vel nisl ultrices porttitor. Nulla eget pulvinar massa. Praesent ac auctor erat. Maecenas id ultricies ex. Donec eu venenatis turpis. Sed interdum molestie pulvinar. 
            </p>
           <a href='https://www.facebook.com/hashtag/PaulaAndreiPoetry/' target='_blank'> <button type='button' className='custom__button'>Mai multe</button> </a>
      </div>


    </div>
  </div>
);

export default MuzicaPoezie;
