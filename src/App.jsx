import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./layout/Layout";
import SingleProductPage from "./pages/SingleProductPage";
import { createContext, useState } from "react";
import ShoppingPage from "./pages/ShoppingPage";
export const CartContext = createContext({ id: 2, quantity: 4 });
function App() {
  const [cart, setCart] = useState([]);
  console.log(cart);
  return (
    <>
      <CartContext.Provider value={{ cart, setCart }}>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<SingleProductPage />} />
              <Route path="/Shopping" element={<ShoppingPage />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </CartContext.Provider>
    </>
  );
}

export default App;
