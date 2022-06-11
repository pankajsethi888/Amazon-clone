import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { auth } from "./firebase";

function Login() {
  const history = useNavigate();
  const [email, setEmail] = useState(""); // do not have null because in <input> we always pass empty stirng instead
  const [password, setPassword] = useState(""); // same applies here

  const signIn = (e) => {
    e.preventDefault(); // prevent from refreshing

    // Firbase Login codes...
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        history("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    // Firbase Register codes...
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        history("/");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        />
      </Link>
      <div className="login-container">
        <h1>Sign In</h1>
        <form action="">
          <h5>E-mail</h5>
          <input
            type="text"
            placeholder="abcxyz@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" onClick={signIn} className="login-signInButton">
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to AMAZON CLONE's Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads
        </p>
        <button onClick={register} className="login-registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
