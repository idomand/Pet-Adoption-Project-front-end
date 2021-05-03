import React, { useContext /* , useEffect, useState  */ } from "react";
import PetItemCard from "./PetItemCard";
import mainContext from "../lip/context";
import "./SearchResults.css";

export default function SearchResults(props) {
  const contextData = useContext(mainContext);
  const petsArrayData = contextData.petsArray;
  // const [petsArrayFromDB, setPetsArrayFromDB] = useState("");

  // let foo = props.results;

  return (
    <section>
      <div className="search-result-div">
        {petsArrayData
          ? petsArrayData.map((element) => {
              return (
                <PetItemCard key={Math.random()} animalDetails={element} />
              );
            })
          : ""}
      </div>
    </section>
  );
}
