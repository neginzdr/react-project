
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CartContext } from "../App";
import { useContext, useState } from "react";

export default function Footer() {
  const [value, setValue] = useState(0);
  const{cart,setCart}=useContext(CartContext)


  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));
  return (
    <>
      <Box sx={{ width: "100%",position:"fixed", bottom:"0"}}>
        <BottomNavigation
          sx={{ backgroundColor: "#dec9e9" }}
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            icon={<HomeIcon fontSize="medium" sx={{ color: "#47126b" }} />}
          />
          <BottomNavigationAction
            icon={<FavoriteIcon fontSize="medium" sx={{ color: "#47126b" }} />}
          />
          <BottomNavigationAction
            icon={
              <StyledBadge badgeContent={cart?.length||0} color="secondary">
                <ShoppingCartIcon sx={{ color: "#47126b" }} />
              </StyledBadge>
            }
          />
        </BottomNavigation>
      </Box>
    </>
  );
}
