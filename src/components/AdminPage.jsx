import React, { useState, useContext } from "react";
import { Card } from "react-bootstrap";
import mainContext from "../lip/context";
import NavBar from "./NavBar";
import AdminAddPet from "./AdminAddPet";
export default function AdminPage() {
  // ========
  const myMockData = useContext(mainContext);
  const [currentUser, setCurrentUser] = useState(myMockData);

  // ========

  // ========

  return (
    <>
      <Card className="home-page-card">
        <Card.Body className="d-flex flex-column justify-content-between p-5">
          <Card.Title>
            <div>
              <h1>Admin Page</h1>
            </div>
          </Card.Title>
          <AdminAddPet />
          <NavBar currentPage="ProfileSettings" />
        </Card.Body>
      </Card>
    </>
  );
}
