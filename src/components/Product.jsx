// import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { useContext, useMemo } from "react";
import { CartContext } from "../App";

export default function Product({ id, title, price, image }) {
  const navigate = useNavigate();
  const { cart, setCart } = useContext(CartContext);

  const quantity = useMemo(() => {
    return cart?.find((item) => item.id === id)?.quantity;
  }, [cart]);

  function singleProductHandler() {
    navigate(`/product/${id}`);
  }

  function handleIncrease(evt) {
    evt.stopPropagation();
    setCart((cart) => {
      const isInclude = cart.find((item) => item.id === id);
      if (isInclude) {
        return cart.map((item) =>
          item.id == id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...cart, { id, quantity: 1 }];
      }
    });
  }

  function handleDecrease(evt) {
    evt.stopPropagation();
    setCart((cart) => {
      const isInclude = cart?.find((item) => item.id === id);
      if (isInclude) {
        if (isInclude.quantity > 0) {
          return cart.map((item) =>
            item.id == id ? { ...item, quantity: item.quantity - 1 } : item
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
    <Card
      sx={{ border: "2px solid #47126b" ,marginTop:"10px",width:"250px"}}
      onClick={singleProductHandler}
    >
      <CardMedia
        component="img"
        height="90px"
        image={image}
        sx={{ width: "90px", margin: "30px" }}
      />
      <CardContent>
        <Typography gutterBottom variant="p" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          ${price}
        </Typography>
      </CardContent>
      <CardActions>
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
        </Button>
      </CardActions>
    </Card>
  );
}
