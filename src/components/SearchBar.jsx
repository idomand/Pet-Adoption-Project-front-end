import React, { useState, useContext } from "react";
import { Form, Dropdown } from "react-bootstrap";
import mainContext from "../lip/context";
import { useHistory } from "react-router-dom";
import BasicSearchBar from "./BasicSearchBar";
import AdvancedSearchBar from "./AdvancedSearchBar";
//====================

export default function SearchBar() {
  const userData = useContext(mainContext);
  const [currentUser, setCurrentUser] = useState(userData);
  const [searchOption, setSearchOption] = useState("BasicSearch");
  const [typeOfAnimal, setTypeOfAnimal] = useState("");

  console.log("searchOption :>> ", searchOption);
  //====================
  const onSearchSubmit = (event) => {
    event.preventDefault();
  };
  //====================

  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Search Options
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item
            onClick={() => {
              setSearchOption("BasicSearch");
            }}
          >
            Basic Search
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              setSearchOption("AdvancedSearch");
            }}
          >
            Advanced Search
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      {searchOption === "BasicSearch" ? <BasicSearchBar /> : ""}
      {searchOption === "AdvancedSearch" ? <AdvancedSearchBar /> : ""}
    </div>
  );
}
