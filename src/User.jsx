import React from "react";
import PropTypes from "prop-types";
import "./User.css";

import InputField from "./InputField";
import IconField from "./IconField";
import AddressField from "./AddressField";
import PhoneField from "./PhoneField";

const User = (props) => {
  const { user } = props;

  return (
    <div className="UserCard">
      <div className="UserRow">
        <div className="IconDiv">
          <IconField type="name" />
        </div>
        <div className="FieldDiv">
          <InputField value={user.name} label="Name" />
        </div>
      </div>

      <div className="UserRow">
        <div className="IconDiv">
          <IconField type="address" />
        </div>
        <div className="FieldDiv">
          <AddressField value={user.address} label="Address" />
        </div>
      </div>

      <div className="UserRow">
        <div className="IconDiv">
          <IconField type="email" />
        </div>
        <div className="FieldDiv">
          <InputField value={user.email} label="Email" type="email" />
        </div>
      </div>

      <div className="UserRow">
        <div className="IconDiv">
          <IconField type="website" />
        </div>
        <div className="FieldDiv">
          <InputField value={user.website} label="Website" type="website" />
        </div>
      </div>

      <div className="UserRow PhoneRow">
        <PhoneField value={user.phone} />
      </div>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.object.isRequired,
};

User.defaultProps = {};

export default User;
