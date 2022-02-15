import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
  const { googleSignIn, gitHubSignIn } = useAuth();
  return (
    <div>
      <h2>Please Login</h2>
      <div>
        <button onClick={googleSignIn}>Google Sign In</button>
        <br />
        <button onClick={gitHubSignIn}>Github Sign In</button>
      </div>
      <br />
      <br />
      <form>
        <input type="Email" />
        <br />
        <input type="password" />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <Link to="/registration">New in here</Link>
    </div>
  );
};

export default Login;
