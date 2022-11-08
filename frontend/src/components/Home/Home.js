import React from 'react';
import { Header } from '../Header/Header';
import MuzicaPoezie from '../MuzicaPoezie/MuzicaPoezie';
import Painting from '../Painting/Painting';
import Artist from '../Artist/Artist';
import Footer from '../Footer/Footer';
// import Video from '../Video/Video';
import BlogSection from '../BlogSection/BlogSection'; 

export const Home = () => {
  return (
    <div>
        
        <Header />
        <MuzicaPoezie />
        <Painting />
        {/* <Video /> */}
        <Artist />
        <BlogSection />
        <Footer />
  

    </div>
  )
}
