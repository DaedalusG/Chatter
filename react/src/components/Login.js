import React, { useState, useEffect } from "react";
import { imageUrl } from "../config";
import SignUp from "./SignUp";
import Bird from '../images/Bird';


const Login = (props) => {
    const [signUpModal, setSignUpModal] = useState(false);
    const [email, setEmail] = useState("Batman@BatSignal.com");
    const [password, setPassword] = useState("password");

    const showSignUpModal = () => setSignUpModal(true);
    const hideSignUpModal = () => setSignUpModal(false);

    const updateEmail = (e) => setEmail(e.target.value);
    const updatePassword = (e) => setPassword(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`${imageUrl}/auth/login`, {
            method: "POST",
            mode: "cors",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: `${email}`, password: `${password}` }),
        });

        if (response.ok) {
            console.log("inside tryLogin: Success");
        } else {
            console.log("inside tryLogin: Response failure");
        }
        const res = await response.json()
        console.log(res)
        if (res.auth_token != undefined) {
            window.localStorage.setItem('auth_token', res.auth_token)
            window.location.reload()
        }

    };


    return (
        <div className='login-container'>
            <div className='login-block'>
                <div><Bird></Bird></div>
                <div className="login-block-header">Log in to Chatter</div>
                <div className="login">
                    <form className="login-form" onSubmit={handleSubmit}>
                        <input
                            className="login-input-field"
                            type="text"
                            placeholder="Email"
                            value={email}
                            onChange={updateEmail} />
                        <input
                            className="login-input-field"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={updatePassword} />
                        <button
                            className="login-button"

                            type="submit">
                        Log in</button>
                        <div className="signup--container">
                            <SignUpModal
                                show={signUpModal}
                                handleClose={hideSignUpModal} />
                            <div className="signup__controls--container">
                                <button
                                    className="login-button"
                                    onClick={showSignUpModal}>
                                Sign Up</button>

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

const SignUpModal = ({ handleClose, show }) => {
    const showHideClassName = show ? "modal is-active" : "modal";

    return (
        <>
            <div className={showHideClassName}>
                <div className="modal-background"></div>
                <div className="modal-content">

                    <div className="signup__closeButton--container">
                        <button
                            onClick={handleClose}
                            className="modal-close">
                        Close</button>
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

export default Login;
