import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "../components/Product";
import { CartContext } from "../App";

export default function SingleProductPage() {
  const params = useParams();
  const [singleCart, setSingleCart] = useState([]);
  const{cart,setCart}=useContext(CartContext)

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.id}`)
    .then(res => res.json())
    .then(data => setSingleCart(data));
  }, []);
  return (
    <div className="flex justify-center mt-[10px] mb-[20px]">
    <Product
      key={singleCart.id}
      title={singleCart.title}
      price={singleCart.price}
      image={singleCart.image}
    />
    </div>
  );
}
