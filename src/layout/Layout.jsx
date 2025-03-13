import { useContext } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { CartContext } from "../App";

export default function Layout({children}){
    const{cart,setCart}=useContext(CartContext)
    return(
        <>
        <Header/>
        {children}
        <Footer/>
        </>
    )
}