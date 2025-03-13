import { useContext, useEffect, useState } from "react";
import { CartContext } from "../App";
import Product from "../components/Product";

export default function ShoppingPage() {
  const { cart, setCart } = useContext(CartContext);
  const [basketItem, setBasketItem] = useState([]);
  const [loading, setLoading] = useState(true);
  if (cart) {
    const id = cart.map((item) => item.id);

    useEffect(() => {
      const fetchBasketItem = async () => {
        try {
          const response = await Promise.all(
            id.map((i) =>
              fetch(`https://fakestoreapi.com/products/${i}`).then((response) =>
                response.json()
              )
            )
          );
          setBasketItem(response);
        } catch (error) {
          alert("error");
        } finally {
          setLoading(false);
        }
      };
      fetchBasketItem();
    }, []);
  } else {
    return <h2>Empty</h2>;
  }

  return (
    <div className="flex flex-wrap justify-evenly mt-[2rem] mb-[5rem]">
      {basketItem.map((item) => (
        <Product
          key={item.id}
          title={item.title}
          price={item.price}
          image={item.image}
        />
      ))}
    </div>
  );
}
