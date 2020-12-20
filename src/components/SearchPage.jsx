import React, { useState, useContext } from "react";
import { Form, Button, Card, Dropdown } from "react-bootstrap";
import mainContext from "../lip/context";
import { useHistory } from "react-router-dom";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

//====================

export default function SearchPage() {
  //====================

  const userData = useContext(mainContext);
  const historyFunc = useHistory();
  const [currentUser, setCurrentUser] = useState(userData);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchOption, setSearchOption] = useState("");
  const [typeOfAnimal, setTypeOfAnimal] = useState("");

  //====================

  const handleHomeButton = () => {
    if (currentUser.flag) {
      historyFunc.push("/HomePageOpen");
    } else {
      historyFunc.push("/");
    }
  };

  //====================

  return (
    <>
      <Card className="home-page-card">
        <Card.Body className="d-flex flex-column justify-content-between p-5">
          <Card.Title>
            <h1>welcome {userData.userName}</h1>
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            search page
            {currentUser.flag ? (
              <h1>this is from log in</h1>
            ) : (
              <h1>this is from log out</h1>
            )}
          </Card.Subtitle>
          <SearchBar />
          <SearchResults />

          <div className="mt-3">
            {currentUser.flag ? (
              <NavBar currentPage="SearchPage" />
            ) : (
              <Button onClick={handleHomeButton}>HomePage</Button>
            )}
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
