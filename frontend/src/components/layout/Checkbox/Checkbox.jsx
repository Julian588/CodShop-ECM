import "./Checkbox.css";

function Checkbox({ isOffer, handleIsOffer }) {
  return (
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
          <circle className="background" cx="17.8" cy="17.8" r="17.8"></circle>
          <circle className="stroke" cx="17.8" cy="17.8" r="14.37"></circle>
          <polyline
            className="check"
            points="11.78 18.12 15.55 22.23 25.17 12.87"
          ></polyline>
        </svg>
      </div>
    </div>
  );
}

export default Checkbox;
