import React from "react";
import usePorcentage from "../../Hooks/usePorcentage";

function CardAdmin({ product }) {
  const consolas = product.consola.split("|").join(" | ");

  const porcentaje = usePorcentage(product.precio, product.precioOferta);

  return (
    <figure className="card_admin-container">
      <div className="img-container">
        <img
          src={product.caratula}
          alt={`Caratula de la imagen ${product.nombre}`}
        />
      </div>
      <div className="card-content">
        <h2>
          <strong> Titulo:</strong> {product.nombre}
        </h2>
        <h3>
          <strong>Consolas:</strong> <span>{consolas}</span>
        </h3>
        <ul className="price-container">
          <li className="precio-original">
            <strong>Precio original:</strong> <span>${product.precio}</span>
          </li>
          <li className="precio-oferta">
            <strong>Precio Oferta:</strong>
            <span>${product.precioOferta || "0"}</span>
          </li>
          <li className="porcentaje-oferta">
            <strong>Porcentaje Oferta:</strong>
            <span>{product.oferta ? porcentaje : "0%"}</span>
          </li>
          <li className="stock">
            <strong>Stock:</strong> <span>0</span>
          </li>
        </ul>
        <div className="btn-container">
          <button className="btn-editar btn" type="button">
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
          <button className="btn-borrar btn" type="button">
            <i className="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </div>
    </figure>
  );
}

export default CardAdmin;
