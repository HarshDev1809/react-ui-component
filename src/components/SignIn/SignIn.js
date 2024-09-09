import React from 'react';
import { useState } from "react";
import "./SignIn.css";
import { Helmet } from "react-helmet";

function SignIn(props) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function changeUserName(e) {
    setUserName(e.target.value);
    props.setUserName(e.target.value);
  }

  function changePassword(e) {
    setPassword(e.target.value);
    props.setPassword(e.target.value);
  }

  const handleSignIn = (e) => {
    e.preventDefault();
    props.signIn();
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="main-div">
      <Helmet>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        />
      </Helmet>
      <div className="sign-in-div">
        <div className="heading-div">
          {props.heading ? <h1>{props.heading}</h1> : <h1>Welcome!</h1>}
          <p>Sign in to continue</p>
        </div>
        <div className="form-div">
          <form className="input-form" onSubmit={handleSignIn}>
            <input
              className="sign-in-input"
              type="text"
              onChange={changeUserName}
              value={userName}
              placeholder="Username"
            />
            <div className="password-input-container">
              <input
                className="password-input"
                type={showPassword ? "text" : "password"}
                onChange={changePassword}
                value={password}
                placeholder="Password"
              />
              <button
                type="button"
                className="show-password-btn"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <span className="material-symbols-outlined">visibility</span>
                ) : (
                  <span className="material-symbols-outlined">visibility_off</span>
                )}
              </button>
            </div>
            <button className="sign-in-btn" type="submit">
              Sign in
            </button>
            <div className="error-div">{errorMessage}</div>
            {props.handleSignUp && (
              <div className="footer-div">
                <span className="hover" onClick={props.handleSignUp}>
                  New User? Sign up
                </span>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;