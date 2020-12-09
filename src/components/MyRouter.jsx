import React from "react";
import HomePage from "./HomePage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { MainProvider } from "../lip/contex";
import SearchPage from "./SearchPage";

// ========

export default function MyRouter() {
  const myMockData = { userName: "ido", userEmail: "bob@gmail.com" };

  return (
    <>
      <Router>
        <MainProvider value={myMockData}>
          MyRouter
          <Switch>
            <Route path="/searchPage">
              <SearchPage />
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
