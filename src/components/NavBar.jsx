import React, { useState, useContext } from "react";
import ProfileSettings from "./ProfileSettings";
import { Button } from "react-bootstrap";
import mainContext from "../lip/context";
import { useHistory, Link } from "react-router-dom";
import MyPetsPage from "./MyPetsPage";

// ========

export default function NavBar(props) {
  const myMockData = useContext(mainContext);
  const historyFunc = useHistory();
  const [currentUser, setCurrentUser] = useState(myMockData);

  // ========
  const logOutFunc = () => {
    currentUser.logOutFunc();
    console.log(currentUser.flag);
    // setCurrentUser({ flag: false });
    historyFunc.push("/");
  };
  const handleMyPetsPageButton = () => {
    historyFunc.push("/MyPetsPage");
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
      <div className=" d-flex justify-content-between m-5">
        <Button onClick={handleProfileSettingsButton}>User Settings</Button>
        <Button onClick={handleMyPetsPageButton}>My Pets Page</Button>
        <Button onClick={handleSearchButton}>Search Page</Button>
        <Button variant="danger" onClick={logOutFunc}>
          Log Out
        </Button>
      </div>
    </>
  );
}
