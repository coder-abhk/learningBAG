import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import { connect } from "react-redux";

function MainProduct({ id, mainProductImg, ratings, price, dispatch }) {
  return (
    <main className="main-product" key={id}>
      <header className="main-header">
        <h1>LEARN WITH PRECISE AND QUALITY NOTES</h1>
      </header>
      <div className="main-product-card">
        <img className="main-product-card-img" src={mainProductImg} alt="" />
        <div className="main-product-card-content">
          <h2>
            Price- Rs. <span className="main-product-price">{price}</span>
          </h2>
          <p>ratings</p>
          <p>
            <StarIcon fontSize="medium" />
            <StarIcon fontSize="medium" />
            <StarIcon fontSize="medium" />
            <StarIcon fontSize="medium" />
            <StarHalfIcon fontSize="medium" />
          </p>
          <div
            className="purchase-btn"
            onClick={() => {
              dispatch({
                type: "ADD",
                product: { id: id, price: price, name: "how innovation works" },
              });
            }}
          >
            ADD TO CART
          </div>
        </div>
      </div>
      <div className="main-product-details">
        <h1>Details</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus dolor purus non enim praesent elementum facilisis
          leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim
          diam quis enim lobortis scelerisque fermentum dui faucibus in ornare
          quam viverra
        </p>
        <div>
          <p>
            <small>Author</small>
          </p>
          <p>
            <small>
              <em>Matt Ridley</em>
            </small>
          </p>
        </div>
      </div>
    </main>
  );
}

export default connect(null, null)(MainProduct);
