import React, { useState /* , useContext  */ } from "react";
import { Form, Button } from "react-bootstrap";
// import mainContext from "../lip/context";
import ReactModal from "react-modal";
import { editUser } from "../lip/api";
// ================

export default function DashboardEditUser(props) {
  // const contextData = useContext(mainContext);
  const [name, setUserName] = useState(props.userDetails.name);
  const [phoneNumber, setPhoneNumber] = useState(props.userDetails.phoneNumber);
  const [email /* , setEmail */] = useState(props.userDetails.email);
  const [isEditOpen, setIsEditOpen] = useState(false);

  // ================

  const openEdit = () => {
    setIsEditOpen(true);
  };
  const closeEdit = () => {
    setIsEditOpen(false);
  };
  const onEditUser = async (event) => {
    event.preventDefault();
    const userObjectToEdit = {
      _id: props.userDetails._id,
      newUserObject: {
        name,
        phoneNumber,
        email,
      },
    };
    const userAfterUpdate = await editUser(userObjectToEdit);
    console.log("userAfterUpdate :>> ", userAfterUpdate);
    setIsEditOpen(false);
  };

  return (
    <>
      <Button variant="secondary" onClick={openEdit}>
        Edit User
      </Button>
      <ReactModal ariaHideApp={false} isOpen={isEditOpen}>
        <Button onClick={closeEdit}>cancel</Button>

        <div className="d-flex">
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter User Name"
                value={name}
                required
                onChange={(event) => {
                  setUserName(event.target.value);
                }}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
          </Form>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>User Phone</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter User Name"
                value={phoneNumber}
                required
                onChange={(event) => {
                  setPhoneNumber(event.target.value);
                }}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
          </Form>
        </div>

        <div>
          <Button variant="primary" type="submit" onClick={onEditUser}>
            Edit User
          </Button>
        </div>
      </ReactModal>
    </>
  );
}
