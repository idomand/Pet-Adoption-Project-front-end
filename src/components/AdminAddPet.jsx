import React, { useState, useContext } from "react";
import { Form, Button, Card } from "react-bootstrap";
import mainContext from "../lip/context";

// ================

export default function AdminAddPet() {
  const myMockData = useContext(mainContext);
  const [currentUser, setCurrentUser] = useState(myMockData);
  const [petName, setPetName] = useState("");
  const [typeOfAnimal, setTypeOfAnimal] = useState("");
  const [petPicture, setPetPicture] = useState(""); // remember: +++ add the function to upload a picture
  const [adoptionStatus, setAdoptionStatus] = useState("");
  const [breed, setBreed] = useState("");
  const [petHeight, setPetHeight] = useState("");
  const [petWeight, setPetWeight] = useState("");
  const [petColor, setPetColor] = useState("");
  const [petBio, setPetBio] = useState("");
  const [petIsHypoallergenic, setPetIsHypoallergenic] = useState("");
  const [petIsDietaryRestrictions, setPetIsDietaryRestrictions] = useState("");

  // ================
  const onAddPet = (event) => {
    event.preventDefault();
    console.log("petName :>> ", petName);
    console.log("typeOfAnimal :>> ", typeOfAnimal);
    console.log("adoptionStatus :>> ", adoptionStatus);
    console.log("breed :>> ", breed);
    console.log("petHeight :>> ", petHeight);
    console.log("petColor :>> ", petColor);
    console.log("petWeight :>> ", petWeight);
    console.log("petBio :>> ", petBio);
    console.log("petIsHypoallergenic :>> ", petIsHypoallergenic);
    console.log("petIsDietaryRestrictions :>> ", petIsDietaryRestrictions);
    console.log(currentUser.petsDetails.length);
    console.log("========");
    currentUser.addPet(
      petName,
      typeOfAnimal,
      adoptionStatus,
      breed,
      petHeight,
      petColor,
      petWeight,
      petBio,
      petIsHypoallergenic,
      petIsDietaryRestrictions
    );
    console.log("========");
    console.log(currentUser.petsDetails.length);
    console.log("========");
  };
  // ================

  return (
    <>
      <div className="d-flex">
        <Form>
          <Form.Group controlId="formName">
            <Form.Label>Pet Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Pet Name"
              value={petName}
              required
              onChange={(event) => {
                setPetName(event.target.value);
              }}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
        </Form>

        <Form
          onClick={(event) => {
            setTypeOfAnimal(event.target.value);
          }}
        >
          <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Label>Type of Animal</Form.Label>
            <Form.Control as="select" custom>
              <option> </option>
              <option>dog</option>
              <option>cat</option>
            </Form.Control>
          </Form.Group>
        </Form>
        <Form
          onClick={(event) => {
            setAdoptionStatus(event.target.value);
          }}
        >
          <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Label>Adoption Status</Form.Label>
            <Form.Control as="select" custom>
              <option> </option>
              <option>waiting for adaption</option>
              <option>waiting For Foster Home</option>
            </Form.Control>
          </Form.Group>
        </Form>
        <Form
          onClick={(event) => {
            setBreed(event.target.value);
          }}
        >
          <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Label>breed</Form.Label>
            <Form.Control as="select" custom>
              <option> </option>
              <option>mix</option>
              <option>pureBreed</option>
            </Form.Control>
          </Form.Group>
        </Form>

        <Form
          onClick={(event) => {
            setPetColor(event.target.value);
          }}
        >
          <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Label>Pet color</Form.Label>
            <Form.Control as="select" custom>
              <option> </option>
              <option>Black</option>
              <option>Brown</option>
              <option>White</option>
              <option>mix</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </div>
      <div className="d-flex">
        <Form
          onClick={(event) => {
            setPetHeight(event.target.value);
          }}
        >
          <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Label>Pet Height</Form.Label>
            <Form.Control as="select" custom>
              <option> </option>
              <option>Under 20 sm</option>
              <option>20sm to 50sm</option>
              <option>over 50sm</option>
            </Form.Control>
          </Form.Group>
        </Form>
        <Form
          onClick={(event) => {
            setPetWeight(event.target.value);
          }}
        >
          <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Label>Pet Weight</Form.Label>
            <Form.Control as="select" custom>
              <option> </option>
              <option>Under 5kg</option>
              <option>5kg to 15kg</option>
              <option>over 15kg</option>
            </Form.Control>
          </Form.Group>
        </Form>

        <Form
          onClick={(event) => {
            setPetBio(event.target.value);
          }}
        >
          <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Label>Pet bio</Form.Label>
            <Form.Control as="select" custom>
              <option> </option>
              <option>good boy</option>
              <option>bad boy</option>
              <option>great boy</option>
            </Form.Control>
          </Form.Group>
        </Form>
        <Form
          onClick={(event) => {
            setPetIsHypoallergenic(event.target.value);
          }}
        >
          <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Label> Is Hypoallergenic</Form.Label>
            <Form.Control as="select" custom>
              <option> </option>
              <option>yes</option>
              <option>no</option>
            </Form.Control>
          </Form.Group>
        </Form>
        <Form
          onClick={(event) => {
            setPetIsDietaryRestrictions(event.target.value);
          }}
        >
          <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Label> Is DietaryRestrictions</Form.Label>
            <Form.Control as="select" custom>
              <option> </option>
              <option>yes</option>
              <option>no</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </div>

      <div>
        <Button variant="primary" type="submit" onClick={onAddPet}>
          Add New Pet
        </Button>
      </div>
    </>
  );
}
