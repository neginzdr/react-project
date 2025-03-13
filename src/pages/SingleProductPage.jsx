import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "../components/Product";

export default function SingleProductPage() {
  const params = useParams();
  const [singleCart, setSingleCart] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.id}`)
    .then(res => res.json())
    .then(data => setSingleCart(data));
  }, []);
  return (
    <div>
    <Product
      key={singleCart.id}
      title={singleCart.title}
      price={singleCart.price}
      image={singleCart.image}
    />
    </div>
  );
}
