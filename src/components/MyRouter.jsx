import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MainProvider } from "../lip/context";
import SearchPage from "./SearchPage";
import ProfileSettings from "./ProfileSettings";
import MyPetsPage from "./MyPetsPage";
import HomePageClosed from "./HomePageClosed";
import HomePageOpen from "./HomePageOpen";
import AdminPage from "./AdminPage";
import Dashboard from "./Dashboard";
// ========

export default function MyRouter() {
  const contextData = {
    isAdmin: false,
    isLogIn: false,
    userEmail: "",
    userName: "",
    userPhoneNumber: "",
    logInFunc: (userObject) => {
      contextData.userEmail = userObject.email;
      contextData.userName = userObject.name;
      contextData.userPhoneNumber = userObject.phoneNumber;
      contextData.isAdmin = userObject.isAdmin;
      contextData.isLogin = userObject.isLogin;
    },
    logOutFunc: () => {
      contextData.isLogin = false;
      contextData.userEmail = "";
      contextData.userName = "";
      contextData.userPhoneNumber = "";
      contextData.isAdmin = false;
    },
    petsArray: [],
  };
  // ========
  return (
    <>
      <Router>
        <MainProvider value={contextData}>
          <Switch>
            <Route path="/SearchPage">
              <SearchPage />
            </Route>
            <Route path="/Dashboard">
              <Dashboard />
            </Route>
            <Route path="/AdminPage">
              <AdminPage />
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
