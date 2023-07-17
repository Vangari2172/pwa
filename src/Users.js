import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";

const Users = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    let url = "https://jsonplaceholder.typicode.com/users";

    fetch(url)?.then((response) => {
      response.json()?.then((result) => setData(result));
    });
  }, []);

  console.log("data", data);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>User Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((item, i) => {
          return (
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.username}</td>
              <td>@{item.email}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default Users;
