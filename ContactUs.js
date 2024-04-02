import React from "react";
import "./App.css";

function ContactUs() {
  return (
<div>
       <center>
        <div>
  <div className="row justify-content-center">
    <div className="col-md-6 text-center mb-3">
      <h3 className="heading-section-primary display-2 mt-5 text-white">Contact Form</h3>
    </div>
  </div>
  <div className="modal-body ">
    <div className="contact-form">
      <form action="">
        <div className="col-md-6">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Name"
              name="name"
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Email"
              name="email"
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <input
              type="tel"
              className="form-control"
              id="phone"
              placeholder="Phone"
              name="Phone"
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="subject"
              placeholder="Subject"
              name="subject"
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <select className="form-control">
              <option>Select Category</option>
              <option>Bahria Cinema</option>
              <option>Emporium Cinema</option>
            </select>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <textarea
              className="form-control"
              placeholder="message"
              defaultValue={""}
            />
          </div>
        </div>
        <div className="col-md-12">
          <center>
            <div className="form-group">
              <button className="btn btn-dark">Submit</button>
              <div className="submitting" />
            </div>
          </center>
        </div>
      </form>
    </div>
  </div></div>
</center>
    </div>
  );
}

export default ContactUs;
