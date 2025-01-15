import "./ModalEditGame.css";
import { useId, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FormField from "@layout/FormField/FormField";
import SelectContainer from "@layout/admin/SelectContainer/SelectContainer";
import gameGender from "@lib/gameGender";
import gameConsole from "@lib/gameConsoles";

function ModalEditGame({ handleClose, show, game }) {
  const consoleId = useId();
  const genderId = useId();

  const [genderValue, setGenderValue] = useState([]);
  const [consoleValue, setConsoleValue] = useState([]);
  const [addGenderValue, setAddGenderValue] = useState([{ name: "" }]);
  const [addConsoleValue, setAddConsoleValue] = useState([{ name: "" }]);
  const [isOffer, setIsOffer] = useState(game.is_offer);

  const handleSelectValue = (e, setValue, index) => {
    const value = e.target.value;
    setValue((prevState) => {
      const newArray = [...prevState];
      newArray[index] = value;
      return newArray;
    });
    console.log(inputValues);
  };

  const handleIsOffer = (e) => {
    setIsOffer(e.target.checked);
  };

  const handleCreateProduct = () => {
    setUpdatedGame({
      ...updatedGame,
      is_offer: isOffer,
    });
  };
  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header
        closeButton
        style={{
          backgroundColor: "var(--color-primary)",
          color: "var(--color-terceary)",
        }}
      >
        <Modal.Title style={{ fontSize: "2rem" }}>Editar Juego</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form className="form-edit_game">
          <div className="first-container">
            <FormField
              name={"game_name"}
              type={"text"}
              value={game.game_name}
              onChange={(e) => handleInputChange(e, "game_name")}
            >
              Nombre del Juego
            </FormField>
            <FormField
              name={"price_primary"}
              type={"text"}
              icon1={<i className="fa-solid fa-dollar-sign"></i>}
              placeholder={"0,00"}
              value={game.price_primary}
              onChange={(e) => handlePriceValue(e, "price_primary")}
            >
              Precio Licencia Primaria
            </FormField>
            <FormField
              name={"price_secondary"}
              type={"number"}
              icon1={<i className="fa-solid fa-dollar-sign"></i>}
              placeholder={"0,00"}
              value={game.price_secondary}
              onChange={(e) => handleInputChange(e, "price_secondary")}
            >
              Precio Licencia Secundaria
            </FormField>
            <div className="isOffer-wrapper">
              <label htmlFor="isOffer">En Oferta?</label>
              <div className="checkbox-wrapper">
                <input
                  type="checkbox"
                  name="isOffer"
                  checked={isOffer}
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
              icon2={<i className="fa-solid fa-percent"></i>}
              value={game.percentage_offer}
              onChange={(e) => handleInputChange(e, "percentage_offer")}
            >
              Porcentaje de la Oferta
            </FormField>
            <FormField
              type={"number"}
              name={"stock"}
              placeholder={0}
              value={game.stock}
              onChange={(e) => handleInputChange(e, "stock")}
            >
              Stock
            </FormField>

            <FormField
              type={"number"}
              name={"min_stock"}
              placeholder={0}
              value={game.min_stock}
              onChange={(e) => handleInputChange(e, "min_stock")}
            >
              Stock minimo
            </FormField>
          </div>
          <div className="second-container">
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
            <div className="field-container">
              <label className="label-description" htmlFor="game_description">
                Descripción
              </label>
              <textarea
                className="text-description"
                name="game_description"
                value={game.game_description}
                onChange={(e) => handleInputChange(e, "game_description")}
              />
            </div>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose} style={{backgroundColor:"var(--color-quartery)", fontSize:"1.5rem"}}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={handleClose} style={{backgroundColor:"var(--color-primary)", fontSize:"1.5rem"}}>
          Guardar Cambios
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalEditGame;
