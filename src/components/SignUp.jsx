import React, { useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import ReactModal from "react-modal";

export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [LestName, setLestName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const openModel = () => {
    console.log("openModel func");
    setIsOpen(true);
  };
  const closeModel = () => {
    setIsOpen(false);
  };
  const onSignUpSubmit = (event) => {
    event.preventDefault();
    console.log("i clicked submit");
  };
  return (
    <>
      <Button onClick={openModel}>Sign Up</Button>
      <ReactModal ariaHideApp={false} isOpen={isOpen}>
        <Button onClick={closeModel}> close</Button>
        <Card className="my-form">
          <Card.Title>
            <strong>Sign Up</strong>
          </Card.Title>
          <Card.Body>
            {/* {error && <Alert variant="danger">{error}</Alert>} */}
            <Form
              onSubmit={(event) => {
                onSignUpSubmit(event);
              }}
            >
              <Form.Group controlId="formFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter First Name"
                  value={firstName}
                  required
                  onChange={(event) => {
                    setFirstName(event.target.value);
                  }}
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Group controlId="formLestName">
                <Form.Label>Lest Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Lest Name"
                  value={LestName}
                  required
                  onChange={(event) => {
                    setLestName(event.target.value);
                  }}
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  required
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  required
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group controlId="formBasicPasswordConfirmation">
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Re-Enter Password"
                  required
                  value={passwordConfirmation}
                  onChange={(event) => {
                    setPasswordConfirmation(event.target.value);
                  }}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </ReactModal>
    </>
  );
}