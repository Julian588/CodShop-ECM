import "./CartItem.css";
import AddMinus from "@layout/AddMinus/AddMinus";
import usePorcentage from "@hooks/usePorcentage";
import useFormattedPrice from "@hooks/useFormattedPrice";
import { Link } from "react-router-dom";
import { useCart } from "@hooks/useCart";
import { useEffect, useState } from "react";

function CartItem({ producto }) {
  const [totalOferta, setTotalOferta] = useState();
  const [totalOriginal, setTotalOriginal] = useState();
  const { removeFromCart } = useCart();
  const procentaje = usePorcentage(producto.precio, producto.precioOferta);

  useEffect(() => {
    const totalPriceOferta = producto.precioOferta * producto.cantidad;
    const totalPriceOriginal = producto.precio * producto.cantidad;

    const totalPriceOfertaFormatted = useFormattedPrice(totalPriceOferta);
    const totalPriceOriginalFormatted = useFormattedPrice(totalPriceOriginal);

    setTotalOferta(totalPriceOfertaFormatted);
    setTotalOriginal(totalPriceOriginalFormatted);
  }, [producto.cantidad, producto.precioOferta, producto.precio]);

  return (
    <li className="cart-item">
      <button
        type="button"
        className="delete-item"
        onClick={() =>
          removeFromCart(producto, producto.consola, producto.licencia)
        }
      >
        <i className="fa-regular fa-trash-can"></i>
      </button>
      <Link to={`/juegos/${producto.id}`}>
        <img
          className="cart-item-img"
          src={producto.caratula}
          alt={`Imagen de la Caratula del juego ${producto.nombre}`}
        />
      </Link>
      <div className="cart-item-price-container">
        <Link to={`/juegos/${producto.id}`} className="cart-item-name">
          <strong>
            {producto.nombre}{" "}
            <span style={{ color: "var(--color-quartery)", fontWeight: 400 }}>
              {producto.consola} ({producto.licencia})
            </span>
          </strong>
        </Link>
        <div className="button-price-container">
          <div className="add-minus-container">
            <AddMinus producto={producto} />
          </div>

          <div className="price-container">
            {producto.oferta ? (
              <>
                <strong
                  className="cart-item-price"
                  style={{ textDecoration: "line-through" }}
                >
                  ${totalOriginal}
                </strong>
                <strong
                  className="cart-item-price"
                  style={{ color: "var(--color-primary)" }}
                >
                  <span>{procentaje}</span>${totalOferta}
                </strong>
              </>
            ) : (
              <strong className="cart-item-price">${totalOriginal}</strong>
            )}
          </div>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
