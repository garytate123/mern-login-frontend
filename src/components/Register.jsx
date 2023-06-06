import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = (props) => {
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        error: null
    });

    const {name, email, password, error} = data;

    const handleChange = e => {
        setData({...data, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setData({...data, error: null});
            await axios.post(
                '/auth/register', 
                {name, email, password}, 
                {
                headers: {
                    'Content-Type': "application/json",
                },
            }
            );
            props.history.push("/login")
        } catch (err) {
            setData({...Link, error: err.response.data.error})
            
        }
    }


    return (
        <div class="container">
            <br />
            <br />
            <h1>Register</h1>
            <br />
                <form>
                    <div class="form-group">
                        <lable htmlFor="name">Name</lable>
                        <input
                            class="form-control" 
                            id="name"
                            type="name" 
                            name="name"
                            placeholder="Your name" 
                            value={name}
                            onChange={handleChange}
                            aria-describedby="emailHelp"
                        />
                    </div>
                    <br />
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
                        <button onClick={handleSubmit} type="submit" class="btn btn-primary">Register</button>
                    </div>
                    <br />
                    <p>
                        Already a user? <Link to="/login">Login</Link>
                    </p>
                </form>
            </div>
    )
}

export default Register
