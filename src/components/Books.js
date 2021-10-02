import { useEffect, useState } from "react";
import books from "../data/books";
import CircularProgress from "@mui/material/CircularProgress";
import { connect } from "react-redux";

function Books({ dispatch }) {
  const [allBooks, setAllBooks] = useState([]);
  useEffect(() => {
    books()
      .then((res) => setAllBooks([...res.data]))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="books-container">
      <header className="books-container-header">
        <h1>
          MOST <span className="books-container-header-underline">POPULAR</span>{" "}
          BOOKS
        </h1>
      </header>
      <div className="books-container-items">
        {allBooks.length > 0 ? (
          allBooks.map((book) => (
            <div className="books-container-item" key={book._id}>
              <div className="books-container-item-image">
                <img src={book.imgSrc} alt="" />
              </div>
              <div className="books-container-item-body">
                <h3>Price Rs. {book.price}</h3>
                <p>ratings: {book.ratings}/5</p>
                <div
                  className="purchase-btn"
                  onClick={() => {
                    dispatch({
                      type: "ADD",
                      product: {
                        id: book._id,
                        name: book.name,
                        price: book.price,
                      },
                    });
                  }}
                >
                  ADD TO CART
                </div>
              </div>
            </div>
          ))
        ) : (
          <CircularProgress style={{ color: "#ffce31" }} />
        )}
      </div>
    </section>
  );
}

export default connect()(Books);
