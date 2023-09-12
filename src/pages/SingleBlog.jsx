import React, { useEffect, useState } from 'react'
import {useParams, useSearchParams} from 'react-router-dom';
import RectangleImage1 from '../assets/images/Rectangle 123.png'
import RectangleImage2 from '../assets/images/Rectangle 124 (1).png'
import BlogContainer from '../components/Blog/BlogContainer'

const SingleBlog = ({match}) => {

  const [post, setPost] = useState(null)
  const { postId } = useParams()

  useEffect(() => {
    // const id = match.params.id
    fetchPost(1)
  }, []);

  function fetchPost(id) {  
    fetch('https://jsonplaceholder.typicode.com/posts/' + id).then(response => response.json()).then(data => setPost(data))
  }

  // console.log(post)

  return (
    <div>
      <div className="container last">
        <img src={RectangleImage1} alt="" className='Rec-1' />
      </div>

      <p className='p-one'>
        {post.body}
        {/* Design comps, layouts, wireframes—will your clients accept that you go about things the facile way? Authorities in our business will tell in no uncertain terms that Lorem Ipsum is that huge, huge no no to forswear forever. <br />

        <br /> Not so fast, I'd say, there are some redeeming factors in favor of greeking text, as its use is merely the symptom of a worse problem to take into consideration. <br />

        <br /> The toppings you may chose for that TV dinner pizza slice when you forgot to shop for foods, the paint you may slap on your face to impress the new boss is your business. But what about your daily bread? */}
      </p>

      {/* <div className='credit'>
        <img src={RectangleImage2} alt="" className='Rec2' />
        <p>Image caption or credit</p>
      </div>

      <p className='p-two'>
        The toppings you may chose for that TV dinner pizza slice when you forgot to shop for foods, the paint you may slap on your face to impress the new boss is your business. But what about your daily bread? Not so fast, I'd say, there are some redeeming factors in favor of greeking text, as its use is merely the symptom of a worse problem to take into consideration. <br />

        <br /> Design comps, layouts, wireframes—will your clients accept that you go about things the facile way? Authorities in our business will tell in no uncertain terms that Lorem Ipsum is that huge, huge no no to forswear forever.
      </p>

      <p className='p-three'>
        Design comps, layouts, wireframes—will your clients accept that you go about things the facile way? Authorities in our business will tell in no uncertain terms that Lorem Ipsum is that huge, huge no no to forswear forever.
      </p>

      <p className='p-four'>
        Design comps, layouts, wireframes—will your clients accept that you go about things the facile way? Authorities in our business will tell in no uncertain terms that Lorem Ipsum is that huge, huge no no to forswear forever. <br />

        <br /> The toppings you may chose for that TV dinner pizza slice when you forgot to shop for foods, the paint you may slap on your face to impress the new boss is your business. But what about your daily bread? Not so fast, I'd say, there are some redeeming factors in favor of greeking text, as its use is merely the symptom of a worse problem to take into consideration. <br />


        <br /> Not so fast, I'd say, there are some redeeming factors in favor of greeking text, as its use is merely the symptom of a worse problem to take into consideration.

        Design comps, layouts, wireframes—will your clients accept that you go about things the facile way? Authorities in our business will tell in no uncertain terms that Lorem Ipsum is that huge, huge no no to forswear forever.
      </p> */}

      <h3 className='p-title'>Other interesting posts</h3>
      <div>
        <BlogContainer sectionTitle='Weekly Updates' />
      </div>


    </div>
  )
}

export default SingleBlog
