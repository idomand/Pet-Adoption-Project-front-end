import React, { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import mainContext from "../lip/context";
import { searchPetsByParameters } from "../lip/api";

export default function BasicSearchBar(props) {
  const contextData = useContext(mainContext);
  const [typeOfAnimal, setTypeOfAnimal] = useState("anyType");
  const [petsArrayFromDB, setPetsArrayFromDB] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    contextData.petsArray = [];
    const petsArray = await searchPetsByParameters(typeOfAnimal);
    contextData.petsArray = petsArray;
    await setPetsArrayFromDB(petsArray);
    props.callbackFunction(petsArray);
  };

  const onAnimalTypeChange = async (event) => {
    setTypeOfAnimal(event.target.value);
  };

  return (
    <Form
      className="d-flex align-items-center justify-content-around"
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
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
