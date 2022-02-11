import "./Popup.css";
import React from "react";
import PropTypes from "prop-types";

type Props = {
  handleClose: () => void,
  content: any,
};

const Popup: React$ComponentType<Props> = (props) => {
  return (
    <div data-testid="popup" className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>
          x
        </span>
        {props.content}
      </div>
    </div>
  );
};

Popup.propTypes = {
  content: PropTypes.element,
  handleClose: PropTypes.func,
};

export default Popup;
