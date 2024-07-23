import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./Presentation/Views/Product/List/ProductList";
import ProductDetail from "./Presentation/Views/Product/Detail/ProductDetail";
import CreateProduct from "./Presentation/Views/Product/New/CreateProduct";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/new" element={<CreateProduct />} />
          <Route path="/product/detail/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
