import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = (props) => {
    const [data, setData] = useState({
        email: "",
        password: "",
        error: null
    });

    const {email, password, error} = data;

    const handleChange = e => {
        setData({...data, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setData({...data, error: null});
            const res = await axios.post(
                '/auth/login', 
                {email, password}, 
                {
                headers: {
                    'Content-Type': "application/json",
                },
            }
            );
            localStorage.setItem('toekn', res.date.token)
            props.history.push("/")
        } catch (err) {
            setData({...data, error: err.response.data.error});
        }
    }


    return (
        <div class="container">
            <br />
            <br />
            <h1>Login</h1>
            <br />
                <form>
                    <div class="form-group">
                        <lable htmlFor="email">Email</lable>
                        <input
                            class="form-control" 
                            id="email"
                            type="email" 
                            name="email"
                            placeholder="Your email" 
                            value={email} 
                            onChange={handleChange}
                        />
                    </div>
                    <br />
                    <div class="form-group">
                        <lable htmlFor="password">Password</lable>
                        <input
                            class="form-control" 
                            id="password"
                            type="password" 
                            name="password"
                            placeholder="Password" 
                            value={password}
                            onChange={handleChange}
                        />
                    </div>
                    <br />
                    {error ? <p className="text-danger">{error}</p> : null}
                    <div>
                        <button onClick={handleSubmit} type="submit" class="btn btn-primary">Login</button>
                    </div>
                    <br />
                    <p>
                        Not yet registered? <Link to="/register">Register</Link>
                    </p>
                </form>
            </div>
    )
}

export default Login
