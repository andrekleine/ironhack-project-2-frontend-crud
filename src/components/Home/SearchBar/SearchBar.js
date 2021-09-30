import React from "react";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <label>Encontre os melhores produtos e serviços:</label>
      <form className="form">
        <input
          type="text"
          className="form-control"
          id="localidade"
          placeholder="Localidade"
        />
        <input
          type="text"
          className="form-control"
          id="produtoouservico"
          placeholder="Produto ou serviço"
        />
        <button
          type="submit"
          className="btn btn-primary submit"
          style={{ width: "100px" }}
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
