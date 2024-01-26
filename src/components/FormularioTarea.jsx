import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import ListaTareas from "./ListaTareas";
import { useState, useEffect } from "react";

const FormularioTarea = () => {
  const [tarea, setTarea] = useState("");
  const tareasLocalStorage = (localStorage.getItem('tareasKey')) || []
  const [tareas, setTareas] = useState([tareasLocalStorage]);

  useEffect(()=>{
    console.log('ejecutando useEffect, aqui guardo el localstorage');
    localStorage.setItem('tareasKey',JSON.stringify(tareas));
  }, [tareas])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tarea.trim().length > 0) {
      setTareas([...tareas, tarea]);
      setTarea("");
    } else {
      alert("Debes ingresar al menos una tarea");
    }
  };

  const borrarTarea = (nombreTarea) => {
    const tareasFiltradas = tareas.filter((tarea) => tarea !== nombreTarea);
    setTareas(tareasFiltradas);
  };

  return (
    <section>
      <Form onSubmit={handleSubmit}>
        <Form.Group
          className="mb-3 d-flex"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Control
            type="text"
            placeholder="Ej: Tarea 1"
            minLength={3}
            maxLength={50}
            onChange={(e) => setTarea(e.target.value)}
            value={tarea}
          />
          <Button variant="dark" className="ms-2" type="submit" size="sm">
            Agregar
          </Button>
        </Form.Group>
      </Form>
      <ListaTareas tareasProps={tareas} borrarTarea={borrarTarea}></ListaTareas>
    </section>
  );
};

export default FormularioTarea;
