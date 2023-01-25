import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="container pb-4">
        <div className="row">
          <div className="col-12 text-center py-1 my-4">
            <h1>Have Some Questions?</h1>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-5 d-flex justify-content-center">
            <img
              src="assets/img7.webP"
              alt="contactUs"
              height="400px"
              width="500px"
            />
          </div>
          <div className="col md-6 px-4">
            <form>
              <div class="mb-4">
                <label for="exampleFormControlInput1" class="form-label">
                  Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Bill Gate"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Example textarea
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-outline-primary">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
