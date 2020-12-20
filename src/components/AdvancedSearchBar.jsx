import React, { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import mainContext from "../lip/context";
//====================

export default function AdvancedSearchBar() {
  //====================

  const userData = useContext(mainContext);
  const [currentUser, setCurrentUser] = useState(userData);
  const [searchTerm, setSearchTerm] = useState("");
  const [typeOfAnimal, setTypeOfAnimal] = useState("");
  const [adoptionStatus, setAdoptionStatus] = useState("");
  const [breed, setBreed] = useState("");
  const [petHeight, setPetHeight] = useState("");
  const [petWeight, setPetWeight] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("typeOfAnimal :>> ", typeOfAnimal);
    console.log("adoptionStatus :>> ", adoptionStatus);
    console.log("breed :>> ", breed);
    console.log("petHeight,petWeight :>> ", petHeight, "---", petWeight);
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
            <Form.Control
              type="text"
              placeholder="search"
              value={searchTerm}
              required
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            />
            <Form.Text className="text-muted"></Form.Text>
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
