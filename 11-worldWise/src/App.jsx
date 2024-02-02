import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Homepage from "./pages/Homepage";
import Item1 from "./pages/Item1";
import Items from "./pages/Items";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="product" element={<Product />} />
        <Route path="/product/items" element={<Items />} />
        <Route path="/product/items/1" element={<Item1 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
