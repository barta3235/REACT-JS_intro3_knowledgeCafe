import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title}=bookmark;
    console.log(title);
    return (
        <div className='p-[30px] bg-white mb-4 rounded-xl'>
            <h3 className='text-[18px] font-semibold'>{title}</h3>
        </div>
    );
};


Bookmark.propTypes={
    bookmark: PropTypes.object.isRequired,
    title: PropTypes.string,
}

export default Bookmark;