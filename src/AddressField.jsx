import React from "react";
import PropTypes from "prop-types";
import "./AddressField.css";

import DisplayField from "./DisplayField";

const AddressField = (props) => {
  const { value, label } = props;

  return (
    <div className="AddressField">
      <label className="AddressLabel">{label}</label>
      <div className="AddressBox">
        <DisplayField value={value.street} label="Street" />
        <DisplayField value={value.suite} label="Suite" />
        <DisplayField value={value.city} label="City" />
        <DisplayField value={value.zipcode} label="Zip Code" />
        <fieldset className="AddressFieldSet" aria-hidden="true">
          <legend className="Legend">
            <span>{label}</span>
          </legend>
        </fieldset>
      </div>
    </div>
  );
};

AddressField.propTypes = {
  value: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
};

AddressField.defaultProps = {};

export default AddressField;
