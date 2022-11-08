
import React, { useState, useEffect } from 'react';

import SubHeading from '../../constants/SubHeading/SubHeading';
import './BlogSection.css';
import  sanityClient  from '../../client';
import { Link } from 'react-router-dom';
import moment from 'moment'


const BlogSection = () => {
  const [postData, setPost] = useState(null);
  const [sort, setSort] = useState('asc');
  useEffect(() => {
    sanityClient 
      .fetch(`

      *[_type== "post"]{
          title,
          publishedAt,
          slug,
          mainImage {
            asset-> {
               _id,
               url
            },
            alt,
            
          }
      }`).then((data) => setPost(data))
      .catch(console.error)

  }, []);


  return (
    <div className="app__gallery flex__center" id='noutati'>
      <div className="app__gallery-content">
        <div className='app__gallery-content-title'>
      <h1 className="headtext__cormorant">Blog</h1>
        <SubHeading title="Cele mai recente postari din creatiile mele" />
        </div>
        <div className='container mx-auto'>
      
        <main className='app__gallery flex__center'>
        
        <section className='app__gallery-images_container'>
         
          <div className='app__gallery-images'>
            {postData && 
            postData
            .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt) )
            .slice(0,4)
            .map((post, index)=> (
            <article className='app__gallery-images_card flex__center'>
              <Link to={'/post/' + post.slug.current } key={post.slug.current} >
              <span className='app__gallery-images_card flex__center' key={index}>
                <img 
                src={post.mainImage.asset.url} 
                alt={post.mainImage.alt}
                className="w-full h-full rounded-r object-cover absolute" />
                <span className='app__gallery-post_title block relative h-full flex justify-end items-end pr-4 pb-4 '>
                  <h3 className='text-gray-800  font-bold px-3 py-4 bg-red-700 text-red-100 bg-opacity-75 rounded  '>{post.title} - {moment(post.publishedAt).format('DD MMM YYYY')}</h3>
                  
                </span>

              </span>
              </Link>
            </article>
            
            ))}
            
          </div>
        </section>
        </main>
        
        </div>
        <button type='button' className='custom__button'><Link to="/post" className='button-link'>Vezi toate postările</Link></button>
        </div>
    
    </div>

    
  );
};

export default BlogSection;