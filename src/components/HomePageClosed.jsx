import React /* , { useState, useContext } */ from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import { useHistory } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
// import mainContext from "../lip/context";
// ========

export default function HomePageClosed() {
  // ========

  // const contextData = useContext(mainContext);
  // const [currentUser, setCurrentUser] = useState(contextData);
  const historyFunc = useHistory();

  // ========

  const handleSearchButton = () => {
    historyFunc.push("/searchPage");
  };

  // ========

  return (
    <>
      <Card className="home-page-card">
        <Card.Body className="d-flex flex-column justify-content-between p-2">
          <Card.Title>
            <div className="d-flex flex-column justify-content-between">
              <h1 className="card-text">
                welcome <strong>stranger</strong>
              </h1>
              <p className="card-text">
                {" "}
                Ready to add a new love to your family? There are so many
                wonderful pets in your community waiting for loving homes. Put
                your love into action by adopting today - and spread the word
                that adoption is the way to go.
              </p>
            </div>
          </Card.Title>
          <div className="d-flex justify-content-between m-5">
            <Login />
            <SignUp />
            <Button onClick={handleSearchButton}>search!</Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
