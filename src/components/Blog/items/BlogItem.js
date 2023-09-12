import React from 'react'
import CategoryItem from './CategoryItem'
import PostedDate from './PostedDate'
import vectorImage from '../../../assets/images/Vector.png'
import { Link } from 'react-router-dom' 

const BodyItem = (props) => {
    return (
        <div className="blog-item row">
            <div className="col-6">
                <div className="button flex">
                    <CategoryItem  name={props.item.category}/>
                    <PostedDate createdDate={props.item.created_date} />
                </div>
                <div className="subtwo">
                    <Link to={`post/`+ props.item.id} className="hil">{props.item.title}</Link>
                    {/* <h2 className="hil">{props.item.title}</h2> */}
                    <p className='redef'>{props.item.body}</p>
                </div>
            </div>
            <div className="col-6">
                <img src={vectorImage} alt="" />
            </div>

        </div>
    )
}

export default BodyItem
