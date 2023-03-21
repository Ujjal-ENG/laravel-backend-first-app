import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import http from "../http/http";

const Edit = () => {
    const data = useLocation();

    const [user, setUser] = useState(data.state);
    const { name, email, id } = user;

    const handleChange = (e) => {
        setUser((ps) => ({
            ...ps,
            [e.target.id]: e.target.value,
        }));
    };
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        await http.put("/users/", id, user).then((res) => {
            navigate("/");
        });
        console.log(user);
    };
    return (
        <div>
            <h1 className="text-center">Update Existing User</h1>
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

                <br></br>
                <Button variant="primary" type="submit">
                    Update User
                </Button>
            </form>
        </div>
    );
};

export default Edit;
