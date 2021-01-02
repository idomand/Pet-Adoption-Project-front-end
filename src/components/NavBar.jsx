import React, { useState, useContext } from "react";
import { Button } from "react-bootstrap";
import mainContext from "../lip/context";
import { useHistory } from "react-router-dom";

// ========

export default function NavBar(props) {
  const myMockData = useContext(mainContext);
  const historyFunc = useHistory();
  const [currentUser, setCurrentUser] = useState(myMockData);

  // ========
  const logOutFunc = () => {
    currentUser.logOutFunc();
    historyFunc.push("/");
  };
  // const handleMyPetsPageButton = () => {
  //   historyFunc.push("/MyPetsPage");
  // };
  // const handleProfileSettingsButton = () => {
  //   historyFunc.push("/ProfileSettings");
  // };

  // const handleSearchButton = () => {
  //   historyFunc.push("/searchPage");
  // };

  // const handleAdminPageButton = () => {
  //   historyFunc.push("/adminPage");
  // };

  // ========

  const nevBarButton = (target) => {
    historyFunc.push(target);
  };

  return (
    <>
      <div className=" d-flex justify-content-between m-5">
        {currentUser.isAdmin ? (
          <Button
            variant="success"
            onClick={() => {
              nevBarButton("/AdminPage");
            }}
          >
            Admin Page
          </Button>
        ) : (
          ""
        )}
        <Button
          onClick={() => {
            nevBarButton("/ProfileSettings");
          }}
        >
          User Settings
        </Button>
        <Button
          onClick={() => {
            nevBarButton("/MyPetsPage");
          }}
        >
          My Pets Page
        </Button>
        <Button
          onClick={() => {
            nevBarButton("/SearchPage");
          }}
        >
          Search Page
        </Button>
        <Button variant="danger" onClick={logOutFunc}>
          Log Out
        </Button>
      </div>
    </>
  );
}
