import React /* , { useState, useContext } */ from "react";
// import { useHistory } from "react-router-dom";
// import mainContext from "../lip/context";
import { Card } from "react-bootstrap";
import NavBar from "./NavBar";
import DashboardListOfUsers from "./DashboardListOfUsers";

export default function Dashboard() {
  // const contextData = useContext(mainContext);

  return (
    <>
      <>
        <Card className="home-page-card">
          <Card.Body className="d-flex flex-column justify-content-between">
            <Card.Title>
              <div>
                <h1>Dashboard</h1>
              </div>
            </Card.Title>
            <span>
              <DashboardListOfUsers />
            </span>
            <NavBar currentPage="ProfileSettings" />
          </Card.Body>
        </Card>
      </>
    </>
  );
}
