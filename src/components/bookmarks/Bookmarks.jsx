import PropTypes from 'prop-types';
import Bookmark from '../bookmark/Bookmark';

const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="md:w-1/3 lg:w-1/3 rounded-xl bg-[#1111110D] p-[32px]">
            <div className='mb-6 p-8 bg-[#6047EC1A] text-[24px] font-bold text-blue-600 border-blue-600 rounded-xl text-center'>
                <h3>Spent Time on Read: {readingTime}</h3>
            </div>
            <h2 className="text-2xl mb-4 font-bold">Bookmarked Blogs: {bookmarks.length}</h2> 
            {
                bookmarks.map((bookmark,idx)=> <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
}; 

Bookmarks.propTypes={
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number,
}

export default Bookmarks;