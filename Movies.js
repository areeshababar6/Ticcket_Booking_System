import React from "react";

import { Link } from "react-router-dom";

function Movies(props) {
  return (
    <div>
      <div className="container-fluid ">
        <div class="heading py-2">
          {" "}
          {/*mt-3*/}
          <h1 class="text-center text-white heading-title">
            <b>Now Showing</b>
          </h1>
        </div>
        {/* <BsCartPlusFill style={{fontSize:"55px"}}/> */}
        <div className="container-fluid">
          <div className="row">
            {props.movies.map((item) => (
              <div className="col-md-3 ">
                <div class="card mt-3">
                  <img
                    class="card-img-top"
                    height={350}
                    src={item.image}
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h3 class="card-title"><b>{item.name}</b></h3>
                    <p class="card-text">{item.price}</p>
                    <button
                      onClick={() => props.addMovies(item)}
                      class="btn btn-primary"
                    >
                      <Link className="text" to="/Movie">Book Now</Link>
                    </button>
                    {/* <a href="/MoviePage" onClick={() => props.addMovies(item)}
                      class="btn btn-primary" > Book Now</a> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div class="heading py-2">
          <h1 class="text-center text-white heading-title">
            <b>Up Coming</b>
          </h1>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 ">
              <div class="card mt-3">
                <img
                  class="card-img-top"
                  height={350}
                  src="yalghar.jpeg"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title">
                    <b>Yalghaar</b>
                  </h5>
                  <p class="card-text"></p>
                  <button
                    path="/Movie"
                    onClick={() => props.addMovies()}
                    class="btn btn-primary"
                  >
                    <Link className="text"  to="/Movie">Book Now</Link>
                  </button>
                </div>
              </div>
            </div>

            <div className="col-md-3 ">
              <div class="card mt-3">
                <img
                  class="card-img-top"
                  height={350}
                  src="marvel.jpeg"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title">
                    <b>Marvel</b>
                  </h5>
                  <p class="card-text"></p>
                  <button
                    onClick={() => props.addMovies()}
                    class="btn btn-primary"
                  >
                    <Link className="text"  to="/Movie">Book Now</Link>
                  </button>
                </div>
              </div>
            </div>

            <div className="col-md-3 ">
              <div class="card mt-3">
                <img
                  class="card-img-top"
                  height={350}
                  src="littlemarmid.jpeg"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title">
                    <b>The Little Mermaid</b>
                  </h5>
                  <p class="card-text"></p>
                  <button onClick={() => props.onAdd()} class="btn btn-primary">
                    <Link className="text"  to="/Movie">Book Now</Link>
                  </button>
                </div>
              </div>
            </div>

            <div className="col-md-3 ">
              <div class="card mt-3">
                <img
                  class="card-img-top"
                  height={0}
                  src="The_Magician's_Elephant.jpeg"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h6 class="card-title">
                    <b>The Magician's Elephant</b>
                  </h6>
                  <p class="card-text"></p>
                  <button
                    onClick={() => props.addMovies()}
                    class="btn btn-primary"
                  >
                    <Link className="text"  to="/Movie">Book Now</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default  Movies;
