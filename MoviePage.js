import React from 'react'


const MoviePage = () => {
  return (
    <div className='container' >
        <>
  <section className="home container" id="home">
    <img src="imagebackground.jpg" alt="" className="home-img" />
    <div className="home-text">
      <h1 className="home-title">
        {" "}
        The Magic
        <br /> Flute
      </h1>
      <p>
        Releasing on
        <br /> November 17
      </p>
      <a href="play-page.html" className="watch-btn">
        <i className="bx bx-right-arrow" />
        <span>Watch Trailer</span>
      </a>
    </div>
  </section>
  
  {/*Movies and shows section  */}
  <section className="movies container" id="movies">
    {/*heading */}
    <div className="heading">
      <h2 className="heading-title">Showing Movies</h2>
    </div>
    {/*movies-content */}
    <div className="movies-content">
      {/*movies box 1 */}
      <div className="movie-box">
        <img src="Welcome to Jungle.jpg" alt="" className="movie-box-img" />
        <div className="box-text">
          <h2 className="movie-title">Welcome to Jungle</h2>
          <span className="movie-type">
            {" "}
            Action/Comedian
            <br />
            2023
          </span>
          <a href="#" className="watch-btn play-btn">
            <i className="bx bx-right-arrow" />
          </a>
        </div>
      </div>
      {/*movies box 2 */}
      <div className="movie-box">
        <img src="images.jpg" alt="" className="movie-box-img" />
        <div className="box-text">
          <h2 className="movie-title">Pathaan</h2>
          <span className="movie-type">
            {" "}
            Action/Thriller
            <br />
            2023
          </span>
          <a href="#" className="watch-btn play-btn">
            <i className="bx bx-right-arrow" />
          </a>
        </div>
      </div>
      {/*movies box 3 */}
      <div className="movie-box">
        <img src="Gumrah.jpg" alt="" className="movie-box-img" />
        <div className="box-text">
          <h2 className="movie-title">Gumrah</h2>
          <span className="movie-type">
            {" "}
            Thrilled
            <br />
            2023
          </span>
          <a href="#" className="watch-btn play-btn">
            <i className="bx bx-right-arrow" />
          </a>
        </div>
      </div>
      {/*movies box 4 */}
      <div className="movie-box">
        <img src="Neeyat.jpg" alt="" className="movie-box-img" />
        <div className="box-text">
          <h2 className="movie-title">Neeyat</h2>
          <span className="movie-type">
            {" "}
            Dramatic/Mysterious
            <br />
            2023
          </span>
          <a href="#" className="watch-btn play-btn">
            <i className="bx bx-right-arrow" />
          </a>
        </div>
      </div>
      {/*movies box 5 */}
      <div className="movie-box">
        <img src="RebelMoon.webp" alt="" className="movie-box-img" />
        <div className="box-text">
          <h2 className="movie-title">RebelMoon</h2>
          <span className="movie-type">
            {" "}
            Science fiction movie
            <br />
            2023
          </span>
          <a href="#" className="watch-btn play-btn">
            <i className="bx bx-right-arrow" />
          </a>
        </div>
      </div>
      {/*movies box 6 */}
      <div className="movie-box">
        <img src="Tiger3.jpeg" alt="" className="movie-box-img" />
        <div className="box-text">
          <h2 className="movie-title">Tiger3</h2>
          <span className="movie-type">
            {" "}
            Action/Thriller
            <br />
            2023
          </span>
          <a href="#" className="watch-btn play-btn">
            <i className="bx bx-right-arrow" />
          </a>
        </div>
      </div>
      {/*movies box 7 */}
      <div className="movie-box">
        <img src="Batman.jpeg" alt="" className="movie-box-img" />
        <div className="box-text">
          <h2 className="movie-title">Batman</h2>
          <span className="movie-type">
            {" "}
            Action/Comedian
            <br />
            2023
          </span>
          <a href="#" className="watch-btn play-btn">
            <i className="bx bx-right-arrow" />
          </a>
        </div>
      </div>
      {/*movies box 8 */}
      <div className="movie-box">
        <img src="bademiyanchotemiyan11683278919.webp" alt="" className="movie-box-img" />
        <div className="box-text">
          <h2 className="movie-title">Bare Miyan Chhote Miyan</h2>
          <span className="movie-type">
            {" "}
            Action/Thriller
            <br />
            2023
          </span>
          <a href="#" className="watch-btn play-btn">
            <i className="bx bx-right-arrow" />
          </a>
        </div>
      </div>
    </div>
  </section>
  {/*movies section end*/}
  {/*next-page*/}
  <div className="next-page">
    <a href="play-page.html" className="next-btn">
      Next Page
    </a>
  </div>
  <div id="scrollToTop">
    <span>Go Up</span>
  </div>
  {/*link swiper JS */}
  {/*link JS */}
</>
   </div>
  )
}

export default MoviePage