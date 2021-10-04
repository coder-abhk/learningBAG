import { useHistory } from "react-router-dom";

function User(props) {
  const history = useHistory();
  return (
    <div className="user-container">
      <h1>Profile information</h1>
      <div>
        <p className="details-row">
          <b>Username:</b> {props.user}
        </p>
        <p className="details-row">
          <b>Email:</b> {props.email}
        </p>
        <br />
        <button
          className="logout-btn"
          type="button"
          onClick={() => {
            localStorage.removeItem("username");
            localStorage.removeItem("email");
            history.push("/profile");
          }}
        >
          logout
        </button>
      </div>
    </div>
  );
}

export default User;
