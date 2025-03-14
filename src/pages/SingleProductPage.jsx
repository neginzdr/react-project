import { useContext, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "../components/Product";
import { CartContext } from "../App";
import Button from "@mui/material/Button";

export default function SingleProductPage() {
  const params = useParams();
  const [singleCart, setSingleCart] = useState([]);
  const{cart,setCart}=useContext(CartContext)

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.id}`)
    .then(res => res.json())
    .then(data => setSingleCart(data));
  }, []);

  const quantity = useMemo(() => {
    return cart?.find((item) => item.id === params.id)?.quantity;
  }, [cart]);

  

  function handleIncrease(evt) {
    evt.stopPropagation();
    setCart((cart) => {
      const isInclude = cart.find((item) => item.id === params.id);
      if (isInclude) {
        return cart.map((item) =>
          item.id == params.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...cart, { id:params.id, quantity: 1 }];
      }
    });
  }

  function handleDecrease(evt) {
    evt.stopPropagation();
    setCart((cart) => {
      const isInclude = cart?.find((item) => item.id === params.id);
      if (isInclude) {
        if (isInclude.quantity > 0) {
          return cart.map((item) =>
            item.id == params.id ? { ...item, quantity: item.quantity - 1 } : item
          );
        } else {
          return;
        }
      } else {
        return;
      }
    });
  }
  return (
    <div className="flex justify-center mt-[10px] mb-[20px] mr-[10px]">
    <Product
      key={singleCart.id}
      title={singleCart.title}
      price={singleCart.price}
      image={singleCart.image}
      buttons={<>
       <Button
          size="small"
          sx={{
            backgroundColor: "#47126b",
            color: "white",
            height: "30px",
            borderRadius: "10px",
          }}
          onClick={handleIncrease}
        >
          +
        </Button>
        <span>{quantity||0}</span>
        <Button
          size="small"
          sx={{
            backgroundColor: "#47126b",
            color: "white",
            height: "30px",
            borderRadius: "10px",
          }}
          onClick={handleDecrease}
        >
          -
        </Button></>}
    />
    </div>
  );
}
