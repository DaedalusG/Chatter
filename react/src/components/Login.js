import React, { useState } from "react";
import { apiUrl } from "../config";
import SignUp from "./SignUp";

const SignUpModal = ({ handleClose, show }) => {
  const showHideClassName = show ? "modal is-active" : "modal";

  return (
    <>
      <div className={showHideClassName}>
        <div className="signup-background">
          <div className="signup__closeButton--container">
            <button onClick={handleClose} className="signup__closeButton">
              Close
            </button>
          </div>
          <div className="signup-content--container">
            <div className="signup-content">
              <SignUp />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const tryLogin = (email, password) => async () => {
  const response = await fetch(`${apiUrl}/auth/login`, {
    method: "put",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (response.ok) {
    console.log("inside tryLogin: Success");
    // const { token } = await response.json();
    // window.localStorage.setItem(TOKEN_KEY, token);
    // dispatch(setToken(token));
  } else {
    console.log("inside tryLogin: Response failure");
  }
};

const Login = (props) => {
  const [signUpModal, setSignUpModal] = useState(false);
  const [email, setEmail] = useState("demo@example.com");
  const [password, setPassword] = useState("password");

  const showSignUpModal = () => setSignUpModal(true);
  const hideSignUpModal = () => setSignUpModal(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("reached HandleSubmit: ", email, password);
    tryLogin(email, password);
    //dispatch(login(email, password));
  };

  const updateEmail = (e) => setEmail(e.target.value);
  const updatePassword = (e) => setPassword(e.target.value);

  return (
    <div className="login-root">
      <div className="login-container">
        <div className="left-block">
          <p>Left Info Block</p>
        </div>
        <div className="right-block">
          <p>Right Block with Form Functions</p>
          <div className="login--container">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={updateEmail}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={updatePassword}
              />
              <button type="submit">Login</button>
            </form>
          </div>
          <div className="signup--container">
            <SignUpModal show={signUpModal} handleClose={hideSignUpModal} />
            <div className="signup__controls--container">
              <button className="button" onClick={showSignUpModal}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
