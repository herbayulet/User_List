import React from "react";
import { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import { Filter } from "./components/Filter";
import { Container } from "react-bootstrap";
import axios from "axios";

const App = () => {
  const [users, setUser] = useState([]);
  const API = "https://reqres.in/api/users";

  const getUser = () => {
    axios.get(API).then((response) => {
      console.log(response, "ini response");
      const allUser = response.data.data;
      console.log(allUser, "ini all user");
      setUser(allUser);
    });
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div style={{ width: "1200px", height: "800px" }}>
      <Navigation />
      <Container className="border border-primary">
        <Filter users={users} />
      </Container>
    </div>
  );
};

export default App;
