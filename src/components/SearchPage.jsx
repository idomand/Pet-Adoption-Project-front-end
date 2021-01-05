import React, { useState, useContext, useEffect } from "react";
import { Form, Button, Card, Dropdown } from "react-bootstrap";
import mainContext from "../lip/context";
import { useHistory } from "react-router-dom";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

//====================

export default function SearchPage() {
  //====================

  const contextData = useContext(mainContext);
  const historyFunc = useHistory();
  // const [currentUser, setCurrentUser] = useState(contextData);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchOption, setSearchOption] = useState("");
  const [typeOfAnimal, setTypeOfAnimal] = useState("");

  //====================

  const handleHomeButton = () => {
    if (contextData.isLogin) {
      historyFunc.push("/HomePageOpen");
    } else {
      historyFunc.push("/");
    }
  };

  //====================

  return (
    <>
      <Card className="home-page-card">
        <Card.Body className="d-flex flex-column justify-content-between">
          <Card.Title>
            <h1>Search Page</h1>
          </Card.Title>
          <SearchBar />
          <SearchResults />
          <div className="mt-3">
            {contextData.isLogin ? (
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
