/** @format */

import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { Products } from "./Components/Product/Products";
import { Routes, Route } from "react-router-dom";
import { CartPage } from "./Components/Cart/CartPage";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default App;
