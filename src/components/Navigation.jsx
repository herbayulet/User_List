import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Navigation() {
  return (
    <>
      <Navbar bg="light" variant="light" className="mb-4 ms-3">
        <Container>
          <Navbar.Brand href="#home">Userlist</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
