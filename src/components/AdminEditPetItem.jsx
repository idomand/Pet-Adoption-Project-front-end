import React, { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import mainContext from "../lip/context";
import ReactModal from "react-modal";
import { editUser } from "../lip/api";
// ================

export default function AdminEditPetItem(props) {
  const contextData = useContext(mainContext);
  const [petName, setPetName] = useState(props.animalDetails.petName);
  const [typeOfAnimal, setTypeOfAnimal] = useState(
    props.animalDetails.typeOfAnimal
  );
  // const [petPicture, setPetPicture] = useState(""); // remember: +++ add the function to upload a picture
  const [adoptionStatus, setAdoptionStatus] = useState(
    props.animalDetails.adoptionStatus
  );
  const [breed, setBreed] = useState(props.animalDetails.breed);
  const [petHeight, setPetHeight] = useState(props.animalDetails.petHeight);
  const [petWeight, setPetWeight] = useState(props.animalDetails.petWeight);
  const [petColor, setPetColor] = useState(props.animalDetails.petColor);
  const [petBio, setPetBio] = useState(props.animalDetails.petBio);
  const [petIsHypoallergenic, setPetIsHypoallergenic] = useState(
    props.animalDetails.petIsHypoallergenic
  );
  const [petIsDietaryRestrictions, setPetIsDietaryRestrictions] = useState(
    props.animalDetails.petIsDietaryRestrictions
  );
  const [isEditOpen, setIsEditOpen] = useState(false);

  // ================

  const openEdit = () => {
    setIsEditOpen(true);
  };
  const closeEdit = () => {
    setIsEditOpen(false);
  };
  const onEditPet = async (event) => {
    ("FUNC -__ AdminEditPetItem __ -- onEditPet");

    event.preventDefault();
    const petObjectToEdit = {
      _id: props.animalDetails._id,
      newPetObject: {
        petName,
        typeOfAnimal,
        adoptionStatus,
        breed,
        petHeight,
        petColor,
        petWeight,
        petBio,
        petIsHypoallergenic,
        petIsDietaryRestrictions,
      },
    };
    const petAfterUpdate = await editUser(petObjectToEdit);

    setIsEditOpen(false);
  };

  return (
    <>
      <Button variant="secondary" onClick={openEdit}>
        Edit Pet
      </Button>
      <ReactModal ariaHideApp={false} isOpen={isEditOpen}>
        <Button onClick={closeEdit}>cancel</Button>

        <div className="d-flex">
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Pet Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Pet Name"
                value={petName}
                required
                onChange={(event) => {
                  setPetName(event.target.value);
                }}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
          </Form>

          <Form
            onClick={(event) => {
              setTypeOfAnimal(event.target.value);
            }}
          >
            <Form.Group controlId="exampleForm.SelectCustom">
              <Form.Label>Type of Animal</Form.Label>
              <Form.Control as="select" custom defaultValue={typeOfAnimal}>
                <option> </option>
                <option>dog</option>
                <option>cat</option>
                <option>other</option>
              </Form.Control>
            </Form.Group>
          </Form>
          <Form
            onClick={(event) => {
              setAdoptionStatus(event.target.value);
            }}
          >
            <Form.Group controlId="exampleForm.SelectCustom">
              <Form.Label>Adoption Status</Form.Label>
              <Form.Control as="select" custom defaultValue={adoptionStatus}>
                <option> </option>
                <option>waiting for adaption</option>
                <option>waiting For Foster Home</option>
              </Form.Control>
            </Form.Group>
          </Form>
          <Form
            onClick={(event) => {
              setBreed(event.target.value);
            }}
          >
            <Form.Group controlId="exampleForm.SelectCustom">
              <Form.Label>breed</Form.Label>
              <Form.Control as="select" custom defaultValue={breed}>
                <option> </option>
                <option>mix</option>
                <option>pureBreed</option>
              </Form.Control>
            </Form.Group>
          </Form>

          <Form
            onClick={(event) => {
              setPetColor(event.target.value);
            }}
          >
            <Form.Group controlId="exampleForm.SelectCustom">
              <Form.Label>Pet color</Form.Label>
              <Form.Control as="select" custom defaultValue={petColor}>
                <option> </option>
                <option>Black</option>
                <option>Brown</option>
                <option>White</option>
                <option>mix</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </div>
        <div className="d-flex">
          <Form
            onClick={(event) => {
              setPetHeight(event.target.value);
            }}
          >
            <Form.Group controlId="exampleForm.SelectCustom">
              <Form.Label>Pet Height</Form.Label>
              <Form.Control as="select" custom defaultValue={petHeight}>
                <option> </option>
                <option>Under 20 sm</option>
                <option>20sm to 50sm</option>
                <option>over 50sm</option>
              </Form.Control>
            </Form.Group>
          </Form>
          <Form
            onClick={(event) => {
              setPetWeight(event.target.value);
            }}
          >
            <Form.Group controlId="exampleForm.SelectCustom">
              <Form.Label>Pet Weight</Form.Label>
              <Form.Control as="select" custom defaultValue={petWeight}>
                <option> </option>
                <option>Under 5kg</option>
                <option>5kg to 15kg</option>
                <option>over 15kg</option>
              </Form.Control>
            </Form.Group>
          </Form>

          <Form
            onClick={(event) => {
              setPetBio(event.target.value);
            }}
          >
            <Form.Group controlId="exampleForm.SelectCustom">
              <Form.Label>Pet bio</Form.Label>
              <Form.Control as="select" custom defaultValue={petBio}>
                <option> </option>
                <option>good boy</option>
                <option>bad boy</option>
                <option>great boy</option>
              </Form.Control>
            </Form.Group>
          </Form>
          <Form
            onClick={(event) => {
              setPetIsHypoallergenic(event.target.value);
            }}
          >
            <Form.Group controlId="exampleForm.SelectCustom">
              <Form.Label> Is Hypoallergenic</Form.Label>
              <Form.Control
                as="select"
                custom
                defaultValue={petIsHypoallergenic}
              >
                <option> </option>
                <option>yes</option>
                <option>no</option>
              </Form.Control>
            </Form.Group>
          </Form>
          <Form
            onClick={(event) => {
              setPetIsDietaryRestrictions(event.target.value);
            }}
          >
            <Form.Group controlId="exampleForm.SelectCustom">
              <Form.Label> Is DietaryRestrictions</Form.Label>
              <Form.Control
                as="select"
                custom
                defaultValue={petIsDietaryRestrictions}
              >
                <option> </option>
                <option>yes</option>
                <option>no</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </div>

        <div>
          <Button variant="primary" type="submit" onClick={onEditPet}>
            Edit Pet
          </Button>
        </div>
      </ReactModal>
    </>
  );
}
