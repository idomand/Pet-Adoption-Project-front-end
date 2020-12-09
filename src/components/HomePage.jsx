import React, { useState, useContext } from "react";
import Login from "./Login";
import ProfileSettings from "./ProfileSettings";
import SignUp from "./SignUp";
import { Form, Button, Card, Alert } from "react-bootstrap";
import mainContext from "../lip/contex";
import { useHistory } from "react-router-dom";

export default function HomePage() {
  const userData = useContext(mainContext);
  console.log("userData :>> ", userData);
  const historyFunc = useHistory();

  const [currentUser, setCurrentUser] = useState("");

  const handleSearchButton = () => {
    historyFunc.push("/searchPage");
  };

  return (
    <>
      <Card className="home-page-card">
        <Card.Body className="d-flex flex-column justify-content-between p-5 border">
          <Card.Title>
            <div>
              <h1>welcome {userData.userName}</h1>
              <p> this is my app</p>
            </div>
          </Card.Title>
          <div className=" d-flex justify-content-around border ">
            <Login />
            <SignUp />
            <Button onClick={handleSearchButton}>Search Page</Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
