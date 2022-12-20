import { Products } from "./components/products";
import { Navbar } from "./components/navbar";
import { Cart } from "./components/cart";
import { Footer } from "./components/footer";
import { Promo } from "./components/promo";
import { ToastContainer } from "react-toastify";
import productData from "./data/productDataTest.json";

function App() {

  return (
    <div className="App">
      {/* Renders the toast container */}
      <ToastContainer/>

      {/* Renders the navbar */}
      <Navbar />

      {/* Renders the shopping cart */}
      <Cart />

      {/* Renders the promo section */}
      <Promo />

      {/* Renders the products list */}
      <Products product={productData} />

      {/* Renders the footer */}
      <Footer />
    </div>
  );
}

export default App;
