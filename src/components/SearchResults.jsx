import React, { useContext, useEffect } from "react";
import PetItemCard from "./PetItemCard";
import mainContext from "../lip/context";
import "./SearchResults.css";

export default function SearchResults() {
  const contextData = useContext(mainContext);
  const petsArrayData = contextData.petsArray;

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
