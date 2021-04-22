import React from "react";

function register() {
  return (
    <div>
      <h1> REGISTER </h1>
      <form
        method="POST"
        action="http://localhost:8080/api/user"
        style={{ maxWidth: "400px" }}
      >
        <label style={{ display: "flex", flexDirection: "column" }}>
          Brukernavn:
          <input type="text" name="name" />
        </label>
        <label style={{ display: "flex", flexDirection: "column" }}>
          E-post:
          <input type="text" name="email" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default register;
