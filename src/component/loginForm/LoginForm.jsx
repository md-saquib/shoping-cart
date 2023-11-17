import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userlogin } from '../../redux/ActionCreater/loginAction/LoginAction';
import './loginform.css'; // Import your CSS file

function LoginForm() {

    const dispatch = useDispatch();

    const [userinfo, setuserinfo] = useState({
        username: '',
        password: ''
    })

   const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(userlogin(userinfo))
    };

    return (
        <div className="login-form-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div className="form-group">
                    <label htmlFor="username">Email</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        onChange={(e) => setuserinfo({ ...userinfo, username: e.target.value })}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        onChange={(e) => setuserinfo({ ...userinfo, password: e.target.value })}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginForm;
