import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Button, Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import "./style.css";
// import Aunteticated from "./Aunteticated";
// import { UserProvider } from "../context/User";

const ComponentTable = () => {
  const [person, setPerson] = useState([]);
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get(
        `https://io.etter.cloud/v4/select_all/token/633aac2f99b6c11c094bd474/project/address_book/collection/address_collection/appid/633b914699b6c11c094bd489/`
      )
      .then((res) => {
        setPerson(res.data);
        console.log(res.data);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(
        `https://io.etter.cloud/v4/remove_id/token/633aac2f99b6c11c094bd474/project/address_book/collection/address_collection/appid/633b914699b6c11c094bd489/id/${id}`
      )
      .then((res) => {
        getData();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Container>
        <h1>TABEL USER</h1>
        <br></br>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2 mb-3"
            aria-label="Search"
            onChange={(e) => setSearchName(e.target.value)}
          />
        </Form>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nama</th>
              <th>Divisi</th>
              <th>Aksi</th>
            </tr>
          </thead>

          {person
            .filter((src) => src.name.toLowerCase().includes(searchName))
            .map((user, index) => {
              return (
                <tbody key={index}>
                  <tr>
                    <td>{user.name}</td>
                    <td>{user.divisi}</td>

                    <td>
                      <Link
                        className="btn btn-warning m-2 text-light"
                        to={`/edituser/${user._id}`}
                      >
                        Edit
                      </Link>
                      <Button
                        className="btn-danger"
                        onClick={() => handleDelete(user._id)}
                      >
                        Delete
                      </Button>
                      <Link
                        className="btn btn-info m-2 bi bi-eye text-light"
                        to={`/detailuser/${user._id}`}
                      >
                        Detail
                      </Link>
                    </td>
                  </tr>
                </tbody>
              );
            })}
        </Table>
      </Container>
      {/* <UserProvider>
        <Aunteticated />
      </UserProvider> */}
    </div>
  );
};

export default ComponentTable;
