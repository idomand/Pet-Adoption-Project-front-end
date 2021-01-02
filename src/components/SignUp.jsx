import React, { useState, useContext } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import ReactModal from "react-modal";
import mainContext from "../lip/context";
import { signUpNewUser } from "../lip/api";
import { validateFields } from "../lip/validate";
// ========

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const myMockData = useContext(mainContext);
  const [isOpen, setIsOpen] = useState(false);
  const [validationError, setValidationError] = useState("");
  // ========

  const openModel = () => {
    setIsOpen(true);
  };
  const closeModel = () => {
    setIsOpen(false);
  };
  const onSignUpSubmit = async (event) => {
    event.preventDefault();
    const newUser = {
      name,
      email,
      phoneNumber,
      password,
    };
    let validationStatus = validateFields(newUser, passwordConfirmation);
    setValidationError(validationStatus);
    if (validationStatus) {
      return;
    }
    const userSignIN = await signUpNewUser(newUser);
    console.log(userSignIN);
    if (userSignIN === "Email already in use") {
      setValidationError("Email already in use, pick new Email or Log in");
    } else {
      setIsOpen(false);
      setName("");
      setEmail("");
      setPassword("");
      setPasswordConfirmation("");
      setPhoneNumber("");
    }
  };
  return (
    <>
      <Button onClick={openModel}>Sign Up</Button>
      <ReactModal ariaHideApp={false} isOpen={isOpen}>
        <Button onClick={closeModel}> close</Button>
        <Card className="my-form">
          <Card.Title className="mx-auto">
            <strong>Sign Up</strong>
          </Card.Title>
          <Card.Body>
            {validationError ? (
              <Alert variant={"danger"}>{validationError}</Alert>
            ) : (
              ""
            )}
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
          </Card.Body>
        </Card>
      </ReactModal>
    </>
  );
}
