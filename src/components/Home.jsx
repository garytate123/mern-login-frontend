import React, {useState, useEffect} from "react";
import axios from "axios";

const Home = (props) => {
    const [user, setUser] = useState(null);

    const getUser = async () => {
        const res = await axios.get("/auth", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        setUser(res.data);
    };

    useEffect(() => {
        getUser();
    }, []);

    const logout = () => {
        localStorage.removeItem('token')
        props.history.push("/login")
    };

    if (!localStorage.getItem('token')) {
        props.history.push("/login")
    };

    return (
        <>
            <h1>This is the Home page</h1>
            <p className="lead">Welcome {user && user.name}</p>
            <button className="btn btn-danger" onClick={logout}>Logout</button>
        </>
    )
}

export default Home