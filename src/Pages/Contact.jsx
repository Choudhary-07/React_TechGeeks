import React from "react";
import { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    Name: "",
    Phone: "",
    Email: "",
    Message: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault()
    alert(
      `My Name is ${data.Name}. My phone Number and Email is  ${data.Phone} & ${data.Email}. My Message is ${data.Message}`
    );
  };

  return (
    <>
      <div className="my-2">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit} >
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Full Name
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                name="Name"
                value={data.Name}
                onChange={InputEvent}
                required
                placeholder="Enter Your Name"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Phone
              </label>
              <input
                type="tel"
                class="form-control"
                id="exampleFormControlInput1"
                name="Phone"
                value={data.Phone}
                onChange={InputEvent}
                required
                placeholder="Phone No"
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
                name="Email"
                value={data.Email}
                onChange={InputEvent}
                required
                placeholder="name@example.com"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Message
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                name="Message"
                value={data.Message}
                onChange={InputEvent}
                required
                rows="3"
              ></textarea>
            </div>
            <div class="col-12">
              <button class="btn btn-outline-primary bottom" type="submit">
                Submit form
              </button>
            </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
