import "./AdminAddGame.css";
import { useId, useState } from "react";
import useFieldsValues from "@hooks/useFieldsValues";
import FormField from "@layout/FormField/FormField";
import { Toaster, toast } from "sonner";
import { useGameStore } from "@store/game";
import gameGender from "@lib/gameGender";
import gameConsole from "@lib/gameConsoles";
import numeral from "numeral";
import "numeral/locales/es";
import Select from "@layout/Select/Select";
import Checkbox from "../../../layout/Checkbox/Checkbox";

function AdminAddGame() {
  numeral.locale("es");
  numeral.localeData().delimiters = {
    thousands: ".",
    decimal: ",",
  };

  const { createGame } = useGameStore();

  const gameNameId = useId();
  const pricePrimaryId = useId();
  const priceSecondaryId = useId();
  const percentageOfferId = useId();
  const stockId = useId();
  const minStockId = useId();

  const [tagsGender, setTagsGender] = useState([]);
  const [tagsConsole, setTagsConsole] = useState([]);
  const [isOffer, setIsOffer] = useState(false);

  const [valueToShow, setValueToShow] = useState({
    price_primary: "",
    price_secondary: "",
  });
  const [inputValues, setInputValues, handleInputChange] = useFieldsValues({
    game_name: "",
    full_game_name: "",
    price_primary: "",
    price_secondary: "",
    is_offer: false,
    percentage_offer: "",
    game_stock: "",
    game_min_stock: "",
    game_gender: "",
    game_console: "",
  });
  const handlePriceValue = (e, price) => {
    const value = e.target.value;
    const formatted = numeral(value).format("0,0");
    const valueToSave = parseInt(value.replace(/[.]/g, ""));

    setInputValues((prevState) => ({
      ...prevState,
      [price]: valueToSave,
    }));
    setValueToShow((prevState) => {
      return { ...prevState, [price]: formatted };
    });
  };

  const handleIsOffer = (e) => {
    const isChecked = e.target.checked ? true : false;
    setIsOffer(isChecked);
  };

  const updateInputValues = (updatedValues) => {
    return new Promise((resolve) => {
      setInputValues((prevState) => {
        const newState = { ...prevState, ...updatedValues };
        resolve(newState);
        return newState;
      });
    });
  };

  const handleCreateGame = async (e) => {
    e.preventDefault();
    const gameGender = tagsGender.map((tag) => tag.name).join(" ");
    const gameConsole = tagsConsole.map((tag) => tag.value).join(" ");
    const fullGameName = inputValues.game_name.split(" ").join("");

    const updatedValues = await updateInputValues({
      ...inputValues,
      full_game_name: fullGameName,
      game_gender: gameGender,
      game_console: gameConsole,
      is_offer: isOffer,
    });

    const { success, message } = await createGame(updatedValues);
    if (!success) {
      toast.error("Error", {
        description: message,
        richColors: true,
        position: "bottom-center",
      });
    } else {
      toast.success("Éxito", {
        description: message,
        richColors: true,
        position: "bottom-center",
      });
      setIsOffer(false);
      setInputValues({
        game_name: "",
        price_primary: "",
        price_secondary: "",
        is_offer: false,
        percentage_offer: "",
        stock: "",
        min_stock: "",
        game_gender: "",
        game_console: "",
        game_description: "",
      });
      setValueToShow({
        price_primary: "",
        price_secondary: "",
      });
      setAddGenderValue([{ name: "" }]);
      setAddConsoleValue([{ name: "" }]);
    }
  };

  return (
    <>
      <Toaster />
      <form className="add-game-form" onSubmit={(e) => handleCreateGame(e)}>
        <div className="info-game">
          <h1 className="title-info_game">Información del Juego</h1>
          <FormField
            name={"game_name"}
            id={gameNameId}
            type={"text"}
            value={inputValues.game_name}
            onChange={(e) => handleInputChange(e, "game_name")}
          >
            Nombre del Juego
          </FormField>

          <div className="form-separator">
            <FormField
              name={"price_primary"}
              type={"text"}
              id={pricePrimaryId}
              icon1={<i className="fa-solid fa-dollar-sign"></i>}
              placeholder={"0.00"}
              value={valueToShow.price_primary}
              onChange={(e) => handlePriceValue(e, "price_primary")}
            >
              Precio Licencia Primaria
            </FormField>

            <FormField
              name={"price_secondary"}
              type={"text"}
              id={priceSecondaryId}
              icon1={<i className="fa-solid fa-dollar-sign"></i>}
              placeholder={"0.00"}
              value={valueToShow.price_secondary}
              onChange={(e) => handlePriceValue(e, "price_secondary")}
            >
              Precio Licencia Secundaria
            </FormField>
          </div>

          <div className="form-separator checkbox">
            <Checkbox isOffer={isOffer} handleIsOffer={handleIsOffer} />

            <FormField
              type={"number"}
              name={"percentage_offer"}
              id={percentageOfferId}
              icon2={<i className="fa-solid fa-percent"></i>}
              value={inputValues.percentage_offer}
              onChange={(e) => handleInputChange(e, "percentage_offer")}
            >
              Porcentaje de la Oferta
            </FormField>
          </div>

          <div className="form-separator">
            <FormField
              type={"number"}
              name={"game_stock"}
              id={stockId}
              placeholder={0}
              value={inputValues.game_stock}
              onChange={(e) => handleInputChange(e, "game_stock")}
            >
              Stock
            </FormField>

            <FormField
              type={"number"}
              name={"game_min_stock"}
              id={minStockId}
              placeholder={0}
              value={inputValues.game_min_stock}
              onChange={(e) => handleInputChange(e, "game_min_stock")}
            >
              Stock mínimo
            </FormField>
          </div>
          <div className="field-container">
            <label className="label-description" htmlFor="game_description">
              Descripción
            </label>
            <textarea
              className="text-description"
              name="game_description"
              id={""}
              value={inputValues.game_description}
              onChange={(e) => handleInputChange(e, "game_description")}
            />
          </div>
        </div>

        <div className="class-game">
          <h2 className="title-class_game">Clasificación del Juego.</h2>
          <div className="select-wrapper">
            <label className="field-label">Genero</label>
            <Select
              options={gameGender}
              tags={tagsGender}
              setTags={setTagsGender}
            />
          </div>
          <div className="select-wrapper">
            <label className="field-label">Consolas</label>
            <Select
              options={gameConsole}
              tags={tagsConsole}
              setTags={setTagsConsole}
            />
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
    </>
  );
}

export default AdminAddGame;
