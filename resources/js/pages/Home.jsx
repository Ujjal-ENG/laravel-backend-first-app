import React, { useEffect, useState } from "react";
import http from "../http/http";
import Table from "react-bootstrap/Table";
import Alert from "react-bootstrap/Alert";
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
                {isLoading ? (
                    <div>
                        <Alert key="danger" variant="danger">
                            Data is Loading ....
                        </Alert>
                    </div>
                ) : (
                    <tbody>
                        {user.map((el) => {
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
                )}
            </Table>
        </div>
    );
};

export default Home;
