import React from 'react';
import microphone from '../../assets/microphone.png'


const SubHeading = ({title}) => (
  <div style={{marginBottom : '1rem'}}>
    <p className="p__cormorant">{title}</p>
    <img src={microphone} alt="microphone" className='microphone__img' />
  </div>
);

export default SubHeading;
