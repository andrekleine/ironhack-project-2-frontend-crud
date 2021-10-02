import React from "react";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown } from "react-bootstrap/dist/react-bootstrap.min.js";


const AddFav = (props) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [category, setCategory] = React.useState(null)
    
console.log(props)
console.log(category)

    const showModal = () => {
      setIsOpen(true);
    };
  
    const hideModal = () => {
      setIsOpen(false);
    };

    const handleSelect=(e)=>{
        console.log(Object.values(e.target));
        let temp = Object.values(e.target)
        setCategory(temp[1].children)
      }
const categories = ['Restaurantes & Cafés', 'Bares & Casas Noturnas', 'Pontos Turísticos', 'Serviços', 'Diversos']
    
    return(
        <div>
          <button onClick={showModal}>Add to your fav</button>
      <Modal show={isOpen} onHide={hideModal}>
        <Modal.Body>
        <div className="dropdown">
        <Dropdown onClick={(e) => handleSelect(e)} >
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
          <button>Add</button>
        </Modal.Footer>
      </Modal>

        </div>
    )
}

export default AddFav;