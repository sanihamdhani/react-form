import { Button, Form, Container } from "react-bootstrap";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./style.css";

const ComponentAdd = () => {
  const history = useHistory();
  const [NewPerson, setNewPerson] = useState({
    nik: "",
    name: "",
    email: "",
    gender: "laki-laki",
    alamat: "",
    divisi: "IT",
    birthday: "",
  });

  const handleChange = (event) => {
    setNewPerson({
      ...NewPerson,
      [event.target.name]: event.target.value,
    });
    console.log(NewPerson);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let Data = {
      token: "633aac2f99b6c11c094bd474",
      project: "address_book",
      collection: "address_collection",
      appid: "633b914699b6c11c094bd489",
      nik: NewPerson.nik,
      name: NewPerson.name,
      email: NewPerson.email,
      gender: NewPerson.gender,
      divisi: NewPerson.divisi,
      alamat: NewPerson.alamat,
      birthday: NewPerson.birthday,
    };

    axios.post(`https://io.etter.cloud/v4/insert/`, Data).then((res) => {
      history.push("/tableuser");
    });
  };

  return (
    <div>
      <Container className="mt-5">
        <h1>Form AddUser</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label></Form.Label>
            <Form.Control
              placeholder="NIK"
              type="text"
              value={NewPerson.nik}
              onChange={handleChange}
              name="nik"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label></Form.Label>
            <Form.Control
              placeholder="Nama"
              type="text"
              value={NewPerson.name}
              onChange={handleChange}
              name="name"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label></Form.Label>
            <Form.Control
              placeholder="Email"
              type="text"
              value={NewPerson.email}
              onChange={handleChange}
              name="email"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label></Form.Label>

            <Form.Select
              value={NewPerson.gender}
              onChange={handleChange}
              name="gender"
            >
              <option value="laki-laki">Laki-Laki</option>
              <option value="perempuan">Perempuan</option>
            </Form.Select>
          </Form.Group>

          <Form.Group>
            <Form.Label></Form.Label>
            <Form.Control
              placeholder="Alamat"
              type="text"
              value={NewPerson.alamat}
              onChange={handleChange}
              name="alamat"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label></Form.Label>

            <Form.Select
              value={NewPerson.divisi}
              onChange={handleChange}
              name="divisi"
            >
              <option value="IT">IT</option>
              <option value="Desain">Desain</option>
            </Form.Select>
          </Form.Group>
          <Form.Group>
            <Form.Label></Form.Label>
            <Form.Control
              placeholder="Birthday"
              type="text"
              value={NewPerson.birthday}
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

export default ComponentAdd;

// useEffect(() => {
//   axios.get(`http://localhost:3000/person`).then((res) => {
//     setNewPerson(res.data);
//     console.log(res.data);
//   });
// }, []);
