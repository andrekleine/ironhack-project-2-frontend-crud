import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Dropdown,
  DropdownButton,
} from "react-bootstrap/dist/react-bootstrap.min.js";
import { useHistory } from "react-router";
import axios from "axios";

const AddFav = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [favObj, setFavObj] = useState({
    user: props.user,
    category: "",
    venue: props.venue,
  });
  const [title, setTitle] = useState("Selecione a categoria");

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  const handleSelect = (e) => {
    setTitle(e);
    setFavObj({ ...favObj, category: e });
  };

  const categories = [
    "Alimentação",
    "Entretenimento",
    "Esportes/Recreação",
    "Profissionais/Serviços",
    "Diversos",
  ];

  const history = useHistory();

  const handleAdd = () => {
    axios
      .post("https://ironrest.herokuapp.com/meusFavoritos", favObj)
      .then((response) => {
        console.log(response);
        history.push("/home");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <button onClick={showModal}>Add to your fav</button>
      <Modal show={isOpen} onHide={hideModal}>
        <Modal.Body>
          <div className="dropdown">
            <DropdownButton
              title={title}
              id="dropdown-button-drop"
              onSelect={handleSelect}
              style={{ width: "200px" }}
            >
              {categories.map((category) => (
                <Dropdown.Item eventKey={category} key={category}>
                  {category}
                </Dropdown.Item>
              ))}
            </DropdownButton>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={hideModal}>return</button>
          <button onClick={handleAdd}>Add</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddFav;
