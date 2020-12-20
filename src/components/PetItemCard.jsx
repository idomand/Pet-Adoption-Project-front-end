import React, { useState } from "react";
import { Form, Button, Card, Alert, Collapse } from "react-bootstrap";
import Collapsible from "react-collapsible";
import pic from "../pictures/background.jpg";
import "./PetItemCard.css";
export default function PetItemCard(props) {
  const {
    type,
    breed,
    name,
    height,
    weight,
    color,
    bio,
    hypoallergenic,
    dietaryRestrictions,
    picture,
    adoptionStatus,
  } = props.animalDetails;

  const [open, setOpen] = useState(false);
  return (
    <span className="pet-card-item">
      <h4 className="pet-name">Name: {name}</h4>
      <p>Adoption Status: {adoptionStatus}</p>

      <Collapsible
        triggerTagName="Button"
        className="collapsible"
        openedClassName="collapsible"
        trigger="See all info"
      >
        <div className="extra-info">
          <p>
            <strong>
              <u>pet name:</u>
            </strong>{" "}
            {name}
          </p>
          <p>
            <strong>
              <u>pet type:</u>
            </strong>{" "}
            {`it is a beautiful ${breed} ${type}`}
          </p>
          <p>
            <strong>
              <u>adoption status:</u>
            </strong>{" "}
            {adoptionStatus}
          </p>
          <p>
            <strong>
              <u>description:</u>
            </strong>{" "}
            {`its height is ${height}sm, and it weight ${weight} Kg and it is mostly ${color}`}
          </p>
          <p>
            <strong>
              <u>pet adoption status:</u>
            </strong>{" "}
            {adoptionStatus}
          </p>
          <p>
            <strong>
              <u> bio: </u>
            </strong>{" "}
            {bio}
          </p>
          <p>
            <strong>
              <u>Special Restrictions: hypoallergenic?</u>
            </strong>{" "}
            {hypoallergenic},
            <strong>
              <u>dietaryRestrictions?</u>
            </strong>{" "}
            {dietaryRestrictions}{" "}
          </p>
        </div>
      </Collapsible>
    </span>
  );
}
