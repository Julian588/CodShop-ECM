import "../css/formcomprar.css";
import AddMinus from "./AddMinus";
import { useCart } from "./Hooks/useCart";

function FormComprar({ producto, showAdd = false }) {
  const consola = producto.consola.split("|");
  const { addCart } = useCart();


  return (
    <form className="card-container-comprar-form">
      <div className="container-consola">
        <label htmlFor="juego-consola">Consola</label>
        <select name="Consola" id="juego-consola">
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
        <select name="licencia" id="juego-licencia">
          <option value=""></option>
          <option value="primaria">Primaria</option>
          <option value="secundaria">Secundaria</option>
        </select>
      </div>
      <div className="button-container">
        {showAdd ? <AddMinus producto={producto} /> : <></>}
        <button
          className="add-carrito"
          type="button"
          onClick={() => addCart(producto)}
        >
          Agregar al carrito
        </button>
      </div>
    </form>
  );
}

export default FormComprar;
