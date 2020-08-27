import React from "react";
import PropTypes from "prop-types";
import "./DisplayField.css";

const DisplayField = (props) => {
  const { value, label, type } = props;

  const link =
    type === "email"
      ? `mailto:${value}`
      : type === "phone"
      ? `tel:${value}`
      : type === "website"
      ? `http://${value}`
      : "";

  return (
    <div className="TextField">
      <label className="TextLabel">{label}</label>
      <div className="TextInputBox">
        {type === "text" ? (
          <input className="TextInput" type="text" defaultValue={value} />
        ) : type === "phone" ? (
          <a href={link} className="ClickableTextInput">
            {value}
          </a>
        ) : (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={link}
            className="ClickableTextInput"
          >
            {value}
          </a>
        )}

        <fieldset className="TextFieldSet" aria-hidden="true">
          <legend className="Legend">
            <span>{label}</span>
          </legend>
        </fieldset>
      </div>
    </div>
  );
};

DisplayField.defaultProps = { type: "text" };

DisplayField.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default DisplayField;
