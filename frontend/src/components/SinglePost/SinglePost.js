import React, { useState, useEffect} from 'react';
import sanityClient from '../../client';
import { useParams } from 'react-router-dom';
import  imageUrlBuilder  from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';
import moment from 'moment'
import './SinglePost.css'


const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source)
}

export const SinglePost = () => {

const [singlePost, setSinglePost] = useState(null)

 const {slug} = useParams();

 useEffect (() => {
   sanityClient.fetch(`*[slug.current == '${slug}']{
        title,
        _id,
        slug,
        mainImage{
          asset->{
            _id,
            url
          }
        },
        publishedAt,
        body,
        "name": author->name,
        "authorImage": author->image
   }`).then((data) => setSinglePost(data[0]))
      .catch(console.error)
 }, [slug])

 if (!singlePost) return <div>Loading...</div>


  return (
      <main className='bg-gray-200 min-h-screen p-12 singlePost'>
        <article className='contianer shadow-lg mx-auto bg-green-100 rounded-lg'>
          <header className='relative '>
            <div className='absolute h-full w-full flex items-center justify-center p-8'>
              <div className='bg-white bg-opacity-75 rounded p-12'>
                <h1 className='cursive text-3xl lg:text-6xl mb-4'>{singlePost.title}</h1>
                <div className='flex justify-center text-gray-800 '>
                  <img src={urlFor(singlePost.authorImage).url()} alt={singlePost.name}
                  className="w-10 h-10 rounded-full"
                  />
                  <p className='cursive flex items-center pl-2 text-2xl'>{singlePost.name}</p>
                  <p className='cursive flex items-center pl-2 text-2xl'>{moment(singlePost.publishedAt).format('DD MMM YYYY')}</p>
                </div>
               
              </div>
            </div>
            <img src={singlePost.mainImage.asset.url} alt={singlePost.title} className="w-full object-cover rounded-t image-container"/>
          </header>
          <div className='px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full'>
            <BlockContent blocks={singlePost.body} projectId="ubceahrq" dataset="production"/>
          </div>
        </article>

      </main>
  )
}
