import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown } from "react-bootstrap/dist/react-bootstrap.min.js";
import { useHistory } from "react-router";
import axios from "axios";

const AddFav = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [category, setCategory] = useState(null);
  const [favObj, setFavObj] = useState({
    user: props.user,
    category: '',
    venue: props.venue
  });
  
  console.log('AddFav, category: ',category);

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  const handleSelect = (e) => {
    console.log(Object.values(e.target));
    let temp = Object.values(e.target);
    setCategory(temp[1].children);
  };
  
  const categories = [
    "Restaurantes & Cafés",
    "Bares & Casas Noturnas",
    "Pontos Turísticos",
    "Serviços",
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

  useEffect(() => {
    setFavObj({...favObj, category: category});
  }, [category]);

  return (
    <div>
      <button onClick={showModal}>Add to your fav</button>
      <Modal show={isOpen} onHide={hideModal}>
        <Modal.Body>
          <div className="dropdown">
            <Dropdown onClick={(e) => handleSelect(e)}>
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                Selecione a Categoria
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {categories.map((category) => (
                  <Dropdown.Item eventkey={category} key={category}>
                    {category}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
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
