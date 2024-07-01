import cards from "../assets/cards.svg";

import propTypes from "prop-types";

export function Card({ img, isVisible = false, ...rest }) {
  return (
    <button
      type="button"
      className={`memory-card ${isVisible ? "flipped" : ""}`}
      {...rest}
    >
      <div className="card-inner">
        <div className="card-front">
          <img
            src={cards}
            alt="Apple"
            className="w-full h-full bg-cover absolute top-0 left-0"
          />
        </div>
        <div className="card-back">
          <img
            src={img}
            alt="Apple"
            className="w-full h-full bg-cover absolute top-0 left-0"
          />
        </div>
      </div>
    </button>
  );
}

Card.propTypes = {
  isVisible: propTypes.bool,
  img: propTypes.elementType.isRequired,
};
