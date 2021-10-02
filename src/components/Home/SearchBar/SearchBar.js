import { React, useState } from "react";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const [keyWord, setKeyword] = useState({
    query: "",
    near: "",
  });

 // console.log(keyWord);
  return (
    <div className="search-bar">
      <label>Encontre os melhores produtos e serviços:</label>
      <form className="form">
        <input
          type="text"
          className="form-control"
          id="localidade"
          placeholder="Localidade"
          onChange={(e) => setKeyword({...keyWord, near: e.target.value})}
        />
        <input
          type="text"
          className="form-control"
          id="produtoouservico"
          placeholder="Produto ou serviço"
          onChange={(e) => setKeyword({...keyWord, query: e.target.value})}
        />
        <Link to={{ pathname:"/result-page", state: { near: keyWord.near, query: keyWord.query} }}>
          <button
            type="submit"
            className="btn btn-primary submit"
            style={{ width: "100px" }}

          >
            Enviar
          </button>
        </Link>
      </form>
    </div>
  );
};

export default SearchBar;
