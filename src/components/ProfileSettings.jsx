import React, { useState, useContext } from "react";
import { Form, Button, Card } from "react-bootstrap";
import mainContext from "../lip/context";
import NavBar from "./NavBar";
// ========

export default function ProfileSettings() {
  const myMockData = useContext(mainContext);
  const [currentUser, setCurrentUser] = useState(myMockData);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  // ========

  const onSignUpSubmit = (event) => {
    event.preventDefault();
  };

  // ========

  return (
    <>
      <Card className="home-page-card">
        <Card.Body className="d-flex flex-column justify-content-between">
          <Card.Title>
            <div>
              <h1>Profile Settings</h1>
            </div>
          </Card.Title>
          <Form
            onSubmit={(event) => {
              onSignUpSubmit(event);
            }}
          >
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter First and Lest Name"
                value={name}
                required
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group controlId="phoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter phoneNumber"
                value={phoneNumber}
                required
                onChange={(event) => {
                  setPhoneNumber(event.target.value);
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
          <NavBar currentPage="ProfileSettings" />
        </Card.Body>
      </Card>
    </>
  );
}
