import Login from "./Login";
import Register from "./Register";
import { useState } from "react";
import User from "./User";

function Profile() {
  const [loginToggle, setLoginToggle] = useState(false);
  return (
    <div className="profile-container">
      {!localStorage.getItem("username") ? (
        !loginToggle ? (
          <Register loginToggle={loginToggle} setLoginToggle={setLoginToggle} />
        ) : (
          <Login loginToggle={loginToggle} setLoginToggle={setLoginToggle} />
        )
      ) : (
        <User
          user={localStorage.getItem("username")}
          email={localStorage.getItem("email")}
        />
      )}
    </div>
  );
}

export default Profile;
