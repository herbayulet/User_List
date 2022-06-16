import React from "react";
import { Row, Col, Container } from "react-bootstrap";

const Listuser = ({ data }) => {
  //   console.log(users, "ini di halaman list-user");
  return (
    <>
      <Container className="mt-5 dp-flex">
        <Row>
          {/* looping data dari GET API */}
          {data.map((dataBaru, i) => {
            return (
              <Col md={4} mt="2" key={i}>
                <div>
                  <div className="text-center" style={{ marginTop: "5rem" }}>
                    <img src={dataBaru.avatar} alt="" style={{ width: "150px", height: "186px", borderRadius: "50%" }} />
                  </div>
                  <h4 className="text-center mt-3">{dataBaru.email}</h4>
                  <h4 className="text-center fs-5">{`${dataBaru.first_name} ${dataBaru.last_name}`}</h4>;
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default Listuser;
