import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import http from "../http/http";

const Create = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
    });
    const { name, email, password } = user;

    const handleChange = (e) => {
        setUser((ps) => ({
            ...ps,
            [e.target.id]: e.target.value,
        }));
    };
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        http.post("/users", user).then((res) => {
            navigate("/");
        });
    };

    return (
        <div>
            <h1 className="text-center">Create New User</h1>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={handleChange}
                    label="Name"
                    placeholder="Enter Name"
                    className="border-2 border-black p-2 rounded-lg m-4 w-1/2"
                />
                <br />
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={handleChange}
                    label="email"
                    placeholder="Enter Name"
                    className="border-2 border-black p-2 rounded-lg m-4 w-1/2"
                />
                <br />
                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={handleChange}
                    label="password"
                    placeholder="Enter Name"
                    className="border-2 border-black p-2 rounded-lg m-4 w-1/2"
                />
                <br></br>
                <Button variant="primary" type="submit">
                    Create User
                </Button>
            </form>
        </div>
    );
};

export default Create;
