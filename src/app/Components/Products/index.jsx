import { useEffect, useState } from "react";
import styles from "./index.module.css"
import Card from "../card";

function Products(){
    const[products,setProducts]=useState([]);
    
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
    .then((res)=>res.json())
    .then((data)=>setProducts(data))
    },[])
    console.log(products)
    return(
        <>
        <h1 className={styles.top}>products</h1>
        <section className={styles.grid}>
            {products.map((products) =>{
                return(
                    <Card products={products}/>
                    
         );
        })}        
        </section>        
       
        </>
    );
    
}
export default Products;