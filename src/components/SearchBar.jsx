import React, { useState, useContext } from "react";
import { Dropdown } from "react-bootstrap";
import mainContext from "../lip/context";
import BasicSearchBar from "./BasicSearchBar";
import AdvancedSearchBar from "./AdvancedSearchBar";
//====================

export default function SearchBar() {
  const contextData = useContext(mainContext);
  const [currentUser, setCurrentUser] = useState(contextData);
  const [searchOption, setSearchOption] = useState("BasicSearch");

  //====================
  // const onSearchSubmit = (event) => {
  //   event.preventDefault();
  // };
  //====================

  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic" className="mb-4">
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

      {searchOption === "BasicSearch" ? (
        <BasicSearchBar />
      ) : (
        <AdvancedSearchBar />
      )}
    </div>
  );
}
