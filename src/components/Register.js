import { useState } from "react";
import axios from "axios";
import { uri } from "../data/uri";

function Register({ loginToggle, setLoginToggle }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onUsernameHandler(e) {
    e.preventDefault();
    setUsername(e.target.value);
  }

  function onEmailHandler(e) {
    e.preventDefault();
    setEmail(e.target.value);
  }

  function onPasswordHandler(e) {
    e.preventDefault();
    setPassword(e.target.value);
  }

  function loginToggleHandler() {
    loginToggle ? setLoginToggle(false) : setLoginToggle(true);
  }

  function onRegisterHandler(e) {
    //   submit user at "/register"
    axios
      .post(uri + "/register", {
        username,
        email,
        password,
      })
      .then((res) => {
        if (res.data.isRegistered) {
          setEmail("");
          setUsername("");
          setPassword("");
          loginToggleHandler();
        } else {
          alert(res.data.message);
        }
      })
      .catch((err) => console.error(err));
    e.preventDefault();
    e.stopPropagation();
  }
  return (
    <div className="form-container">
      <form id="form" onSubmit={onRegisterHandler}>
        <h4>Username</h4>
        <input
          type="text"
          name="username"
          placeholder="enter a username"
          required
          value={username}
          onChange={onUsernameHandler}
        />
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
          onClick={loginToggleHandler}
        >
          login ?
        </button>
        <input type="submit" value="register" />
      </form>
    </div>
  );
}

export default Register;
