import { useState } from "react";
import "../styles/card.css";

export const Card = ({
  id,
  img,
  titulo,
  descripcion,
  precio,
  handleAgregar,
  handleQuitar,
  handleAumentar,
  handleDisminuir,
}) => {
  const [added, setadded] = useState(false);

  const clickAgregar = () => {
    handleAgregar()
    setadded(true);
  };
  const clickQuitar = () => {
    handleQuitar()
    setadded(false);
  };

  return (
    <div className="tarjeta">
      <img src={img} alt={titulo} className="tarjeta-imagen" />
      <div key={id} className="tarjeta-contenido">
        <h3 className="tarjeta-titulo">{titulo}</h3>
        <p className="tarjeta-descripcion">{descripcion} </p>
        <p className="tarjeta-precio"> {precio} </p>

        {added ? (
          <button type="button" className="boton-quitar" onClick={clickQuitar}>
            Qitar del carrito
          </button>
        ) : (
          <button
            type="button"
            className="boton-agregar"
            onClick={clickAgregar}
          >
            Agregar al carrito
          </button>
        )}
      </div>
    </div>
  );
};
