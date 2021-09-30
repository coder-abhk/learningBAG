import axios from "axios";

const getBooks = async () =>
  await axios.get("https://learningbagbooksapi.herokuapp.com/books");

export default getBooks;
