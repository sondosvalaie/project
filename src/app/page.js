"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Menu from "./Components/Menu";
import Products from "./Components/Products";
import Slider from "./Components/slider";
import Special from "./Components/special";
import Bottom from "./Components/Bottom";


export default function Home() {
  
  return (
    <>
      <Menu />
      <Slider/>
      <Special/>
      <Products/>
      <Bottom/>
    </>
  );
}
