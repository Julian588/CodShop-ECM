import "./CardAdmin.css";
import useFormattedPrice from "@hooks/useFormattedPrice";
import ModalEditGame from "@layout/admin/ModalEditGame/ModalEditGame";
import { useState } from "react";

function CardAdmin({ game }) {
  const consolas = game.game_console.split("|").join(" | ");
  const discount = (game.percentage_offer / 100) * game.price_primary;
  const discountedPrice = game.price_primary - discount;
  const formattedPrimaryPrice = useFormattedPrice(game.price_primary);
  const formattedDiscountedPrice = useFormattedPrice(discountedPrice);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <figure className="card_admin-container">
        <div className="img-container">
          <img
            src={"public/caratulaFC24.webp"}
            alt={`Caratula del juego ${game.game_name}`}
          />
        </div>
        <div className="card-content">
          <h2>
            <strong> Titulo:</strong> {game.game_name}
          </h2>
          <h3>
            <strong>Consolas:</strong> <span>{consolas}</span>
          </h3>
          <ul className="price-container">
            <li className="precio-original">
              <strong>Precio original:</strong>{" "}
              <span>${formattedPrimaryPrice}</span>
            </li>
            <li className="precio-oferta">
              <strong>Precio Oferta:</strong>
              <span>${formattedDiscountedPrice || "0"}</span>
            </li>
            <li className="porcentaje-oferta">
              <strong>Porcentaje Oferta:</strong>
              <span>{game.is_offer ? `${game.percentage_offer}%` : "0%"}</span>
            </li>
            <li className="stock">
              <strong>Stock:</strong> <span>{game.game_stock || 0}</span>
            </li>
          </ul>
          <div className="btn-container">
            <button
              className="btn-editar btn"
              type="button"
              onClick={handleShow}
            >
              <i className="fa-solid fa-pen-to-square"></i>
            </button>
            <button className="btn-borrar btn" type="button">
              <i className="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </div>
      </figure>
      <ModalEditGame show={show} handleClose={handleClose} game={game} />
    </>
  );
}

export default CardAdmin;
