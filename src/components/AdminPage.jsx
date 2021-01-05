import React, { useState, useContext } from "react";
import { Card } from "react-bootstrap";
import mainContext from "../lip/context";
import NavBar from "./NavBar";
import AdminAddPet from "./AdminAddPet";
import AdminEditPet from "./AdminEditPet";
export default function AdminPage() {
  // ========
  const myMockData = useContext(mainContext);
  const [currentUser, setCurrentUser] = useState(myMockData);

  // ========

  // ========

  return (
    <>
      <Card className="home-page-card">
        <Card.Body className="d-flex flex-column justify-content-between">
          <Card.Title>
            <div>
              <h1>Admin Page</h1>
            </div>
          </Card.Title>
          <span>
            <AdminAddPet />
            <AdminEditPet />
          </span>
          <NavBar currentPage="ProfileSettings" />
        </Card.Body>
      </Card>
    </>
  );
}
