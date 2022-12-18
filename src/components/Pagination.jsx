import React from "react";

function Pagination({
  employeesPerPage,
  totalEmployees,
  currentPage,
  setCurrentPage,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalEmployees / employeesPerPage); i++) {
    pageNumbers.push(i);
  }

  const onPreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const onNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const onSpecificPage = (number) => {
    setCurrentPage(number);
  };

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-between">
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <button className="page-link" onClick={onPreviousPage}>
            Anterior
          </button>
        </li>
        <div className="d-flex gap-2">
          {pageNumbers.map((noPage) => (
            <li
              className={`page-item ${noPage === currentPage ? "active" : ""}`}
              key={noPage}
            >
              <button
                className="page-link"
                onClick={() => onSpecificPage(noPage)}
              >
                {noPage}
              </button>
            </li>
          ))}
        </div>
        <li
          className={`page-item ${
            currentPage >= pageNumbers.length ? "disabled" : ""
          }`}
        >
          <button className="page-link" onClick={onNextPage}>
            Siguiente
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
