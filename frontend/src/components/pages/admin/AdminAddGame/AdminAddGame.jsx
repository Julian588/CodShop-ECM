import "./AdminAddGame.css";
import { useId, useState } from "react";
import useFieldsValues from "@hooks/useFieldsValues";
import SelectContainer from "@layout/admin/SelectContainer/SelectContainer";
import FormField from "@layout/FormField/FormField";
import { Toaster, toast } from "sonner";
import { useGameStore } from "@store/game";

function AdminAddGame() {
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
  const [fields, setFields, handleFieldsChange] = useFieldsValues({
    game_name: "",
    price_primary: "",
    price_secondary: "",
    is_offer: false,
    percentage_offer: "",
    stock: "",
    min_stock: "",
    game_gender: "",
    game_console: "",
  });

  const handleIsOffer = (e) => {
    const isChecked = e.target.checked ? true : false;
    setIsOffer(isChecked);
  };

  const handleSelectValue = (e, setValue, index) => {
    const value = e.target.value;
    setValue((prevState) => {
      const newArray = [...prevState];
      newArray[index] = value;
      return newArray;
    });
  };

  const { createGame } = useGameStore();

  const handleCreateGame = async (e) => {
    e.preventDefault();
    const gameGender = genderValue.join(" ");
    const gameConsole = consoleValue.join(" ");
    fields.game_gender = gameGender;
    fields.game_console = gameConsole;
    fields.is_offer = isOffer;

    console.log(fields);

    const { success, message } = await createGame(fields);
    if (!success) {
      toast.error("Error", {
        description: message,
        richColors: true,
      });
    } else {
      toast.success("Éxito", {
        description: message,
        richColors: true,
      });
    }

    setIsOffer(false);
    setFields({
      game_name: "",
      price_primary: "",
      price_secondary: "",
      is_offer: false,
      percentage_offer: "",
      stock: "",
      min_stock: "",
      game_gender: "",
      game_console: "",
    });
  };

  return (
    <>
      <Toaster />
      <form className="add-game-form">
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
                    className="background"
                    cx="17.8"
                    cy="17.8"
                    r="17.8"
                  ></circle>
                  <circle
                    className="stroke"
                    cx="17.8"
                    cy="17.8"
                    r="14.37"
                  ></circle>
                  <polyline
                    className="check"
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
          <SelectContainer
            title={"Genero"}
            valuesArray={gameGender}
            arraySelect={addGenderValue}
            setArraySelect={setAddGenderValue}
            value={genderValue}
            setValue={setGenderValue}
            fieldId={genderId}
            handleSelectValue={handleSelectValue}
          />
          <SelectContainer
            title={"Consola"}
            valuesArray={gameConsole}
            arraySelect={addConsoleValue}
            setArraySelect={setAddConsoleValue}
            value={consoleValue}
            setValue={setConsoleValue}
            fieldId={consoleId}
            handleSelectValue={handleSelectValue}
          />
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
          <button className="btn-save btn" onClick={(e) => handleCreateGame(e)}>
            Guardar <i className="fa-solid fa-floppy-disk"></i>
          </button>
        </div>
      </form>
    </>
  );
}

export default AdminAddGame;
