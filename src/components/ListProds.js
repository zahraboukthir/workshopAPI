import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Products from './Products'

const ListProds = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        // fetch('https://fakestoreapi.com/products')
        // .then(res=>res.json())
        // .then(json=>setProducts(json))
    //    axios.get('https://fakestoreapi.com/products')
    //    .then((res)=>setProducts(res.data) )
     const getprod= async()=>{
        try {
         const res= await  axios.get('https://fakestoreapi.com/products') 
         setProducts(res.data) 
        } catch (error) {
            
        }
     }
     getprod()
    }, [])
    
  return (
    <div style={{display:"flex", justifyContent:"space-around", flexWrap:"wrap"}}>
     {/* list */}
        {
            products.map(
                produit=><Products produit={produit} key={produit.id}/>
            )
        }
    </div>
  )
}

export default ListProds