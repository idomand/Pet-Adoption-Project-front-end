import React, { useState, useContext } from "react";
import { Dropdown } from "react-bootstrap";
import mainContext from "../lip/context";
import BasicSearchBar from "./BasicSearchBar";
import AdvancedSearchBar from "./AdvancedSearchBar";

export default function SearchBar(props) {
  const contextData = useContext(mainContext);
  const [searchOption, setSearchOption] = useState("BasicSearch");

  return (
    <div className="d-flex align-items-center justify-content-around">
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

      {searchOption === "BasicSearch" ? (
        <BasicSearchBar callbackFunction={props.callbackFunction} />
      ) : (
        <AdvancedSearchBar />
      )}
    </div>
  );
}
