import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import NewForm from "./components/Form";
import { Container, Row, Col } from "reactstrap";

function App() {
  return (
    <Container className="App">
      <Row>
        <Col xs="12" md="4" b xl="5" style={{ marginRight: "5%" }}>
          <NewForm></NewForm>
        </Col>
        <Col>
          <h1>USERS</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
