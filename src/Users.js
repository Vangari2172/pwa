import React, { useState, useEffect, Fragment } from "react";
import { Table } from "react-bootstrap";

const Users = () => {
  const [data, setData] = useState([]);
  const [mode, setMode] = useState("online");

  useEffect(() => {
    let url = "https://jsonplaceholder.typicode.com/users";

    fetch(url)
      ?.then((response) => {
        response.json()?.then((result) => {
          setData(result);
          localStorage.setItem("users", JSON.stringify(result));
        });
      })
      .catch((err) => {
        let collection = localStorage.getItem("users");
        setData(JSON.parse(collection));
        setMode("offline");
      });
  }, []);

  return (
    <Fragment>
      <div>
        {mode === "offline" ? (
          <div class="alert alert-warning" role="alert">
            You are in offline mode or issue with some connection
          </div>
        ) : null}
      </div>
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
    </Fragment>
  );
};

export default Users;
