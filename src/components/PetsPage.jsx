// import React, { useState, useContext, useEffect } from "react";
// import Login from "./Login";
// import ProfileSettings from "./ProfileSettings";
// import SignUp from "./SignUp";
// import { Form, Button, Card, Alert } from "react-bootstrap";
// import mainContext from "../lip/context";
// import { useHistory, Link } from "react-router-dom";
// // ========

// export default function PetsPage() {
//   console.log("this is pats page");
//   const myMockData = useContext(mainContext);
//   const historyFunc = useHistory();
//   const [currentUser, setCurrentUser] = useState(myMockData);

//   console.log("currentUser :>> ", currentUser);
//   // ========

//   const logOutFunc = () => {
//     setCurrentUser({ flag: false });
//   };
//   const handlePetsPageButton = () => {
//     historyFunc.push("/PetsPag");
//   };
//   const handleProfileSettingsButton = () => {
//     historyFunc.push("/ProfileSettings");
//   };

//   const handleSearchButton = () => {
//     historyFunc.push("/searchPage");
//   };

//   return (
//     <>
//       <Card className="home-page-card">
//         <Card.Body className="d-flex flex-column justify-content-between p-5 border">
//           <Card.Title>
//             <div>
//               <h1>Pets Page </h1>
//             </div>
//           </Card.Title>
//           <div className=" d-flex justify-content-around border ">
//             {currentUser.flag ? "" : <Login />}
//             {currentUser.flag ? "" : <SignUp />}
//             {currentUser.flag ? (
//               <Button onClick={handleProfileSettingsButton}>
//                 User Settings
//               </Button>
//             ) : (
//               ""
//             )}
//             {currentUser.flag ? (
//               <Button onClick={handlePetsPageButton}>Pets Page</Button>
//             ) : (
//               ""
//             )}
//             {currentUser.flag ? (
//               <Button onClick={logOutFunc}>Log Out</Button>
//             ) : (
//               ""
//             )}
//             <Button onClick={handleSearchButton}>Search Page</Button>
//           </div>
//         </Card.Body>
//       </Card>
//     </>
//   );
// }

import React, { useState, useContext, useEffect } from "react";
// import Login from "./Login";
// import ProfileSettings from "./ProfileSettings";
// import SignUp from "./SignUp";
import { Form, Button, Card, Alert } from "react-bootstrap";
import mainContext from "../lip/context";
// import { useHistory, Link } from "react-router-dom";
// import PetsPage from "./PetsPage";
import NavBar from "./NavBar";

// ========

export default function PatsPage() {
  const myMockData = useContext(mainContext);
  const [currentUser, setCurrentUser] = useState(myMockData);

  return (
    <>
      <Card className="home-page-card">
        <Card.Body className="d-flex flex-column justify-content-between p-5 border">
          <Card.Title>
            <div>
              <h1>this is pats Page</h1>
            </div>
          </Card.Title>
          <NavBar currentPage="petsPage" />
        </Card.Body>
      </Card>
    </>
  );
}
