import React from "react";
import { Card } from "react-bootstrap";
import NavBar from "./NavBar";
import PetItemCard from "./PetItemCard";
import "./MyPetsPage.css";

export default function MyPetsPage() {
  return (
    <>
      <Card className="home-page-card">
        <Card.Body className="d-flex flex-column justify-content-between">
          <Card.Title>
            <div>
              <h1>My Pets Page</h1>
              <h2>you currently do not own or foster any pets</h2>
            </div>
          </Card.Title>

          <NavBar currentPage="MyPetsPage" />
        </Card.Body>
      </Card>
    </>
  );
}
