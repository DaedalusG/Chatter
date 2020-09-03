import React, { useState } from "react";
import "../styles/signup.css";
import { imageUrl } from "../config";

const SignUp = () => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirm, setPasswordConfirm] = useState();
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [zipcode, setZipcode] = useState();

  const updateUsername = e => setUsername(e.target.value);
  const updateEmail = e => setEmail(e.target.value);
  const updatePassword = e => setPassword(e.target.value);
  const updatePasswordConfirm = e => setPasswordConfirm(e.target.value);
  const updateFirstname = e => setFirstname(e.target.value);
  const updateLastname = e => setLastname(e.target.value);
  const updateZipcode = e => setZipcode(e.target.value);


  const testSignUp = async () => {
    const testUser = {
      username: "TesterThree",
      email: "testThree@test.com",
      password: "password",
      firstname: "Testi",
      lastname: "Person",
      zipcode: "37409",
    };

    const response = await fetch(`${imageUrl}/auth/signup`, {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(testUser),
    });
    if (response.ok) {
      console.log("Response Success");
      const res = await response.json();
      if (res.auth_token === undefined) {
        // Need to handle this error with browser message to user
        console.log("Bad Auth Token Generated");
        return;
      } else {
        window.localStorage.setItem("auth_token", res.auth_token);
        // Add redirect here
      }
    } else {
      console.log("Response Failure");
    }
  };


  return (
    <div className="signup-pop--container">
      <div className="signup-head--container">
        <div className="signup-head--topElements">
          <div className="signup-head__logo">
            <p>Logo</p>
          </div>
        </div>
        <div className="signup-head__text">
          <p>Create your account</p>
        </div>
      </div>
      <div className="signup-form--container">
        <div className="signup-form__account-fields">
          <input
            className="signup-form__username"
            name="username"
            value={username}
            placeholder="User Name"
          />
          <input
            className="signup-form__email"
            name="email"
            value={email}
            placeholder="Email"
            type="email"
          />
        </div>
        <div className="signup-form__text">
          <p>Please provide a password</p>
        </div>
        <div className="signup-form__password-fields">
          <input
            className="signup-form__password"
            name="password"
            value={password}
            placeholder="Password"
            type="password"
          />
          <input
            className="signup-from__password-confirm"
            name="password-confirm"
            value={passwordConfirm}
            placeholder="Confirm Password"
            type="password"
          />
        </div>
        <div className="signup-form__text">
          <p>Please provide your information</p>
        </div>
        <div className="signup-form__info-fields">
          <input
            className="signup-form__firstname"
            name="firstname"
            value={firstname}
            placeholder="First Name"
          />
          <input
            className="signup-form__lastname"
            name="lastname"
            value={lastname}
            placeholder="Last Name"
          />
          <input
            className="signup-form__zipcode"
            name="zipcode"
            value={zipcode}
            placeholder="Zip Code"
          />
        </div>
        <div className="signup-form__submit">
          <button
            className="signup-form__submit">
          Submit</button>
          <button
            className="signup-form__testButton"
            onClick={testSignUp}>
          Sign Up Test Func</button>
        </div>

      </div>
    </div>
  );
};

export default SignUp;
