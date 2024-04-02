import React from "react";
import { Link } from "react-router-dom";

function Product(props) {
  return (
    <div className="container-fluid mb-0">
      {/* Slider Start */}
      <div className="container-xxxl mt-0 ">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block w-100 img-fluid"
                style={{ height: "68vh" }}
                src="dslider1.jpg"
                alt="First slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100 img-fluid"
                style={{ height: "68vh" }}
                src="dslider2.jpg"
                alt="Second slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100 img-fluid"
                style={{ height: "68vh" }}
                src="dslider3.jpg"
                alt="Third slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100 img-fluid"
                style={{ height: "68vh" }}
                src="dslider4.jpg"
                alt="Fourth slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100 img-fluid"
                style={{ height: "68vh" }}
                src="dslider5.jpeg"
                alt="Fifth slide"
              />
            </div>
            <div className="carousel-item img-fluid">
              <img
                className="d-block w-100"
                style={{ height: "68vh" }}
                src="dslider6.jpeg"
                alt="Sixth slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100 img-fluid"
                style={{ height: "68vh" }}
                src="dslider7.jpg"
                alt="Seventh slide"
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
      {/* Slider END */}
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
            {props.product.map((item) => (
              <div className="col-md-3 ">
                <div class="card mt-3">
                  <img
                    class="card-img-top"
                    height={350}
                    src={item.image}
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h5 class="card-title">{item.name}</h5>
                    <p class="card-text">{item.price}</p>
                    <button
                      onClick={() => props.onAdd(item)}
                      class="btn btn-primary"
                    >
                     <Link className="text"  to="/Movie">Book Now</Link> 
                    </button>
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
                  height={350}
                  src="marvel.jpeg"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title">
                    <b>Marvel</b>
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
                  <button onClick={() => props.onAdd()} class="btn btn-primary">
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

export default Product;
