import { Button, ListGroup } from "react-bootstrap";
const ItemTarea = ({ nombreTarea, borrarTarea }) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between mb-3">
      {nombreTarea}
      <Button
        variant="danger"
        size="sm"
        className="BotonEliminar"
        onClick={() => borrarTarea(nombreTarea)}
      >
        X
      </Button>
    </ListGroup.Item>
  );
};

export default ItemTarea;
