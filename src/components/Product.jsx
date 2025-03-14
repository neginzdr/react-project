// import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { useContext, useMemo } from "react";
import { CartContext } from "../App";

export default function Product({ id, title, price, image,buttons }) {
  const navigate = useNavigate();
  const { cart, setCart } = useContext(CartContext);
  function singleProductHandler() {
    navigate(`/product/${id}`);
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
       {buttons}
      </CardActions>
    </Card>
  );
}
