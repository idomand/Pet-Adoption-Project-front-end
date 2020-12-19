import React, { useState } from "react";
import { Form, Button, Card, Alert, Collapse } from "react-bootstrap";
import pic from "../pictures/background.jpg";
import "./PetItemCard.css";
export default function PetItemCard(props) {
  const { name, type, picture, adoptionStatus } = props.animalDetails;
  const [open, setOpen] = useState(false);
  const path1 =
    "C:UsersidoDesktopITC_octber_2020FullStackpet-adoption-projectpet-adoption-front-end-idomandsrc";

  const path =
    "C\\Users\\ido\\Desktop\\ITC_octber_2020\\FullStack\\pet-adoption-project\\pet-adoption-front-end-idomand\\src\\pictures\\background.jpg";
  const handleSeeMore = () => {
    console.log("props.animalDetails", props.animalDetails);
  };
  return (
    <>
      <h4 className="pet-name">Name: {name}</h4>
      <img src={path} alt={name + " is a good " + type} />
      <p>Adoption Status: {adoptionStatus}</p>
      <Button onClick={handleSeeMore}>See more</Button>







      {/* <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        click
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </div>
      </Collapse> */}
    </>
  );
}
// {
//     type: "cat",
//     breed: "mixed",
//     name: "loi",
//     adoptionStatus: "dead",
//     picture: "../pictures/loi1.jpg",
//     height: 20,
//     weight: 5,
//     color: "black and white",
//     bio: "kind of shitty, but he was okay",
//     hypoallergenic: "no",
//     dietaryRestrictions: "none",
//   },
