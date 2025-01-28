import "./ModalEditGame.css";
import { useId, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FormField from "@layout/FormField/FormField";
import gameGender from "@lib/gameGender";
import gameConsole from "@lib/gameConsoles";
import Checkbox from "../../Checkbox/Checkbox";
import useFieldsValues from "@hooks/useFieldsValues";
import Select from "../Select/Select";

function ModalEditGame({ handleClose, show, game }) {
  const [updatedGame, setUpdatedGame] = useState(game);
  const [isOffer, setIsOffer] = useState(updatedGame.is_offer);
  const handleIsOffer = (e) => {
    setIsOffer(e.target.checked);
  };

  const gameGenderOptions = game.game_gender.split(" ");
  const gameConsoleOptions = game.game_console.split(" ");
  const gameOptions = (options, totalOptions) => {
    const filteredConsoles = totalOptions.filter((console) => {
      return options.includes(console.value);
    });
    return filteredConsoles;
  };
  const [tagsGender, setTagsGender] = useState(
    gameOptions(gameGenderOptions, gameGender)
  );
  const [tagsConsole, setTagsConsole] = useState(
    gameOptions(gameConsoleOptions, gameConsole)
  );

  const [inputValues, setInputValues, handleInputChange] = useFieldsValues({
    game_name: game.game_name,
    full_game_name: game.game_name,
    price_primary: game.price_primary,
    price_secondary: game.price_secondary,
    is_offer: game.is_offer,
    percentage_offer: game.percentage_offer,
    game_stock: game.game_stock,
    game_min_stock: game.game_min_stock,
    game_gender: "",
    game_console: "",
  });

  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="xl"
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

            <FormField
              type={"number"}
              name={"percentage_offer"}
              icon2={<i className="fa-solid fa-percent"></i>}
              value={game.percentage_offer}
              onChange={(e) => handleInputChange(e, "percentage_offer")}
            >
              Porcentaje de la Oferta
            </FormField>

            <Checkbox isOffer={isOffer} handleIsOffer={handleIsOffer} />
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
              Stock mínimo
            </FormField>
          </div>
          <div className="second-container">
            <div className="field-separator">
              <label className="label-description">Genero</label>
              <Select
                options={gameGender}
                tags={tagsGender}
                setTags={setTagsGender}
              />
            </div>
            <div className="field-separator">
            <label className="label-description">Consolas</label>
              <Select
                options={gameConsole}
                tags={tagsConsole}
                setTags={setTagsConsole}
              />
            </div>
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
        <Button
          variant="secondary"
          onClick={handleClose}
          style={{
            backgroundColor: "var(--color-quartery)",
            fontSize: "1.5rem",
          }}
        >
          Cancelar
        </Button>
        <Button
          variant="primary"
          onClick={handleClose}
          style={{
            backgroundColor: "var(--color-primary)",
            fontSize: "1.5rem",
          }}
        >
          Guardar Cambios
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalEditGame;
