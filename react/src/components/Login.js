import React, { useState } from 'react';
import { apiUrl } from '../config';

const tryLogin = (email, password) => async () => {
    const response = await fetch(`${apiUrl}/auth/login`, {
        method: 'put',
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
        tryLogin(email, password);
        //dispatch(login(email, password));
    };

    const updateEmail = e => setEmail(e.target.value);
    const updatePassword = e => setPassword(e.target.value);

    return (
        <div className='login-root'>
            <div className='login-container'>
                <div className='left-block'>
                    <p>Left Info Block</p>
                </div>
                <div className='right-block'>
                    <p>Right Block with Form Functions</p>
                    <div className="">
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                placeholder="Email"
                                value={email}
                                onChange={updateEmail} />
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={updatePassword} />
                            <button type="submit">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Login

