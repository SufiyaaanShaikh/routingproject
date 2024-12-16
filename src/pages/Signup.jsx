import React, { useState } from "react";
import Header from "../common/Header";

function Signup() {
  let [uname, setUname] = useState("");
  let [email, setEmail] = useState("");
  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(uname, email);
  };
  let getUname = (event) => {
    setUname(event.target.value);
  };
  return (
    <div>
      <Header />
      <form onSubmit={handleSubmit} id="signupForm" className="flex w-100">
        <div className="input-block">
          <input
            onChange={(event) => setUname(event.target.value)}
            id="name"
            name="name"
            type="text"
            placeholder="Full Name"
            className="fw-500 f-16"
            autoFocus
            autoComplete="off"
            value={uname}
          />
          <p className="formErr para-f"></p>
        </div>

        <div className="input-block">
          <input
            onChange={(event) => setEmail(event.target.value)}
            id="email"
            name="email"
            type="email"
            placeholder="Email Address"
            className="fw-500 f-16"
            autoComplete="off"
            value={email}
          />
          <p className="formErr para-f"></p>
        </div>

        <div className="input-block">
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            className="fw-500 f-16"
            autoComplete="off"
          />
          <p className="formErr para-f"></p>
        </div>

        <div className="input-block">
          <input
            id="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            className="fw-500 f-16"
            autoComplete="off"
          />
          <p className="formErr para-f"></p>
        </div>
        <button className="formBtn fw-700" type="submit">
          Sign Up
        </button>
        <p className="acc-para fw-500 f-16">
          Already have an account?
          <a href="login.html" className="fw-500">
            Sign in to account
          </a>
        </p>
      </form>
    </div>
  );
}

export default Signup;
