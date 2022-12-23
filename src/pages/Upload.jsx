import DropFileInput from "../components/DropFileInput";

function Upload() {
  const onFileChange = (files) => {
    console.log(files);
  };

  // Evitar que si arrastras un archivo y lo sueltas fuera del area indicada, el archivo no se abra en una pestaña nueva.
  const handleDrag = (e) => {
    e.preventDefault();
  };

  return (
    <section
      style={{ minHeight: "90vh" }}
      onDragOver={handleDrag}
      onDrop={handleDrag}
    >
      <div className="container pt-4">
        <h1>Upload</h1>
        <p>seccion para subir las imagenes</p>

        <DropFileInput onFileChange={(files) => onFileChange(files)} />
      </div>
    </section>
  );
}

export default Upload;
