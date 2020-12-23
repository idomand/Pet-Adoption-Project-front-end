import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MainProvider } from "../lip/context";
import SearchPage from "./SearchPage";
import ProfileSettings from "./ProfileSettings";
import MyPetsPage from "./MyPetsPage";
import HomePageClosed from "./HomePageClosed";
import HomePageOpen from "./HomePageOpen";
import AdminPage from "./AdminPage";
import { testFunc } from "../lip/test";

// ========

export default function MyRouter() {
  const myFunc = async () => {
    const data = await testFunc();

    console.log(data.data.db[1].pet1);
  };
  myFunc();

  const [flag, setFlag] = useState(false);

  const myMockData = {
    isAdmin: true,
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
    addPet: (
      name,
      type,
      adoptionStatus,
      breed,
      // picture,
      height,
      weight,
      color,
      bio,
      hypoallergenic,
      dietaryRestrictions
    ) => {
      myMockData.petsDetails.push({
        name,
        type,
        adoptionStatus,
        breed,
        // picture,
        height,
        weight,
        color,
        bio,
        hypoallergenic,
        dietaryRestrictions,
      });
    },
    petsDetails: [
      {
        type: "dog",
        breed: "mixed",
        name: "dingo",
        adoptionStatus: "dead",
        picture: "./publicPictures/dingo1.jpg",
        height: 80,
        weight: 15,
        color: "brown",
        bio: "he was a really good dog",
        hypoallergenic: "no",
        dietaryRestrictions: "none",
      },
      {
        type: "dog",
        breed: "mixed",
        name: "dingo",
        adoptionStatus: "dead",
        picture: "./publicPictures/dingo1.jpg",
        height: 80,
        weight: 15,
        color: "brown",
        bio: "he was a really good dog",
        hypoallergenic: "no",
        dietaryRestrictions: "none",
      },
      {
        type: "cat",
        breed: "mixed",
        name: "skipi",
        adoptionStatus: "adopted",
        picture: "./publicPictures/skipi1.jpg",
        height: 20,
        weight: 4,
        color: "mix",
        bio: "she is a great cat",
        hypoallergenic: "no",
        dietaryRestrictions: "none",
      },
      {
        type: "cat",
        breed: "mixed",
        name: "loi",
        adoptionStatus: "dead",
        picture: "./publicPictures/loi1.jpg",
        height: 20,
        weight: 5,
        color: "black and white",
        bio: "kind of shitty, but he was okay",
        hypoallergenic: "no",
        dietaryRestrictions: "none",
      },
    ],
  };

  // ========
  return (
    <>
      <Router>
        <MainProvider value={myMockData}>
          <Switch>
            <Route path="/SearchPage">
              <SearchPage />
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
