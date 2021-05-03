import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
// import mainContext from "../lip/context";
import ReactModal from "react-modal";
import { getAllUsers } from "../lip/api";
import DashboardEditUser from "./DashboardEditUser";
// ============
// ============

export default function DashboardListOfUsers() {
  // const contextData = useContext(mainContext);
  const [isOpen, setIsOpen] = useState(false);
  const [allUsersArray, setAllUsersArray] = useState("");
  // ============
  // ============

  const showUsers = async () => {
    const result = await getAllUsers();
    await setAllUsersArray(result);
  };
  const openModel = () => {
    setIsOpen(true);
    showUsers();
  };
  const closeModel = () => {
    setIsOpen(false);
  };
  return (
    <>
      <Button variant="success" onClick={openModel}>
        show all users
      </Button>
      <ReactModal ariaHideApp={false} isOpen={isOpen}>
        <Button onClick={closeModel}>cancel</Button>
        <div className="pet-card-div">
          <Table id="students">
            <tbody>
              {allUsersArray
                ? allUsersArray.map((element) => {
                    const { email, name, phoneNumber, _id } = element;
                    return (
                      <tr key={_id}>
                        <td>{name}</td>
                        <td>{phoneNumber}</td>
                        <td>{email}</td>
                        <td>{_id}</td>
                        <td>
                          {" "}
                          <DashboardEditUser userDetails={element} />
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
