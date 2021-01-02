import React, { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import mainContext from "../lip/context";
import { getAllPets, getPetsByType } from "../lip/api";

//====================

export default function BasicSearchBar() {
  const contextData = useContext(mainContext);
  const [typeOfAnimal, setTypeOfAnimal] = useState("anyType");
  const [petsArray, setPetsArray] = useState("");
  //====================

  const onSubmit = async (event) => {
    event.preventDefault();
    let result;
    if (typeOfAnimal === "anyType") {
      result = await getAllPets();
    } else {
      result = await getPetsByType(typeOfAnimal);
    }
    setPetsArray(petsArray);
    console.log("result :>> ", result);
    contextData.getPetsDataArray(result);
  };

  const onAnimalTypeChange = async (event) => {
    setTypeOfAnimal(event.target.value);
  };

  return (
    <Form
      // className="d-flex"
      onSubmit={(event) => {
        onSubmit(event);
      }}
    >
      <Form.Label>Type Of Animal</Form.Label>
      <Form.Control
        as="select"
        name="Type Of Animal"
        onChange={(event) => {
          onAnimalTypeChange(event);
        }}
      >
        <option value="anyType">Any Type</option>
        <option value="dog">dogs</option>
        <option value="cat">cats</option>
        <option value="other">others</option>
      </Form.Control>
      {/* <input
        type="text"
        name=""
        id=""
        onChange={(event) => {
          onSearchTermChange(event);
        }} 
      /> */}
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

// <div>
//   <Form
//     onSubmit={(event) => {
//       onSubmit(event);
//     }}
//     controlId="searchBar"
//   >
//     <Form.Group>
//       {/* <Form.Label>search</Form.Label> */}
//       <div className="d-flex">
//         <Form
//           onClick={(event) => {
//             setTypeOfAnimal(event.target.value);
//           }}
//         >
//           <Form.Group controlId="exampleForm.SelectCustom">
//             <Form.Label>Type of Animal</Form.Label>
//             <Form.Control as="select" custom>
//               <option> </option>
//               <option>dog</option>
//               <option>cat</option>
//             </Form.Control>
//           </Form.Group>
//         </Form>
//         <Form.Control
//           type="text"
//           placeholder="search"
//           value={searchTerm}
//           required
//           onChange={(event) => {
//             setSearchTerm(event.target.value);
//           }}
//         />
//         <Form.Text className="text-muted"></Form.Text>
//       </div>
//       <Button variant="primary" type="submit">
//         Submit
//       </Button>
//     </Form.Group>
//   </Form>
// </div>
// );
// }

// import React, { useState, useContext } from "react";
// import { Form, Button } from "react-bootstrap";
// import mainContext from "../lip/context";
// //====================

// export default function BasicSearchBar() {
//   const contextData = useContext(mainContext);
//   const [currentUser, setCurrentUser] = useState(contextData);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [typeOfAnimal, setTypeOfAnimal] = useState("");
//   //====================

//   const onSubmit = (event) => {
//     event.preventDefault();
//     console.log("typeOfAnimal :>> ", typeOfAnimal);
//   };

//   return (
//     <div>
//       <Form
//         onSubmit={(event) => {
//           onSubmit(event);
//         }}
//         controlId="searchBar"
//       >
//         <Form.Group>
//           {/* <Form.Label>search</Form.Label> */}
//           <div className="d-flex">
//             <Form
//               onClick={(event) => {
//                 setTypeOfAnimal(event.target.value);
//               }}
//             >
//               <Form.Group controlId="exampleForm.SelectCustom">
//                 <Form.Label>Type of Animal</Form.Label>
//                 <Form.Control as="select" custom>
//                   <option> </option>
//                   <option>dog</option>
//                   <option>cat</option>
//                 </Form.Control>
//               </Form.Group>
//             </Form>
//             <Form.Control
//               type="text"
//               placeholder="search"
//               value={searchTerm}
//               required
//               onChange={(event) => {
//                 setSearchTerm(event.target.value);
//               }}
//             />
//             <Form.Text className="text-muted"></Form.Text>
//           </div>
//           <Button variant="primary" type="submit">
//             Submit
//           </Button>
//         </Form.Group>
//       </Form>
//     </div>
//   );
// }
