import React, { useState, useContext } from "react";
import { Button, Card } from "react-bootstrap";
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

  //====================

  const [petArrayResult, setPetArrayResult] = useState([]);

  const callbackFunction = (childData) => {
    setPetArrayResult(childData);
  };

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
          <SearchBar callbackFunction={callbackFunction} />
          <SearchResults results={petArrayResult} />
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
