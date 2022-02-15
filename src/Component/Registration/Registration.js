import React from "react";
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div>
      <h2>Please Register</h2>
      <form>
        <input type="text" name="Name" />
        <br />
        <input type="email" name="Email" />
        <br />
        <input type="password" name="Password" />
        <br />
        <input type="submit" value="Register" />
      </form>
      <Link to="/login">Already have an account</Link>
    </div>
  );
};

export default Registration;
