import React from 'react'
import "./App.css";


const PlayTrailor = () => {
  return (
    <div>
        <>
  
  <div className="play-container container">
    {/*play image */}
    <img src="TrailorPageJungle.jpg" alt="" className="play-img" />
    {/*play text*/}
    <div className="play-text">
      <h2>Welcome to the jungle</h2>
      {/*ratings*/}
      <div className="rating">
        <i className="bx bxs-star" />
        <i className="bx bxs-star" />
        <i className="bx bxs-star" />
        <i className="bx bxs-star" />
        <i className="bx bxs-star-half" />
      </div>
      {/*tags*/}
      <div className="tags">
      <span>Comedian </span>
        <span>Action</span>
        <span>Adventure</span>
        <span>4K</span>
      </div>
      {/*trailor buttonn*/}
      <a href="Welcome To The Jungle (Welcome 3) - Official Announcement _ 
      Releasing Christmas - 20th December 2024 copy.mp4" className="watch-btn">
        <i className="bx bx-right-arrow" />
        <span>Watch Trailer</span>
      </a>
    </div>
    {/*play buttonn*/}
    <i className="bx bx-right-arrow play-movie" />
    {/*video container*/}
    <div className="video-container">
      {/*video box*/}
      <div className="video-box">
        <video
          id="myvideo"
          src="Kung Fu Panda 4 (2024) Movie Preview.mp4"
          controls=""
        />
        {/*video close icon*/}
        <i className="bx bx-x close-video" />
      </div>
    </div>
  </div>
  {/*About*/}
  <div className="about-movie container">
    <h2>Kung Fu Panda</h2>
    <p>
    Welcome To The Jungle is an upcoming Hindi movie scheduled to be released on 20 Dec, 2024.
    The film will be an action-comedy with a lot of twists and turns. 
    The makers are planning to shoot the film in exotic locations like New York, Dubai and London.
    </p>
    {/*Movie cast*/}
    <h2 className="cast-heading">Movie Cast</h2>
    <div className="cast">
      <div className="cast-box">
        <img src="Cast1.jpg" alt="" className="cast-img" />
        <span className="cast-title">Akshay Kumar</span>
      </div>
      <div className="cast-box">
        <img src="Cast2.jpg" alt="" className="cast-img" />
        <span className="cast-title">Arshad Warsi</span>
      </div>
      <div className="cast-box">
        <img src="Cast3.jpg" alt="" className="cast-img" />
        <span className="cast-title">Disha Patani</span>
      </div>
      <div className="cast-box">
        <img src="Cast4.jpg" alt="" className="cast-img" />
        <span className="cast-title">Jacqueline Fernandez</span>
      </div>
      <div className="cast-box">
        <img src="Cast5.jpg" alt="" className="cast-img" />
        <span className="cast-title">Lara Dutta</span>
      </div>
      <div className="cast-box">
        <img src="Cast6.jpg" alt="" className="cast-img" />
        <span className="cast-title">Dwayne Johnson</span>
      </div>
    </div>
  </div>
  {/*Download*/}
  <div className="download">
    <h2 className="download-title">Book Seats</h2>
    <div className="download-links">
      <a href="https://youtu.be/7D6iB0qAIYU" download="">
         Emporium Mall
      </a>
      <a  href="" download="">
        Johar Town 
      </a>
      <a href="" download="">
        3D
      </a>
    </div>
  </div>
  {/*copyright*/}
  <div className="copyright">
    <p>© All Right Reserved </p>
  </div>
  {/*link swiper JS */}
  {/*link JS */}
</>

    </div>
  )
}

export default PlayTrailor