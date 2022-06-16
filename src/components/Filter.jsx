import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import Listuser from "./Listuser";

export const Filter = ({ users }) => {
  // menampung inputan yang kita masukan ke dalam form
  const [search, setNewSearch] = useState("");

  // merubah ketikan yang kita masukan ke dalam form input
  const handleSearchChange = (e) => {
    setNewSearch(e.target.value);
  };

  // untuk memfilter dan membuat value yang ada di dalam API menjadi huruf kecil semua
  const filtered = !search ? users : users.filter((user) => user.first_name.toLowerCase().includes(search.toLowerCase()) || user.email.toLowerCase().includes(search.toLowerCase()));

  return (
    <>
      <Container className="d-flex justify-content-center">
        <Form>
          <Form.Group className="mb-3 mt-5">
            <Form.Control type="text" placeholder="Filters user by name or email" style={{ width: "250px" }} disabled={!users ? true : false} value={search} onChange={handleSearchChange} />
          </Form.Group>
        </Form>
      </Container>
      <Listuser data={filtered} />
    </>
  );
};
