import axios from "axios";

const getBooks = async () => await axios.get("http://localhost:3000/books");

export default getBooks;
