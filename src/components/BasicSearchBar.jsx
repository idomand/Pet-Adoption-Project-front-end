import React, { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import mainContext from "../lip/context";
//====================

export default function BasicSearchBar() {
  const userData = useContext(mainContext);
  const [currentUser, setCurrentUser] = useState(userData);
  const [searchTerm, setSearchTerm] = useState("");
  const [typeOfAnimal, setTypeOfAnimal] = useState("");
  //====================

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("typeOfAnimal :>> ", typeOfAnimal);
  };

  return (
    <div>
      <Form.Group
        onSubmit={(event) => {
          onSubmit(event);
        }}
        controlId="searchBar"
      >
        {/* <Form.Label>search</Form.Label> */}
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
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form.Group>
    </div>
  );
}
