import "./Login.css";
import {
  Dropdown,
  DropdownButton,
} from "react-bootstrap/dist/react-bootstrap.min.js";
import { Link } from "react-router-dom";

const Login = (props) => {
  const users = [
    "Amarílis",
    "André",
    "Cadu",
    "Carlos Arantes",
    "Carol",
    "Davi",
    "Eduardo Brandião",
    "Elaine",
    "Flavia",
    "Giovanna",
    "Guilherme Araújo",
    "Guilherme Nascimento",
    "Henrique Mendes",
    "Henrique Morikawa",
    "Hina",
    "João Pedro",
    "Julia",
    "Pedro Resch",
    "Pedro Barbosa",
    "Piero",
    "Renan",
    "Samuel",
    "Thiago Herculano",
    "Thiago Morais",
  ];

  const handleSelect = (e) => {
    props.setUser(e);
  };

  return (
    <div className="login">
      <h1>Meus Favoritos</h1>
      <div className="dropdown">
        <DropdownButton
          title="Escolha o usuario"
          id="dropdown-button-drop"
          onSelect={handleSelect}
        >
          {users.map((user) => (
            <Dropdown.Item eventKey={user} key={user} user={user}>
              {user}
            </Dropdown.Item>
          ))}
        </DropdownButton>
        <button type="button" className="btn btn-primary">
          <Link to="/home" style={{ textDecoration: "none", color: "white" }}>
            Entrar
          </Link>
        </button>
      </div>
      <div className="box"></div>
    </div>
  );
};

export default Login;
