import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./layout/Layout";
import SingleProductPage from "./pages/SingleProductPage";
import { createContext, useState } from "react";
export const CartContext = createContext(null);
function App() {
  const [cart, setCart] = useState([{ id: 2, quantity: 4 }]);
  return (
    <>
      <CartContext.Provider value={{ cart, setCart }}>
        <Layout>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<SingleProductPage />} />
            </Routes>
          </BrowserRouter>
        </Layout>
      </CartContext.Provider>
    </>
  );
}

export default App;
