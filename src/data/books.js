import axios from "axios";
import { uri } from "./uri";

const getBooks = async () => await axios.get(uri + "/books");

export default getBooks;
