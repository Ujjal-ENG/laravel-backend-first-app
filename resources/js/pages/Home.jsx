import React, { useEffect, useState } from "react";
import http from "../http/http";
import Table from "react-bootstrap/Table";

const Home = () => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        fetchUser();
    }, []);

    const fetchUser = async () => {
        const fetchData = await http.get("/users");

        setUser(fetchData.data);
    };
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Sno.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {user &&
                        user.map((el) => {
                            const { email, name, id } = el;
                            return (
                                <tr key={id}>
                                    <td>{id}</td>
                                    <td>{name}</td>
                                    <td>{email}</td>
                                    <td>Buttons</td>
                                </tr>
                            );
                        })}
                </tbody>
            </Table>
        </div>
    );
};

export default Home;
