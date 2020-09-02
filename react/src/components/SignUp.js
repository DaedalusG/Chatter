import React from "react";
import "../styles/signup.css";

const SignUp = () => {

  const monthOptions = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]

  // const dateOptions = () => {
  //   for (i=1; i<=31; i++) {
  //     return (
  //       <option value={i}>{i}</option>
  //     )
  //   }
  // }

  // const yearOptions = () => {
  //   currentYear = new  Date().getFullYear();
  //   for (i=1900; i<=currentYear; i++ ) {
  //     return (
  //       <option value={i}>{i}</option>
  //     )
  //   }
  // }

  return (
    <div className="signup-pop--container">
      <div>
        <p>Logo Space</p>
      </div>
      <h3>Create your account</h3>
      <div className="signup-form--container">
        <input
          className="signup-form__username"
          name="username"
          placeholder="Name" />
        <input
          className="signup-form__email"
          name="email"
          placeholder="Email" />
        <div className="signup-form__dob--container">
          <h6>Date of birth</h6>
          <p>This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</p>
          <div className="signup-form__dob">
            <div className="signup-form__dob--month">
              <select>
                {monthOptions.map((month) =>
                  <option value={month}>{month}</option>
                  )}
              </select>
            </div>
            <div className="signup-form__dob--date">
              <select>
                {/* {dateOptions()} */}
                {/* Working Placeholder */}
                <option value="32">32</option>
                <option value="33">33</option>
              </select>
            </div>
            <div className="signup-form__dob--year">
              <select>
                {/* {yearOptions()} */}
                {/* Working Placeholder */}
                <option value="1812">1812</option>
                <option value="1813">1813</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
