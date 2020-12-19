import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { MainProvider } from "../lip/context";
import SearchPage from "./SearchPage";
import ProfileSettings from "./ProfileSettings";
import MyPetsPage from "./MyPetsPage";
import HomePageClosed from "./HomePageClosed";
import HomePageOpen from "./HomePageOpen";
// ========

export default function MyRouter() {
  const [flag, setFlag] = useState(false);

  const myMockData = {
    flag: flag,
    userName: "ido",
    userEmail: "bob@gmail.com",
    logInFunc: (email, password) => {
      myMockData.userEmail = email;
      myMockData.password = password;
      setFlag(true);
    },
    logOutFunc: () => {
      setFlag(false);
    },
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
            <Route path="/MyPetsPage">
              <MyPetsPage />
            </Route>
            <Route path="/ProfileSettings">
              <ProfileSettings />
            </Route>
            <Route path="/HomePageOpen">
              <HomePageOpen />
            </Route>
            <Route exact path="/">
              <HomePageClosed />
            </Route>
          </Switch>
        </MainProvider>
      </Router>
    </>
  );
}
