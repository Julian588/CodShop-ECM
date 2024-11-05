import FormField from "../FormField";
import "../../CSS/admin/addproductform.css";
import { useEffect, useId, useState } from "react";
import useFieldsValues from "../../Hooks/useFieldsValues";

function AddProductForm() {
  const gameGender = [
    {
      name: "Acción",
      value: "accion",
    },
    {
      name: "Aventura",
      value: "aventura",
    },
    {
      name: "Terror",
      value: "terror",
    },
    {
      name: "Deportes",
      value: "deportes",
    },
    {
      name: "RPG",
      value: "rpg",
    },
    {
      name: "Plataformas",
      value: "plataformas",
    },
    {
      name: "Lucha",
      value: "lucha",
    },
    {
      name: "Puzzle",
      value: "puzzle",
    },
    {
      name: "Carreras",
      value: "carreras",
    },
    {
      name: "Simulación",
      value: "simulacion",
    },
  ];
  const gameConsole = [
    {
      name: "Play Station 5",
      value: "PS5",
    },
    {
      name: "Play Station 4",
      value: "PS4",
    },
    {
      name: "Xbox",
      value: "XBOX",
    },
  ];

  const gameNameId = useId();
  const pricePrimaryId = useId();
  const priceSecondaryId = useId();
  const percentageOfferId = useId();
  const consoleId = useId();
  const genderId = useId();
  const isOfferId = useId();
  const stockId = useId();
  const minStockId = useId();

  const [isOffer, setIsOffer] = useState(false);
  const [genderValue, setGenderValue] = useState([]);
  const [consoleValue, setConsoleValue] = useState([]);
  const [addGenderValue, setAddGenderValue] = useState([{ name: "" }]);
  const [addConsoleValue, setAddConsoleValue] = useState([{ name: "" }]);
  const [fields, handleFieldsChange] = useFieldsValues({
    game_name: "",
    price_primary: "",
    price_secondary: "",
    percentage_offer: "",
    stock: "",
    min_stock: "",
  });

  const handleIsOffer = (e) => {
    const isChecked = e.target.checked ? true : false;
    setIsOffer(isChecked);
  };

  const handleSelectValue = (e, setValue, showValue) => {
    const value = e.target.value;
    setValue((prevState) => [...prevState, value]);
    console.log(showValue);
  };

  const handleAddSelect = (selectArray, setSelectArray, selectValue) => {
    if (selectArray.length >= 3) return;
    for (let i = 0; i < selectValue.length; i++) {
      if (selectValue[i] === "") {
        console.log("Error");
        return;
      }
    }
    setSelectArray((prevState) => [...prevState, { name: "" }]);
  };

  const deleteFromSelectArray = (array, setArray) => {
    const newArray = array.splice(index, 1);
    setArray(newArray);
  };
  

  return (
    <form action="" method="POST" className="form-container">
      <div className="info-game">
        <h1 className="title-info_game">Información del Juego</h1>
        <FormField
          name={"game_name"}
          id={gameNameId}
          type={"text"}
          value={fields.game_name}
          onChange={(e) => handleFieldsChange(e, "game_name")}
        >
          Nombre del Juego
        </FormField>

        <div className="form-separator">
          <FormField
            name={"price_primary"}
            type={"number"}
            id={pricePrimaryId}
            icon1={<i className="fa-solid fa-dollar-sign"></i>}
            placeholder={"0.00"}
            value={fields.price_primary}
            onChange={(e) => handleFieldsChange(e, "price_primary")}
          >
            Precio Licencia Primaria
          </FormField>

          <FormField
            name={"price_secondary"}
            type={"number"}
            id={priceSecondaryId}
            icon1={<i className="fa-solid fa-dollar-sign"></i>}
            placeholder={"0.00"}
            value={fields.price_secondary}
            onChange={(e) => handleFieldsChange(e, "price_secondary")}
          >
            Precio Licencia Secundaria
          </FormField>
        </div>

        <div className="form-separator">
          <div className="isOffer-wrapper">
            <label htmlFor="isOffer">En Oferta?</label>
            <div className="checkbox-wrapper">
              <input
                type="checkbox"
                name="isOffer"
                id={isOfferId}
                value={isOffer}
                onChange={handleIsOffer}
              />
              <svg viewBox="0 0 35.6 35.6">
                <circle
                  class="background"
                  cx="17.8"
                  cy="17.8"
                  r="17.8"
                ></circle>
                <circle class="stroke" cx="17.8" cy="17.8" r="14.37"></circle>
                <polyline
                  class="check"
                  points="11.78 18.12 15.55 22.23 25.17 12.87"
                ></polyline>
              </svg>
            </div>
          </div>

          <FormField
            type={"number"}
            name={"percentage_offer"}
            id={percentageOfferId}
            icon2={<i className="fa-solid fa-percent"></i>}
            value={fields.percentage_offer}
            onChange={(e) => handleFieldsChange(e, "percentage_offer")}
          >
            Porcentaje de la Oferta
          </FormField>
        </div>

        <div className="form-separator">
          <FormField
            type={"number"}
            name={"stock"}
            id={stockId}
            placeholder={0}
            value={fields.stock}
            onChange={(e) => handleFieldsChange(e, "stock")}
          >
            Stock
          </FormField>

          <FormField
            type={"number"}
            name={"min_stock"}
            id={minStockId}
            placeholder={0}
            value={fields.min_stock}
            onChange={(e) => handleFieldsChange(e, "min_stock")}
          >
            Stock minimo
          </FormField>
        </div>
      </div>

      <div className="class-game">
        <h2 className="title-class_game">Clasificación del Juego.</h2>
        <div className="select-container">
          <label>Genero</label>
          <div className="select-wrapper">
            {addGenderValue.map((gender, index) => {
              return (
                <>
                  <FormField
                    isSelect={true}
                    name={(gender.name = `game_gender${index}`)}
                    id={genderId}
                    key={index}
                    options={gameGender}
                    onChange={(e) =>
                      handleSelectValue(e, setGenderValue, genderValue)
                    }
                  />
                </>
              );
            })}
            <button
              className="delete-select"
              type="button"
              onClick={() =>
                deleteFromSelectArray(addGenderValue, setAddGenderValue)
              }
            >
              <i className="fa-solid fa-x"></i>
            </button>
            <button
              className="btn-add-select"
              type="button"
              onClick={() =>
                handleAddSelect(addGenderValue, setAddGenderValue, genderValue)
              }
            >
              <i className="fa-solid fa-plus"></i>
            </button>
          </div>
        </div>

        <div className="select-wrapper">
          <FormField
            isSelect={true}
            name={"game_console"}
            options={gameConsole}
          >
            Consola
          </FormField>
          <button className="btn-add-select" type="button">
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
      <div className="image-game">
        <h3 className="title-image-game">Imagen del Juego.</h3>
        <div className="wrapper-image">
          <label htmlFor="">Agrega un imagen del producto.</label>
          <input type="file" />
        </div>
      </div>
      <div className="btn-container">
        <button className="btn-discard btn">Descartar</button>
        <button className="btn-save btn">
          Guardar <i className="fa-solid fa-floppy-disk"></i>
        </button>
      </div>
    </form>
  );
}

export default AddProductForm;
