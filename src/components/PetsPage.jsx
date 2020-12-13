import React, { useState, useContext, useEffect } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import mainContext from "../lip/context";
import { useHistory, Link } from "react-router-dom";
import NavBar from "./NavBar";

// ========

export default function PatsPage() {
  const historyFunc = useHistory();
  const myMockData = useContext(mainContext);
  const [currentUser, setCurrentUser] = useState(myMockData);
  const handleHomePage = () => {
    historyFunc.push("/HomePageOpen");
  };
  return (
    <>
      <Card className="home-page-card">
        <Card.Body className="d-flex flex-column justify-content-between p-5 border">
          <Card.Title>
            <div>
              <h1>this is pats Page</h1>
            </div>
          </Card.Title>
          {/* <Button onClick={handleHomePage}>Back to Home Page </Button>
           */}
          <NavBar currentPage="PatsPage" />
        </Card.Body>
      </Card>
    </>
  );
}
