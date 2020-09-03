import React, { useState, useEffect } from 'react';
import { apiUrl } from '../config';
import { baseUrl, imageUrl } from '../config';

import Bird from '../images/Bird';

// const test = () => async () => {
//     const res = await fetch(`localhost:5000/auth/login/`)
//     console.log(res)
// }

const tryLogin = (email, password) => async () => {
    const response = await fetch(`${imageUrl}/auth/login/`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
        console.log("inside tryLogin: Success")
        // const { token } = await response.json();
        // window.localStorage.setItem(TOKEN_KEY, token);
        // dispatch(setToken(token));
    } else {
        console.log("inside tryLogin: Response failure")
    }
};


const Login = (props) => {
    const [email, setEmail] = useState('demo@example.com');
    const [password, setPassword] = useState('password');
    //const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("reached HandleSubmit: ", email, password)
    };

    useEffect(() => {
        fetch('http://localhost:5000/auth/login/')
        //tryLogin()
    }, [email])


    const updateEmail = e => setEmail(e.target.value);
    const updatePassword = e => setPassword(e.target.value);

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
                        <button className="login-button" type="submit">Log in</button>
                        <a className="login-footer" href="/sign_up">Sign up for Chatter</a>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login

