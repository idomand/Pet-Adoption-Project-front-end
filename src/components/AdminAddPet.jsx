import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import mainContext from "../lip/context";
import { addNewPet, uploadImage, getPetImages } from "../lip/api";
import ReactModal from "react-modal";
import "./AdminAddPet.css";
// ================

export default function AdminAddPet() {
  const [petName, setPetName] = useState("");
  const [typeOfAnimal, setTypeOfAnimal] = useState("");
  const [adoptionStatus, setAdoptionStatus] = useState("");
  const [breed, setBreed] = useState("");
  const [petHeight, setPetHeight] = useState("");
  const [petWeight, setPetWeight] = useState("");
  const [petColor, setPetColor] = useState("");
  const [petBio, setPetBio] = useState("");
  const [petIsHypoallergenic, setPetIsHypoallergenic] = useState("");
  const [petIsDietaryRestrictions, setPetIsDietaryRestrictions] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const [fileInputState, setFileInputState] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const [previewSource, setPreviewSource] = useState("");

  const openModel = () => {
    setIsOpen(true);
  };
  const closeModel = () => {
    setIsOpen(false);
  };
  const onAddPet = async (event) => {
    event.preventDefault();

    const newPet = {
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
    };
    const result = await addNewPet(newPet);
    setIsOpen(false);
  };

  const previewFile = (file) => {

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPreviewSource(reader.result);
    };
  };

  const handleSubmitFile = async (event) => {

    event.preventDefault();
    if (!selectedFile) {
      return;
    }
    const uploadStatus = await uploadImage(previewSource);
  };

  const handleFileChange = (event) => {

    event.preventDefault();
    const file = event.target.files[0];
    previewFile(file);
    setSelectedFile(file);
  };

  return (
    <>
      <Button variant="success" onClick={openModel}>
        Add New Pet
      </Button>

      <ReactModal ariaHideApp={false} isOpen={isOpen}>
        <Button onClick={closeModel}>cancel</Button>

        <div className="d-flex">
          <form onSubmit={handleSubmitFile}>
            <input
              className="image-input"
              id="fileInput"
              type="file"
              name="image"
              onChange={handleFileChange}
              value={fileInputState}
            />
            <Button type="submit">Submit</Button>
          </form>
          {previewSource && (
            <img src={previewSource} alt="pet" style={{ height: "100px" }} />
          )}

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
              <Form.Control as="select" custom>
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
              <Form.Control as="select" custom>
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
              <Form.Control as="select" custom>
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
              <Form.Control as="select" custom>
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
              <Form.Control as="select" custom>
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
              <Form.Control as="select" custom>
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
              <Form.Control as="select" custom>
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
              <Form.Control as="select" custom>
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
              <Form.Control as="select" custom>
                <option> </option>
                <option>yes</option>
                <option>no</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </div>

        <div>
          <Button variant="primary" type="submit" onClick={onAddPet}>
            Add New Pet
          </Button>
        </div>
      </ReactModal>
    </>
  );
}
