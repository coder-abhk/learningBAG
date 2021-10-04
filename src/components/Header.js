import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function Header({ setIsToggle, isToggle, products }) {
  return (
    <div className="header">
      <nav className="header-nav">
        <div className="brand-logo">
          <h2>LearningBAG</h2>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <a href="#about" alt="">
              about
            </a>
          </li>
          <li>
            <a href="#contact" alt="">
              contact
            </a>
          </li>
          <li>
            <a href="#services" alt="">
              services
            </a>
          </li>
          <li>
            <Link to="/profile">profile</Link>
          </li>
          <li>
            <a
              href="/"
              alt=""
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                isToggle ? setIsToggle(false) : setIsToggle(true);
              }}
            >
              <ShoppingCartIcon fontSize="small" />
              <span
                style={{
                  padding: ".3rem .6rem",
                  background: "#ffce31",
                  marginLeft: ".4rem",
                  borderRadius: "7px",
                  fontWeight: "bolder",
                }}
              >
                {products.length}
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps, null)(Header);
