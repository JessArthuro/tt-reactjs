import React, { useState } from "react";
import PropTypes from "prop-types";
import Swal from "sweetalert2";
import { MdOutlineClose } from "react-icons/md";
import "../styles/drop-file-input.css";
import svgUpload from "../assets/file-upload.svg";

const DropFileInput = (props) => {
  const [fileList, setFileList] = useState([]);

  const [highlight, setHighlight] = useState(false);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setHighlight(true);
    } else if (e.type === "dragleave") {
      setHighlight(false);
    }
  };

  // Funcion para controlar cuando se suelta el archivo.
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    let dt = e.dataTransfer;
    let files = dt.files;
    handleFiles(files);
    setHighlight(false);
  };

  // Funcion cuando buscas un archivo desde el input tipo file.
  const onFileDrop = (e) => {
    const files = e.target.files;
    handleFiles(files);
  };

  const handleFiles = (files) => {
    let photosArr = [];
    for (let file of files) {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.addEventListener("load", () => {
        let fileobj = {
          name: file.name,
          type: file.type,
          size: file.size,
          src: reader.result,
        };
        if (
          fileobj.type === "image/jpg" ||
          fileobj.type === "image/jpeg" ||
          fileobj.type === "image/png"
        ) {
          photosArr.push(fileobj);
          const updatedList = [...fileList, ...photosArr];
          setFileList(updatedList);
          props.onFileChange(updatedList);
        } else {
          Swal.fire({
            icon: "error",
            title: "¡El tipo de archivo es incorrecto!",
            text: "Solo se permiten imágenes: jpg, jpeg y png.",
          });
        }
      });
    }
  };

  const fileRemove = (file) => {
    const updatedList = [...fileList];
    updatedList.splice(fileList.indexOf(file), 1);
    setFileList(updatedList);
    props.onFileChange(updatedList);
  };

  return (
    <>
      <div
        className={`${
          highlight ? "dragover" : ""
        } drop_file_input text-center py-4 px-2 mb-5`}
        onDragEnter={handleDrag}
        onDragOver={handleDrag}
        onDragLeave={handleDrag}
        onDrop={handleDrop}
      >
        <img className="mb-3" src={svgUpload} alt="" />
        <h5 className="mb-1">Drag and Drop files here</h5>
        <p>Accepted File Type: jpg / jpeg / png</p>
        <div>
          <label className="btn btn-secondary" htmlFor="input-file">
            Choose File
          </label>
          <input
            type="file"
            id="input-file"
            accept="image/*"
            multiple
            hidden
            onChange={onFileDrop}
          />
        </div>
      </div>

      {fileList.length > 0 && (
        <div className="drop_file_preview mb-5">
          <h5 className="mb-3">Ready to save</h5>
          <div className="preview_grid">
            {fileList.map((item, index) => (
              <div key={index} className="preview_item">
                <img src={item.src} alt="" />
                <button
                  className="preview_delete"
                  onClick={() => fileRemove(item)}
                >
                  <MdOutlineClose />
                </button>
              </div>
            ))}
          </div>
          <div className="d-flex justify-content-center mt-4">
            <button className="btn btn-primary">Save</button>
          </div>
        </div>
      )}
    </>
  );
};

DropFileInput.propTypes = {
  // PropTypes es un mecanismo que asegura que el valor pasado es del tipo de datos correcto. Esto asegura que la consola no reciba un error al final de nuesta aplicacion.
  onFileChange: PropTypes.func,
};

export default DropFileInput;
