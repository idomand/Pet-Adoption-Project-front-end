import React, { useContext, useState } from "react";
import PetItemCard from "./PetItemCard";
import mainContext from "../lip/context";

export default function SearchResults() {
  const contextData = useContext(mainContext);
  const petsArrayData = contextData.petsDataArray;
  console.log("======");
  console.log(petsArrayData);
  console.log("======");

  return (
    <div>
      <div className="pet-card-div">
        {petsArrayData
          ? petsArrayData.map((element) => {
              return (
                <PetItemCard key={Math.random()} animalDetails={element} />
              );
            })
          : ""}
      </div>
    </div>
  );
}
