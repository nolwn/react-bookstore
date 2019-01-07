import React from "react";

const AdminCheckbox = ({ toggleAdminHandler, admin }) =>
    <button
      className={ admin ? "button is-success" : "button is-light"}
      onClick={ toggleAdminHandler }
    >
      Admin
    </button>

export default AdminCheckbox;
