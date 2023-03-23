import React, { useEffect, useState } from "react";
import http from "../http/http";
import Table from "react-bootstrap/Table";
import Alert from "react-bootstrap/Alert";
import { Link } from "react-router-dom";
const Home = () => {
    const [user, setUser] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        fetchUser();
    }, []);

    const fetchUser = async () => {
        setIsLoading(true);
        const fetchData = await http.get("/users");

        setUser(fetchData.data);
        setIsLoading(false);
    };
    return (
        <>
            {isLoading && (
                <Alert key="danger" variant="danger">
                    Data is Loading ....
                </Alert>
            )}
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
                    {user.map((el) => {
                        const { email, name, id } = el;
                        return (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>{email}</td>
                                <td>
                                    <Link to="/edit" state={el}>
                                        Edit
                                    </Link>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </>
    );
};

export default Home;
