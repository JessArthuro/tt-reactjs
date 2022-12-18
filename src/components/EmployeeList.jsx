import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import Searcher from "./Searcher";

function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const employeesPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const lastIndex = currentPage * employeesPerPage; // 1 * 10 = 10
  const firstIndex = lastIndex - employeesPerPage; // 10 - 10 = 0

  const [search, setSearch] = useState("");

  const results = !search
    ? employees
    : employees.filter(
        (text) =>
          text.name.toLowerCase().includes(search.toLocaleLowerCase()) ||
          text.last_name.toLowerCase().includes(search.toLocaleLowerCase())
      );

  const totalEmployees = results.length;

  const api =
    "https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees/jesus_arturo";

  useEffect(() => {
    (async function () {
      const response = await fetch(api).then((res) => res.json());
      setEmployees(response.data.employees);
    })();
  }, [api]);

  return (
    <div className="container mt-4 mb-5">
      <div className="mb-3 d-flex justify-content-between align-items-center">
        <div>
          <h1 className="mb-1">Empleados</h1>
          <p className="fw-light">
            Total de resultados:{" "}
            <span className="fw-semibold">{totalEmployees}</span>
          </p>
        </div>
        <button className="btn btn-primary">Añadir</button>
      </div>

      <Searcher
        search={search}
        setSearch={setSearch}
        setCurrentPage={setCurrentPage}
      />

      <div className="table-responsive">
        <table className="table table-bordered">
          <thead className="table-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Birthday</th>
            </tr>
          </thead>
          <tbody>
            {results
              .map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.id}</td>
                  <td>{employee.name}</td>
                  <td>{employee.last_name}</td>
                  <td>{employee.birthday}</td>
                </tr>
              ))
              .slice(firstIndex, lastIndex)}
          </tbody>
        </table>
      </div>

      <Pagination
        employeesPerPage={employeesPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalEmployees={totalEmployees}
      />
    </div>
  );
}

export default EmployeeList;
