import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import "./PetItemCard.css";
import ReactModal from "react-modal";

//=================

export default function PetItemCard(props) {
  const [isOpen, setIsOpen] = useState(false);

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

  const openModel = () => {
    setIsOpen(true);
  };
  const closeModel = () => {
    setIsOpen(false);
  };

  return (
    <span className="pet-card-item">
      <h4 className="pet-name">Name: {name}</h4>
      <p>Adoption Status: {adoptionStatus}</p>
      <img className="pet-image-small" src={picture} alt={name} />
      <Button onClick={openModel}>See all info</Button>

      <ReactModal ariaHideApp={false} isOpen={isOpen}>
        <Button onClick={closeModel}>close</Button>
        <Card>
          <h2>pet Info</h2>
          <Card.Body>
            <div className="extra-info d-flex justify-content-between">
              <div>
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
              <img className="pet-image-big" src={picture} alt={name} />
            </div>
          </Card.Body>
        </Card>
      </ReactModal>
    </span>
  );
}
