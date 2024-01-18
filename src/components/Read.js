import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState([]);

  function getData() {
    axios
      .get("https://659d149c633f9aee79088e38.mockapi.io/api/crud/posts")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  }
  function handleDelete(id) {
    axios
      .delete(
        `https://659d149c633f9aee79088e38.mockapi.io/api/crud/posts/${id}`
      )
      .then(() => {
        getData();
      });
  }

  const setToLocalStorage = (id, name, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h2>Read Operation</h2>
      <Link to={"/"}>
        <button className="btn-primary">Add Employee Data</button>
      </Link>
      <table className="table">
        <tbody>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th colSpan={2}>Actions</th>
          </tr>
          {data.map((e, index) => {
            return (
              <tr key={index}>
                <th scope="row">{e.id}</th>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>
                  <Link to={"/update"}>
                    <button
                      className="btn-success"
                      onClick={() => setToLocalStorage(e.id, e.name, e.email)}
                    >
                      Edit
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    className="btn-danger"
                    onClick={() => handleDelete(e.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Read;
