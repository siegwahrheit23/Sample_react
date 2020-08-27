import React from "react";
import PropTypes from "prop-types";
import "./PhoneField.css";

import IconField from "./IconField";

const PhoneField = (props) => {
  const { value } = props;

  const link = `tel:${value}`;

  return (
    <div className="PhoneField">
      <div className="PhoneBox">
        <IconField type="phone" />
        <a href={link} className="PhoneLink">
          {value}
        </a>
        <fieldset className="PhoneFieldSet" aria-hidden="true"></fieldset>
      </div>
    </div>
  );
};

PhoneField.defaultProps = { type: "text" };

PhoneField.propTypes = {
  value: PropTypes.string.isRequired,
};

export default PhoneField;
