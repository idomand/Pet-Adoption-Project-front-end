import React, { useState, useContext, useEffect } from "react";
import Login from "./Login";
import ProfileSettings from "./ProfileSettings";
import SignUp from "./SignUp";
import { Form, Button, Card, Alert } from "react-bootstrap";
import mainContext from "../lip/context";
import { useHistory, Link } from "react-router-dom";
import PetsPage from "./PetsPage";

// ========

export default function NavBar(props) {
  const myMockData = useContext(mainContext);
  const historyFunc = useHistory();
  const [currentUser, setCurrentUser] = useState(myMockData);

  console.log("currentUser :>> ", currentUser);
  // ========
  let current = props.currentPage;
  console.log("current :>> ", current);
  const logOutFunc = () => {
    setCurrentUser({ flag: false });
  };
  const handlePetsPageButton = () => {
    historyFunc.push("/PetsPage");
  };
  const handleProfileSettingsButton = () => {
    historyFunc.push("/ProfileSettings");
  };

  const handleSearchButton = () => {
    historyFunc.push("/searchPage");
  };

  // ========

  return (
    <>
      <div className=" d-flex justify-content-around border ">
        {currentUser.flag ? "" : <Login />}
        {currentUser.flag ? "" : <SignUp />}
        {currentUser.flag ? (
          <Button onClick={handleProfileSettingsButton}>User Settings</Button>
        ) : (
          ""
        )}
        {currentUser.flag ? (
          <Button onClick={handlePetsPageButton}>Pets Page</Button>
        ) : (
          ""
        )}
        <Button onClick={handleSearchButton}>Search Page</Button>
        {currentUser.flag ? (
          <Button variant="danger" onClick={logOutFunc}>
            Log Out
          </Button>
        ) : (
          ""
        )}
      </div>
      ;
    </>
  );
}
