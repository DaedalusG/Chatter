import React, { useState, useEffect } from "react";
import { imageUrl } from "../config";
import SignUp from "./SignUp";
import CloseButton from '../images/CloseButton';
import Bird from '../images/Bird';
import '../styles/login.css'


const Login = (props) => {
    const [signUpModal, setSignUpModal] = useState(false);
    const [email, setEmail] = useState("lisa@aa.com");
    const [password, setPassword] = useState("password");

    const showSignUpModal = e => {
        e.preventDefault();
        setSignUpModal(true)
    };
    const hideSignUpModal = e => {
        e.preventDefault();
        setSignUpModal(false)
    };

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

    const loginDemoUser = async (e) => {
        return
    }


    return (
        <div className='login-container'>
            <div className="login-main--container">
                <div className="login-main__left">
                    <div className="login-birdSVG--background">
                        <Bird/>
                    </div>
                </div>
                <div className="login-main__right">
                    <div className="login-bar">
                        <div className="login-bar__form">
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
                                <SignUpModal
                                    show={signUpModal}
                                    handleClose={hideSignUpModal} />
                            <div className="login-bar__button--container">
                                <div
                                    className="login-bar__button"
                                    onClick={handleSubmit}>
                                    <span>Log in</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="login-subBar__span--container">
                        <span>Forgot password?</span>
                    </div>
                    <div className='login-block'>
                        <div className="login-block__logo">
                            <Bird/>
                        </div>
                        <div className="login-block__h2">
                            <span>See what's happing in the world right now</span>
                        </div>
                        <div className="login-block__h5">
                            <span>Join Chatter today.</span>
                        </div>
                        <div className="login-block__signup--container">
                            <div
                                className="login-block__signup--button"
                                onClick={showSignUpModal}>
                                <span>Sign up</span>
                            </div>
                        </div>
                        <div className="login-block__demo--container">
                            <div
                                className="login-block__demo--button"
                                onClick={loginDemoUser}>
                                <span>Log in as Demo User</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="login-footer">

            </div>
        </div>
    )
}

const SignUpModal = ({ handleClose, show }) => {
    const showHideClassName = show ? "modal-showing" : "modal-hiding";

    return (
        <>
            <div className={showHideClassName}>
                <div className="modal-background"></div>
                <div className="modal-content">

                    <div className="signup__closeButton--container">
                        <button
                            onClick={handleClose}
                            className="modal-close">
                            close</button>
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
