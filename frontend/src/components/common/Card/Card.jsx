import "./Card.css";
import { useState } from "react";
import { Link } from "react-router-dom";

import AddToCart from "@layout/AddToCart/AddToCart";
import usePorcentage from "@hooks/usePorcentage";

function Card({ producto }) {
  const porcentajeProducto = usePorcentage(
    producto.precio,
    producto.precioOferta
  );
  const [comprar, setComprar] = useState(false);

  const isClicked = comprar ? true : false;

  const handleOnClick = () => {
    setComprar(!comprar);
  };

  const comprarContainerStyles = comprar
    ? "card-container-comprar show-card-container-comprar"
    : "card-container-comprar";

  return (
    <figure className="card-container">
      <div className="card-caratula">
        <div className="img-container">
          <Link to={`/juegos/${producto.id}`}>
            <img
              src={producto.caratula}
              alt={`Caratula de la imagen ${producto.nombre}`}
              loading="lazy"
            />
          </Link>
        </div>
        {producto.oferta ? (
          <>
            <span>{porcentajeProducto}</span>
          </>
        ) : (
          <></>
        )}
      </div>
      <div className="card-content">
        <h2>
          {producto.nombre} <span className="consola">{producto.consola}</span>
        </h2>
        <div className="price-container">
          {producto.oferta ? (
            <>
              <span
                className="card-price-org"
                style={{
                  textDecoration: "line-through",
                  fontSize: "1.5rem",
                }}
              >
                {"$" + producto.precio}
              </span>
              <span className="card-price-ofe">
                {"$" + producto.precioOferta}
              </span>
            </>
          ) : (
            <span className="card-price-org">{"$" + producto.precio}</span>
          )}
        </div>
        <div className="btn-container">
          <button
            className="btn-comprar"
            type="button"
            onClick={isClicked ? null : handleOnClick}
          >
            Comprar
          </button>
          <Link className="btn-carrito" to={`/juegos/${producto.id}`}>
            Ver mas...
          </Link>
        </div>
      </div>
      <div className={comprarContainerStyles}>
        <AddToCart producto={producto} />
        <button type="button" onClick={handleOnClick}>
          <i className="fa-solid fa-circle-xmark"></i>
        </button>
      </div>
    </figure>
  );
}

export default Card;
