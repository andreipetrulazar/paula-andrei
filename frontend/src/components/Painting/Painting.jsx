import React from 'react';

import SubHeading from '../../constants/SubHeading/SubHeading';
import painting from '../../assets/painting.png'

import './Painting.css';

const Painting = () => (
  <div className="app__painting flex__center section__padding" id="pictura">
    <div className="app__painting-title">
      <SubHeading title="Pictura este poezie tăcută." />
      <h1 className="headtext__cormorant">Pictura Lunii</h1>
    </div>

    <div className="app__painting-container">
      <div className="app__painting-container_description  flex__center">
        <p className="app__painting-container_description_heading">Descrirere</p>
        <div className="app__painting-container_description_text">
        <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed mauris vel nisl ultrices porttitor. Nulla eget pulvinar massa. Praesent ac auctor erat. Maecenas id ultricies ex. Donec eu venenatis turpis. Sed interdum molestie pulvinar.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At itaque quis non? Sint, sit excepturi? Earum possimus voluptate quaerat, iste optio, cupiditate quis labore ab molestias hic non veniam quo?Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem illo sint corporis dolorem ab suscipit? Rerum, rem! Tempore, perferendis excepturi architecto id fugit, ex fuga pariatur dolores incidunt, aut voluptas? 
            </p>
        </div>
      </div>

      <div className="app__painting_img">
        <img src={painting} alt="painting__img" />
      </div>

      
    </div>

    <div style={{ marginTop: 15 }}>
    <a href="https://www.facebook.com/hashtag/PaulaAndreiPaintings" target='_blank'>  <button type="button" className="custom__button">Mai multe</button>  </a>
    </div>
  </div>
);

export default Painting;