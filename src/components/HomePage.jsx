import React, { useState, useContext, useEffect } from "react";
// import Login from "./Login";
// import ProfileSettings from "./ProfileSettings";
// import SignUp from "./SignUp";
import { Form, Button, Card, Alert } from "react-bootstrap";
import mainContext from "../lip/context";
// import { useHistory, Link } from "react-router-dom";
// import PetsPage from "./PetsPage";
import NavBar from "./NavBar";

// ========

export default function HomePage() {
  const myMockData = useContext(mainContext);
  const [currentUser, setCurrentUser] = useState(myMockData);

  return (
    <>
      <Card className="home-page-card">
        <Card.Body className="d-flex flex-column justify-content-between p-5 border">
          <Card.Title>
            <div>
              <h1>
                welcome {currentUser.flag ? currentUser.userEmail : "stranger"}
              </h1>
              <p> this is my app</p>
            </div>
          </Card.Title>
          <NavBar currentPage='homepage' />
        </Card.Body>
      </Card>
    </>
  );
}
