import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

import "./style.css";

const ComponentEdit = () => {
  const { id } = useParams();
  const history = useHistory();
  const [list, setList] = useState({
    nik: "",
    name: "",
    email: "",
    gender: "laki-laki",
    alamat: "",
    divisi: "IT",
    birthday: "",
  });

  useEffect(() => {
    axios
      .get(
        `https://io.etter.cloud/v4/select_id/token/633aac2f99b6c11c094bd474/project/address_book/collection/address_collection/appid/633b914699b6c11c094bd489/id/${id}`
      )
      .then((res) => {
        setList({
          nik: res.data[0].nik,
          name: res.data[0].name,
          email: res.data[0].email,
          gender: res.data[0].gender,
          divisi: res.data[0].divisi,
          alamat: res.data[0].alamat,
          birthday: res.data[0].birthday,
        });
      });
    console.log(list);
  }, []);

  const handleChange = (event) => {
    setList({
      ...list,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let Data = {
      token: "633aac2f99b6c11c094bd474",
      project: "address_book",
      collection: "address_collection",
      appid: "633b914699b6c11c094bd489",
      id: id,
      update_field: "nik~name~email~gender~divisi~alamat~birthday",
      update_value:
        list.nik +
        "~" +
        list.name +
        "~" +
        list.email +
        "~" +
        list.gender +
        "~" +
        list.divisi +
        "~" +
        list.alamat +
        "~" +
        list.birthday,
    };
    // merubah data yag telah di input
    axios
      .post(`https://io.etter.cloud/v4/update_id/${id}`, Data)
      .then((res) => {
        history.push("/tableuser");
        console.log(res);
      });
  };

  return (
    <div>
      <Container className="mt-5">
        <h1>Form Edit</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label></Form.Label>
            <Form.Control
              placeholder="NIK"
              type="text"
              value={list.nik}
              onChange={handleChange}
              name="nik"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label></Form.Label>
            <Form.Control
              placeholder="Nama"
              type="text"
              value={list.name}
              onChange={handleChange}
              name="name"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label></Form.Label>
            <Form.Control
              placeholder="Email"
              type="text"
              value={list.email}
              onChange={handleChange}
              name="email"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label></Form.Label>

            <Form.Select
              value={list.gender}
              onChange={handleChange}
              name="gender"
            >
              <option value="laki">Laki-Laki</option>
              <option value="perempuan">Perempuan</option>
            </Form.Select>
          </Form.Group>

          <Form.Group>
            <Form.Label></Form.Label>
            <Form.Control
              placeholder="Alamat"
              type="text"
              value={list.alamat}
              onChange={handleChange}
              name="alamat"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label></Form.Label>

            <Form.Select
              value={list.divisi}
              onChange={handleChange}
              name="divisi"
            >
              <option value="it">IT</option>
              <option value="desain">Desain</option>
            </Form.Select>
          </Form.Group>
          <Form.Group>
            <Form.Label></Form.Label>
            <Form.Control
              placeholder="Birthday"
              type="text"
              value={list.birthday}
              onChange={handleChange}
              name="birthday"
            />
          </Form.Group>

          <Form.Group>
            <br></br>
            <Button variant="success" type="submit">
              Submit
            </Button>
          </Form.Group>
        </Form>
      </Container>
    </div>
  );
};

export default ComponentEdit;
