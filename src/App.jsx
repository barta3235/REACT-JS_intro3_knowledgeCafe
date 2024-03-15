import './App.css'
import Header from './components/header/Header'
import Blogs from './components/blogs/Blogs'
import Bookmarks from './components/bookmarks/Bookmarks'
import { useState } from 'react'


function App() {

  const [bookmarks,setBookmarks]=useState([]);
  const [readingTime,setReadingTime]=useState(0);

  const handleAddToBookmark=(blog)=>{
    //  console.log(blog);
     const newBookmark= [...bookmarks,blog];
     setBookmarks(newBookmark);
  }


  const handleMarkAsRead=(id,time)=>{
       const newTime= readingTime+time;
       setReadingTime(newTime);
       
       // remove the read blog from the bookmark
       const remainingBookMarks=bookmarks.filter((bookmark)=> bookmark.id!==id);
       setBookmarks(remainingBookMarks);
  }


  return (
    <>
      <Header></Header>
      <div className='mx-4 flex flex-col md:flex-row lg:flex-row gap-6'>
         <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
         <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  )
}

export default App
