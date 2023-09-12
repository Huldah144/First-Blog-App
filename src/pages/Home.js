import React from "react";
import BlogContainer from "../components/Blog/BlogContainer";

const Home = ()=>{
    return(
        <>
        
        <div className="blogs">
            <BlogContainer sectionTitle='Design Tools'  />
            <BlogContainer sectionTitle='Weekly Updates'/>
            <BlogContainer sectionTitle='Tutorials'/>
        </div>

        {/* <Footer/> */}
        </>
    )
}

export default Home