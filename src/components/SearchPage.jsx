import React, { useState, useContext } from "react";
import Login from "./Login";
import ProfileSettings from "./ProfileSettings";
import SignUp from "./SignUp";
import { Form, Button, Card, Alert } from "react-bootstrap";
import mainContext from "../lip/contex";
import { useHistory } from "react-router-dom";

export default function SearchPage() {
  const userData = useContext(mainContext);
  console.log("userData :>> ", userData);
  const historyFunc = useHistory();

  const [currentUser, setCurrentUser] = useState("");

  const handleHomeButton = () => {
    historyFunc.push("/");
  };

  return (
    <>
      <Card className="home-page-card">
        <Card.Body className="d-flex flex-column justify-content-between p-5 border">
          <Card.Title>
            <h1>welcome {userData.userName}</h1>
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            this is my app
          </Card.Subtitle>
          <div className="mt-3 border">
            <Login />
            <SignUp />
            <Button onClick={handleHomeButton}>HomePage</Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
