import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";

const Blog = ({blog,handleAddToBookmark,handleMarkAsRead}) => {
    const {id,title,cover,author,author_img,reading_time,posted_date,hashtags}=blog;
    // console.log(blog);

    return (
        <div className='mb-20'>
           <img className='w-full' src={cover} alt="" />

           <div className='mt-8 mb-4 flex flex-col md:flex-row lg:flex-row justify-between items-center'>

              <div className='flex gap-3 items-center'>
                  <img className='w-[60px] h-[60px]' src={author_img} alt="" />
                  <div>
                     <h1>{author}</h1>
                     <h3>{posted_date}</h3>
                  </div>
              </div>


              <div className='flex gap-3 items-center'>
                   <span>{reading_time} min read</span>
                   
                   <button onClick={()=>handleAddToBookmark(blog)} className='text-2xl'><CiBookmark></CiBookmark></button>
              </div>
           </div>

           <h2 className='text-4xl'>{title}</h2> 
           <p className='mt-4 mb-5'>
            {
                hashtags.map((hash,idx)=> <span key={idx}><a href="">#{hash}   </a></span>)
            }
           </p>


           <button className='text-red-700 font-bold underline' onClick={()=> handleMarkAsRead(id,reading_time)}>Mark as Read</button>

        </div>
    );
};

Blog.propTypes={
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired,
}

export default Blog;

