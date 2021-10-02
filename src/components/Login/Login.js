import React from "react";
import "./Login.css";
import { Dropdown } from "react-bootstrap/dist/react-bootstrap.min.js";

const Login = () => {
  const users = ["Amarílis", "André", "Cadu", "Carlos Arantes", "Carol", "Davi", "Eduardo Brandião", "Elaine", "Flavia", "Giovanna", "Guilherme Araújo", "Guilherme Nascimento", "Henrique Mendes", "Henrique Morikawa", "Hina", "João Pedro", "Julia", "Pedro Resch", "Pedro Barbosa", "Piero", "Renan", "Samuel", "Thiago Herculano", "Thiago Morais"];

  return (
    <div className="login">
      <h1>Meus Favoritos</h1>
      <div className="dropdown">
        <Dropdown>
          <Dropdown.Toggle variant="light" id="dropdown-basic">
            Selecione o usuário
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {users.map((user) => (
              <Dropdown.Item key={user} user={user} href="/Home">
                {user}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>        
      </div>
    </div>
  );
};

export default Login;
