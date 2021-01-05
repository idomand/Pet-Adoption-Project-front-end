import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import "./PetItemCard.css";
import ReactModal from "react-modal";

//=================

export default function PetItemCard(props) {
  const [isOpen, setIsOpen] = useState(false);

  const {
    typeOfAnimal,
    breed,
    petName,
    petHeight,
    petWeight,
    petColor,
    petBio,
    petIsHypoallergenic,
    petIsDietaryRestrictions,
    picture,
    adoptionStatus,
  } = props.animalDetails;

  const openModel = () => {
    setIsOpen(true);
  };
  const closeModel = () => {
    setIsOpen(false);
  };
  const handleReturnToCenter = () => {};

  const handleSavePet = () => {};
  const handleFoster = () => {};
  const handleAdopt = () => {
  };

  return (
    <span className="pet-card-item">
      <h4 className="pet-petName">Name: {petName}</h4>
      <p>Adoption Status: {adoptionStatus}</p>
      <img className="pet-image-small" src={picture} alt={petName} />
      <Button onClick={openModel}>info and actions</Button>

      <ReactModal ariaHideApp={false} isOpen={isOpen}>
        <Button onClick={closeModel}>close</Button>
        <Card>
          <h2>pet Info</h2>
          <Card.Body>
            <div className="extra-info d-flex justify-content-between">
              <div>
                <p>
                  <strong>
                    <u>pet Name:</u>
                  </strong>{" "}
                  {petName}
                </p>
                <p>
                  <strong>
                    <u>pet type:</u>
                  </strong>{" "}
                  {`it is a beautiful ${breed} ${typeOfAnimal}`}
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
                  {`its height is  ${petHeight}, and it weight is ${petWeight} and it is mostly ${petColor}`}
                </p>
                <p>
                  <strong>
                    <u>pet adoption status:</u>
                  </strong>{" "}
                  {adoptionStatus}
                </p>
                <p>
                  <strong>
                    <u> pet Bio: </u>
                  </strong>{" "}
                  {petBio}
                </p>
                <p>
                  <strong>
                    <u>
                      Special Restrictions: <br></br> hypoallergenic?
                    </u>
                  </strong>{" "}
                  {petIsHypoallergenic},
                  <strong>
                    <u>dietaryRestrictions?</u>
                  </strong>{" "}
                  {petIsDietaryRestrictions}
                </p>
              </div>
              <img className="pet-image-big" src={picture} alt={petName} />
            </div>
            <Button onClick={handleReturnToCenter}>
              return to adoption center
            </Button>
            <Button onClick={handleAdopt}>adopt!</Button>
            <Button onClick={handleFoster}>foster!</Button>

            <Button onClick={handleSavePet}>save pet</Button>
          </Card.Body>
        </Card>
      </ReactModal>
    </span>
  );
}
