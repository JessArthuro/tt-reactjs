import React from "react";

function Searcher({ search, setSearch, setCurrentPage }) {
  return (
    <div className="input-group mb-4">
      <input
        type="text"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setCurrentPage(1);
        }}
        className="form-control"
        placeholder="Buscar empleado..."
       />
    </div>
  );
}

export default Searcher;
