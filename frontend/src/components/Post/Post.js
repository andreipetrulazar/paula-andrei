import React, { useState, useEffect } from 'react';
import  sanityClient  from '../../client';
import { Link } from 'react-router-dom';
import SubHeading from '../../constants/SubHeading/SubHeading';
import moment from 'moment';
import Footer from '../Footer/Footer';
import './Post.css'
import './Footer.css'


export const Post = () => {
  const [postData, setPost] = useState(null);

  useEffect(() => {
    sanityClient 
      .fetch(`

      *[_type== "post"]{
          title,
          slug,
          publishedAt,
          mainImage {
            asset-> {
               _id,
               url
            },
            
            alt
          }
      }`).then((data) => setPost(data))
      .catch(console.error)

  }, []);


  return (
    <>
    <main className='min-h-screen p-12 app__bg blog_posts  app__wrapper flex__center section__padding '>
        
    <section className='section__padding blog_posts'>
    <h1 className='app__header-h1'>Blogul Meu</h1>
      <h2 className='text-lg text-gray-500 flex justify-center mb-12'> <SubHeading title="Bun venit pe blogul meu!" /></h2>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {postData && postData.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt) ).map((post, index)=> (
    
        <article>
          <Link to={'/post/' + post.slug.current} key={post.slug.current} >
          <span className='block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-green-400' key={index}>
            <img 
            src={post.mainImage.asset.url} 
            alt={post.mainImage.alt}
            className="w-full h-full rounded-r object-cover absolute" />
            <span className='block relative h-full flex justify-end items-end pr-4 pb-4'>
              <h3 className='text-gray-800 text-lg font-bold px-3 py-4 bg-red-700 text-red-100 bg-opacity-75 rounded'>{post.title} - {moment(post.publishedAt).format('DD MMM YYYY')}</h3>
              
            </span>
          </span>
          </Link>
        </article>
        ))}
        
      </div>
     
    </section>
  
    </main>
        <Footer/>
      </>
  )
}
