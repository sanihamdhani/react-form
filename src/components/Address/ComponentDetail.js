import Container from "react-bootstrap/esm/Container";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Table } from "react-bootstrap";
import "./style.css";

const ComponentDetail = () => {
  const [person, setPerson] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://io.etter.cloud/v4/select_id/token/633aac2f99b6c11c094bd474/project/address_book/collection/address_collection/appid/633b914699b6c11c094bd489/id/${id}`
      )
      .then((res) => {
        setPerson(res.data);
        console.log(res.data);
      });
  }, []);

  return (
    <div>
      <Container className="mt-5">
        {person.map((per, index) => {
          return (
            <Table striped bordered hover key={index}>
              <thead>
                <tr>
                  <th>#</th>
                  <th>NIK</th>
                  <th>Nama</th>
                  <th>Email</th>
                  <th>Gender</th>
                  <th>Alamat</th>
                  <th>Divisi</th>
                  <th>Birthday</th>
                </tr>
              </thead>
              <tbody>
                <tr key={index}>
                  <td>{per._id}</td>
                  <td>{per.nik}</td>
                  <td>{per.name}</td>
                  <td>{per.email}</td>
                  <td>{per.gender}</td>
                  <td>{per.alamat}</td>
                  <td>{per.divisi}</td>
                  <td>{per.birthday}</td>
                </tr>
              </tbody>
            </Table>
          );
        })}
      </Container>
    </div>
  );
};

export default ComponentDetail;
