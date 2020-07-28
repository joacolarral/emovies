import React from "react";

export default ({ handleChangeUser, handleChangePass, handleSubmit }) => (
  <div>
    <h1>LOG IN</h1>
    <div>
      <strong>LOG IN</strong>
    </div>
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Username"
          name="username"
          onChange={handleChangeUser}
        />
        <input
          placeholder="Password"
          name="password"
          onChange={handleChangePass}
        />
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  </div>
);
