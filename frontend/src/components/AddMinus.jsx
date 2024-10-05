import "../css/addminus.css";
import { useState } from "react";
import { useCart } from "./Hooks/useCart";

function AddMinus({ producto }) {
  const { updateItemQuantity } = useCart();
  let [value, setValue] = useState(producto.cantidad || 1);

  const handleOnClickMinus = () => {
    if (value > 1) {
      setValue(value - 1);
      updateItemQuantity(
        producto.id,
        producto.cantidad - 1,
        producto.consola,
        producto.licencia
      );
    }
  };
  const handleOnClickPlus = () => {
    setValue(value + 1);
    updateItemQuantity(
      producto.id,
      producto.cantidad + 1,
      producto.consola,
      producto.licencia
    );
  };
  const handleOnChange = (e) => {
    const newValue = Number(e.target.value);
    if (newValue >= 1) {
      setValue(newValue);
    }
  };
  return (
    <div className="carrito-add">
      <button className="minus-icon" type="button" onClick={handleOnClickMinus}>
        <i className="fa-solid fa-minus"></i>
      </button>
      <input type="numeric" value={value} onChange={handleOnChange} />
      <button className="plus-icon" type="button" onClick={handleOnClickPlus}>
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
}

export default AddMinus;
