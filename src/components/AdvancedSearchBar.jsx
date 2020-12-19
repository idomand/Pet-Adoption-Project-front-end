import React, { useState, useContext } from "react";
import { Form, Dropdown } from "react-bootstrap";
import mainContext from "../lip/context";
import { useHistory } from "react-router-dom";
import NavBar from "./NavBar";
import BasicSearchBar from "./BasicSearchBar";

//====================

export default function AdvancedSearchBar() {
  //   return <div>AdvancedSearchBar</div>;
  // }

  //====================

  const userData = useContext(mainContext);
  const historyFunc = useHistory();
  const [currentUser, setCurrentUser] = useState(userData);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchOption, setSearchOption] = useState("");
  const [typeOfAnimal, setTypeOfAnimal] = useState("");
  return (
    <div>
      <Form.Group controlId="searchBar">
        <Form.Label>search</Form.Label>
        <div className="d-flex">
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Type of Animal
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item
                onClick={() => {
                  setTypeOfAnimal("dogs");
                }}
              >
                Dogs
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  setTypeOfAnimal("cats");
                }}
              >
                cats
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
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
      </Form.Group>
    </div>
  );
}
