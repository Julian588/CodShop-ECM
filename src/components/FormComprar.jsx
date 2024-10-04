import "../css/formcomprar.css";
import AddMinus from "./AddMinus";
import { useCart } from "./Hooks/useCart";
import { useState } from "react";

function FormComprar({ producto, showAdd = false }) {
  const consola = producto.consola.split("|");
  const [valueConsola, setValueConsola] = useState();
  const [valueLicencia, setValueLicencia] = useState();

  const { addCart } = useCart();

  const wrapperClassName = showAdd
    ? "select-wrapper"
    : "select-wrapper-no-show";
  const containerBtnClassName = showAdd
    ? "button-container"
    : "button-container-no-show";

  const handleOnClick = (e) => {
    e.preventDefault();
    if (!valueConsola || !valueLicencia) return;
    else {
      addCart(
        { ...producto, consola: valueConsola, licencia: valueLicencia },
        valueConsola,
        valueLicencia
      );
    }
  };

  return (
    <form className="card-container-comprar-form" onSubmit={handleOnClick}>
      <div className={wrapperClassName}>
        <div className="container-consola">
          <label htmlFor="juego-consola">Consola</label>
          <select
            name="Consola"
            id="juego-consola"
            onChange={(e) => {
              setValueConsola(e.target.value);
            }}
            required
          >
            <option value=""></option>
            {consola.map((consola, index) => {
              return (
                <option value={consola} key={index}>
                  {consola}
                </option>
              );
            })}
          </select>
        </div>
        <div className="container-licencia">
          <label htmlFor="licencia">Licencia</label>
          <select
            name="licencia"
            id="juego-licencia"
            onChange={(e) => {
              setValueLicencia(e.target.value);
            }}
            required
          >
            <option value=""></option>
            <option value="Primaria">Primaria</option>
            <option value="Secundaria">Secundaria</option>
          </select>
        </div>
      </div>
      <div className={containerBtnClassName}>
        <div className="add-minus-container">
          {showAdd ? <AddMinus producto={producto} /> : <></>}
        </div>
        <button className="add-carrito">Agregar al carrito</button>
      </div>
    </form>
  );
}

export default FormComprar;
