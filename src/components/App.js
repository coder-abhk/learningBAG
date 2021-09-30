import About from "./About";
import Books from "./Books";
import Footer from "./Footer";
import Header from "./Header";
import Basket from "./Basket";
import Services from "./Services";
import { useState } from "react";
import MainProduct from "./MainProduct";
import mainProductImg from "../assets/images/main_product_img.png";

function App() {
  const [isToggle, setIsToggle] = useState(false);
  return (
    <div className="App">
      <Header setIsToggle={setIsToggle} isToggle={isToggle} />
      {isToggle ? <Basket /> : ""}
      <MainProduct
        id={4}
        mainProductImg={mainProductImg}
        ratings={4.5}
        price={1755}
      />
      <Books />
      <Services />
      <About />
      <Footer />
    </div>
  );
}

export default App;
