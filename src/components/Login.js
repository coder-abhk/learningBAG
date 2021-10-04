import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { uri } from "../data/uri";

function Login({ loginToggle, setLoginToggle }) {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onEmailHandler(e) {
    e.preventDefault();
    setEmail(e.target.value);
  }

  function onPasswordHandler(e) {
    e.preventDefault();
    setPassword(e.target.value);
  }
  function registerToggleHandler() {
    loginToggle ? setLoginToggle(false) : setLoginToggle(true);
  }

  function onLoginHandler(e) {
    axios
      .post(uri + "/login", {
        email,
        password,
      })
      .then((res) => {
        setEmail("");
        setPassword("");
        if (res.data.isMatched) {
          localStorage.setItem("username", res.data.username);
          localStorage.setItem("email", res.data.email);
          history.push("/profile");
        }
      })
      .catch((err) => console.error(err));
    e.preventDefault();
    e.stopPropagation();
  }
  return (
    <div className="form-container">
      <form id="form" onSubmit={onLoginHandler}>
        <h4>Email</h4>
        <input
          type="email"
          name="email"
          required
          value={email}
          placeholder="enter an email"
          onChange={onEmailHandler}
        />
        <h4>Password</h4>
        <input
          type="password"
          name="password"
          required
          value={password}
          placeholder="enter a password"
          onChange={onPasswordHandler}
        />
        <button
          className="form-route-btn"
          type="button"
          onClick={registerToggleHandler}
        >
          register ?
        </button>
        <input type="submit" name="login" value="login" />
      </form>
    </div>
  );
}

export default Login;
