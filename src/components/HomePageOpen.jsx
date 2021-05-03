import React, { useContext } from "react";
import mainContext from "../lip/context";
import NavBar from "./NavBar";
import { Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";

// ========

export default function HomePageOpen() {
  const contextData = useContext(mainContext);
  const historyFunc = useHistory();

  // ========
  if (!contextData.isLogin) {
    historyFunc.push("/");
  }
  return (
    <>
      <Card className="home-page-card">
        <Card.Body className="d-flex flex-column justify-content-between p-2">
          <Card.Title>
            <div className="d-flex flex-column justify-content-between">
              <h1 className="card-text">welcome {contextData.userName}</h1>
              <p className="card-text">
                {" "}
                Ready to add a new love to your family? There are so many
                wonderful pets in your community waiting for loving homes. Put
                your love into action by adopting today - and spread the word
                that adoption is the way to go.
              </p>
            </div>
          </Card.Title>
          <NavBar currentPage="HomePageOpen" />
        </Card.Body>
      </Card>
    </>
  );
}
