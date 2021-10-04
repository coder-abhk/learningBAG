import About from "./About";
import Books from "./Books";
import Footer from "./Footer";
import Services from "./Services";
import MainProduct from "./MainProduct";
import mainProductImg from "../assets/images/main_product_img.png";

function Home() {
  return (
    <>
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
    </>
  );
}

export default Home;
