import React from "react";
import { Form, FormGroup, Input, Label, Row, Col, Button } from "reactstrap";

const NewForm = (props) => {
  return (
    <Form>
      <h1 style={{ marginBottom: "5%" }}>New User</h1>
      <FormGroup>
        <label for="name">Name</label>
        <Input type="text" name="name" id="name" placeholder="Name" />
      </FormGroup>
      <FormGroup>
        <label for="email">Email</label>
        <Input type="email" name="email" id="email" placeholder="Email" />
      </FormGroup>
      <FormGroup>
        <label for="password">Password</label>
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type="checkbox" /> I Agree To The Terms Of Service
        </Label>
      </FormGroup>
      <Button color="primary" style={{ marginTop: "3%" }}>
        Submit
      </Button>
    </Form>
  );
};

export default NewForm;
