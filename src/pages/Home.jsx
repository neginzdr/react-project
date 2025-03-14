import { useEffect, useState,useRef, useCallback } from "react";
import Product from "../components/Product";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

export default function Home() {
  const [products, setProducts] = useState([]);



  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);



  return (
    <>
      {/* <div>
        <input
          type="text"
          placeholder="Search"
          className="border-[1.5px] border-[#47126b] m-[2rem] p-[0.2rem] w-[15rem] rounded"
          ref={searchRef}
          onChange={searchHnadler}
        />
        <button className="ml-1">
          <SearchIcon></SearchIcon>
        </button>
      </div> */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2,auto)",
          gap: "15px",
          margin: "20px",
          marginBottom: "80px",
        }}
      >
        {products.map((item) => (
          <Product
            id={item.id}
            key={item.id}
            title={item.title}
            price={item.price}
            image={item.image}
          />
        ))}
      </Box>
    </>
  );
}
