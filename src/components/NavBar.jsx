import React, { useState, useContext } from "react";
import { Button } from "react-bootstrap";
import mainContext from "../lip/context";
import { useHistory } from "react-router-dom";

// ========

export default function NavBar(props) {
  const contextData = useContext(mainContext);
  const historyFunc = useHistory();
  console.log("i come from page:", props.currentPage);
  // ========
  const logOutFunc = () => {
    contextData.logOutFunc();
    historyFunc.push("/");
  };

  const nevBarButton = (target) => {
    historyFunc.push(target);
  };

  return (
    <>
      <div className=" d-flex justify-content-between m-5">
        {contextData.isAdmin ? (
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
            nevBarButton("/homePageOpen");
          }}
        >
          Home Page
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
