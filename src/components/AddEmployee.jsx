import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddEmployee = () => {
  const form = useRef(null);
  const navigation = useNavigate();

  const [startDate, setStartDate] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const data = {
      name: formData.get("name"),
      last_name: formData.get("last_name"),
      birthday: formData.get("birthday"),
    };
    console.log(data);

    // try {
    //   let config = {
    //     method: "POST",
    //     headers: {
    //       Accept: "application/json",
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    //   };

    //   let res = await fetch(
    //     "https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees/jesus_arturo",
    //     config
    //   );
    //   let json = await res.json();
    //   navigation("/employees", { replace: true });
    //   console.log(json);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <div className="container mt-5">
      <form
        className="row"
        onSubmit={handleSubmit}
        ref={form}
        autoComplete="off"
      >
        <h1 className="mb-3">Nuevo Empleado</h1>
        <div className="col-md-6 col-lg-4 mb-2">
          <label htmlFor="inputName" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            name="name"
            placeholder="Ingresa el nombre..."
            required
          />
        </div>
        <div className="col-md-6 col-lg-5 mb-2">
          <label htmlFor="inputLastName" className="form-label">
            Apellidos
          </label>
          <input
            type="text"
            className="form-control"
            id="inputLastName"
            name="last_name"
            placeholder="Ingresa los apellidos..."
            required
          />
        </div>
        <div className="col-12 col-md-4 col-lg-3 mb-2">
          <label htmlFor="inputDate" className="form-label">
            Fecha de nacimiento
          </label>
          <DatePicker
            dateFormat="yyyy/MM/dd"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            placeholderText="Selecciona la fecha..."
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
            maxDate={new Date()}
            className="form-control date_input"
            name="birthday"
            id="inputDate"
            required
          />
        </div>

        <div className="col-12 my-3">
          <Link className="btn btn-danger me-2" to="/employees">
            Cancelar
          </Link>
          <button type="submit" className="btn btn-primary">
            Añadir
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEmployee;
