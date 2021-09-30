import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { connect } from "react-redux";

const Basket = ({ products, dispatch }) => {
  return (
    <div className="basket-container">
      <h4>Your Basket</h4>
      <div className="table-wrapper">
        <table className="table">
          <thead>
            <tr>
              <th className="thead">Items</th>
              <th className="thead">Price</th>
              <th className="thead"></th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 ? (
              products.map((product) => (
                <tr key={product.id}>
                  <td className="tdata">{product.name}</td>
                  <td className="tdata">{product.price}</td>
                  <td className="tdata">
                    <button
                      id="removeBtn"
                      type="button"
                      onClick={() => {
                        dispatch({ type: "REMOVE", id: product.id });
                      }}
                    >
                      <RemoveCircleIcon />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">No Items In Basket!</td>
              </tr>
            )}
          </tbody>
          <tfoot>
            <tr>
              <td style={{ background: "#000", color: "#ffffff" }}>Total</td>
              <td colSpan="2">
                <b>
                  Rs.{" "}
                  {products.reduce((val, product) => val + product.price, 0)}
                </b>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps, null)(Basket);
