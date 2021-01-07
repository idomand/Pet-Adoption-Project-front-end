import React, { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import mainContext from "../lip/context";
import { searchPetsByParameters } from "../lip/api";
//====================

export default function AdvancedSearchBar() {
  //====================

  const userData = useContext(mainContext);
  const [currentUser, setCurrentUser] = useState(userData);
  const [petName, setPetName] = useState("");
  const [typeOfAnimal, setTypeOfAnimal] = useState("");
  const [adoptionStatus, setAdoptionStatus] = useState("");
  const [breed, setBreed] = useState("");
  const [petHeight, setPetHeight] = useState("");
  const [petWeight, setPetWeight] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    const newSearchObject = {
      petName,
      typeOfAnimal,
      adoptionStatus,
      breed,
      petHeight,
      petWeight,
    };
    searchPetsByParameters(newSearchObject);
  };

  return (
    <div>
      <Form.Group controlId="searchBar">
        <div className="d-flex flex-column">
          <div className="d-flex">
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
                  <option>other</option>
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
          </div>

          <div>
            <Form>
              <Form.Label>Pet name</Form.Label>
              <Form.Control
                type="text"
                placeholder="search pet name"
                value={petName}
                required
                onChange={(event) => {
                  setPetName(event.target.value);
                }}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form>
          </div>
        </div>
        <Button
          variant="primary"
          onClick={(event) => {
            onSubmit(event);
          }}
        >
          Submit
        </Button>
      </Form.Group>
    </div>
  );
}
