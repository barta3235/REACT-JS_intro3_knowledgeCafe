import { useState,useEffect } from "react";
import Blog from "../blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handleAddToBookmark,handleMarkAsRead}) => {

    const [blogs,setBlogs]= useState([]);
    
    useEffect(()=>{
    fetch('blogs.json')
    .then(res=>res.json())
    .then(data=> setBlogs(data));
  },[])

    return (
        <div className=" md:w-2/3 lg:w-2/3">
            {/* <h1 className="text-4xl">Blogs: {blogs.length}</h1> */}
            {
                blogs.map((blog)=> <Blog key={blog.id} blog={blog} handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blog>)
            }
        </div>
    );
};

Blogs.propTypes={
    handleAddToBookmark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired,
}


export default Blogs;