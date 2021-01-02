import React, { useState, useContext } from "react";
import { Card } from "react-bootstrap";
import mainContext from "../lip/context";
import { useHistory } from "react-router-dom";
import NavBar from "./NavBar";
import PetItemCard from "./PetItemCard";
import "./MyPetsPage.css";

// ========

export default function MyPetsPage() {
  // ========

  const historyFunc = useHistory();
  const myMockData = useContext(mainContext);
  const [currentUser, setCurrentUser] = useState(myMockData);
  //====================

  const handleHomePage = () => {
    historyFunc.push("/HomePageOpen");
  };

  // ========

  // const mockPetDetailsArray = currentUser.petsDetails;

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
          {/* <h1>pats cards</h1> */}
          {/* <div className="pet-card-div">
            {mockPetDetailsArray.map((element) => {
              return (
                <PetItemCard key={Math.random()} animalDetails={element} />
              );
            })}
          </div> */}

          <NavBar currentPage="MyPetsPage" />
        </Card.Body>
      </Card>
    </>
  );
}
