import React from "react";
import HomePage from "./HomePage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { MainProvider } from "../lip/context";
import SearchPage from "./SearchPage";
import ProfileSettings from "./ProfileSettings";
// import PetsPag from "./PetsPag";
import PetsPage from "./PetsPage";
// ========

export default function MyRouter() {
  const myMockData = {
    flag: true,
    userName: "ido",
    userEmail: "bob@gmail.com",
    logInFunc: (email, password) => {
      console.log("this is the log in func");
      myMockData.userEmail = email;
      myMockData.password = password;
      myMockData.flag = true;
    },
    signInFunc: "ass",
  };

  // ========
  return (
    <>
      <Router>
        <MainProvider value={myMockData}>
          <Switch>
            <Route path="/searchPage">
              <SearchPage />
            </Route>
            <Route path="/PetsPage">
              <PetsPage />
            </Route>
            <Route path="/ProfileSettings">
              <ProfileSettings />
            </Route>
            <Route exact path="/">
              {" "}
              <HomePage />
            </Route>
          </Switch>
        </MainProvider>
      </Router>
    </>
  );
}
