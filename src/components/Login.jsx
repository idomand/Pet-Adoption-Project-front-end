import React, { useState, useContext } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import ReactModal from "react-modal";
import mainContext from "../lip/context";
import { useHistory } from "react-router-dom";

// ========

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const myMockData = useContext(mainContext);
  const historyFunc = useHistory();

  // ========

  const openModel = () => {
    setIsOpen(true);
  };
  const closeModel = () => {
    setIsOpen(false);
  };
  const onLoginSubmit = (event) => {
    event.preventDefault();
    myMockData.logInFunc(email, password);
    setIsOpen(false);
    historyFunc.push("./HomePageOpen");
  };

  // ========

  return (
    <>
      <Button onClick={openModel}>login</Button>
      <ReactModal ariaHideApp={false} isOpen={isOpen}>
        <Button onClick={closeModel}> close</Button>
        <Card className="my-form">
          <h2>Log In</h2>
          <Card.Body>
            <Form
              onSubmit={(event) => {
                onLoginSubmit(event);
              }}
            >
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
              <Button variant="primary" type="submit">
                Log In
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </ReactModal>
    </>
  );
}
