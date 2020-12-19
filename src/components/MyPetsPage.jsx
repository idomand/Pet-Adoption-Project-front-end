import React, { useState, useContext, useEffect } from "react";
import { Form, Button, Card, Alert, Carousel } from "react-bootstrap";
import mainContext from "../lip/context";
import { useHistory, Link } from "react-router-dom";
import NavBar from "./NavBar";
import PetItemCard from "./PetItemCard";
import "./MyPetsPage.css";

// ========

export default function MyPetsPage() {
  // ========

  const historyFunc = useHistory();
  const myMockData = useContext(mainContext);
  const [currentUser, setCurrentUser] = useState(myMockData);
  const handleHomePage = () => {
    historyFunc.push("/HomePageOpen");
  };

  // ========

  const mockPetDetailsArray = [
    {
      type: "dog",
      breed: "mixed",
      name: "dingo",
      adoptionStatus: "dead",
      picture: "../pictures/dingo1.jpg",
      height: 80,
      weight: 15,
      color: "brown",
      bio: "he was a really good dog",
      hypoallergenic: "no",
      dietaryRestrictions: "none",
    },
    {
      type: "cat",
      breed: "mixed",
      name: "loi",
      adoptionStatus: "dead",
      picture: "../pictures/loi1.jpg",
      height: 20,
      weight: 5,
      color: "black and white",
      bio: "kind of shitty, but he was okay",
      hypoallergenic: "no",
      dietaryRestrictions: "none",
    },
  ];

  return (
    <>
      <Card className="home-page-card">
        <Card.Body className="d-flex flex-column justify-content-between p-5">
          <Card.Title>
            <div>
              <h1>My Pets Page</h1>
              <h2>you currently do not own or foster any pets</h2>
            </div>
          </Card.Title>
          <div>
            <h1>pats cards</h1>
            {mockPetDetailsArray.map((element) => {
              return <PetItemCard key={element.name} animalDetails={element} />;
            })}
          </div>
          <div className="patItem">doggo</div>

          <NavBar currentPage="MyPetsPage" />
        </Card.Body>
      </Card>
    </>
  );
}
