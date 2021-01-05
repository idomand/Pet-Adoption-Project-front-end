import React, { useState, useContext } from "react";
import { Button, Table } from "react-bootstrap";
import mainContext from "../lip/context";
import ReactModal from "react-modal";
import { getAllPets } from "../lip/api";
import AdminEditPetItem from "./AdminEditPetItem";
// ================

export default function AdminEditPet() {
  const contextData = useContext(mainContext);
  const [isOpen, setIsOpen] = useState(false);
  const [allPetsArray, setAllPetsArray] = useState([]);
  const getPets = async () => {
    const result = await getAllPets();
    setAllPetsArray(result);
  };
  const openModel = () => {
    setIsOpen(true);
    getPets();
  };
  const closeModel = () => {
    setIsOpen(false);
  };
  return (
    <>
      <Button variant="success" onClick={openModel}>
        Edit Pet
      </Button>
      <ReactModal ariaHideApp={false} isOpen={isOpen}>
        <Button onClick={closeModel}>cancel</Button>

        <div className="pet-card-div">
          <Table id="students">
            <tbody>
              {allPetsArray
                ? allPetsArray.map((element) => {
                    const { petName, typeOfAnimal, _id } = element;
                    return (
                      <tr key={_id}>
                        <td>{petName}</td>
                        <td>{typeOfAnimal}</td>
                        <td>{_id}</td>
                        <td>
                          {" "}
                          <AdminEditPetItem animalDetails={element} />
                        </td>
                      </tr>
                    );
                  })
                : ""}
            </tbody>
          </Table>
        </div>
      </ReactModal>
    </>
  );
}
