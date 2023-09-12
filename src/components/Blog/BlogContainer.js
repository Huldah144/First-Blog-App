import React, { useEffect, useState } from 'react'
import BlogItem from './items/BlogItem'


const BlogContainer = (props) => {
    const [posts, setPosts] = useState([]);

    // function PostList(){
        useEffect(() => {
           fetchPost();
        }, []);
    // }

    function fetchPost(){
        fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json()).then(data => setPosts(data))
       
    }

     // let posts = [
    //     {
    //         id:1,
    //         created_date:'May 3, 2020',
    //         category: 'Category 1',
    //         title: '10 Hilarious Cartoons That Depict Real-Life Problems of Programmers',
    //         desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    //     },
    //     {
    //         id:2,
    //         created_date:'May 3, 2021',
    //         category: 'Category 2',
    //         title: '10 Hilarious Cartoons That Depict Real-Life Problems of Programmers',
    //         desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    //     },
    //     {
    //         id:3,
    //         created_date:'May 4, 2023',
    //         category: 'Category 3',
    //         title: '10 Hilarious Cartoons That Depict Real-Life Problems of Programmers',
    //         desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    //     },
    // ]



    return (
        <div className="wrapper-one">
            <h3 className="subone" >{props.sectionTitle}</h3>
            {/* <hr/> */}

            {posts.map((item) => <BlogItem item={item} key={item.id}/>)}
            
            {/* <BlogItem category={props.sectionTitle} date={props.postDate} />
            <BlogItem category={props.sectionTitle} date={props.postDate} /> */}

            {/* <button className='btn btn-secc'>{props.name} </button> */}

        </div>

    )
}

export default BlogContainer