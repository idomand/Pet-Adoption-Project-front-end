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
  console.log("this is searchPageRendering");
  const contextData = useContext(mainContext);
  const historyFunc = useHistory();
  const [currentUser, setCurrentUser] = useState(contextData);
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
            {contextData.flag ? (
              <h1>
                welcome{" "}
                <u>
                  <strong>{contextData.userName}</strong>
                </u>
              </h1>
            ) : (
              <h1>
                welcome{" "}
                <u>
                  <strong>stranger</strong>
                </u>
              </h1>
            )}
          </Card.Title>
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
