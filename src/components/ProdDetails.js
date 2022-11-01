import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from 'react-router-dom';
const ProdDetails = () => {
    const {idprod}=useParams()
    const [produit, setproduit] = useState ({})
    useEffect(() => {
      const getoneprod=async()=>{
        try {
           const {data}=await axios.get(`https://fakestoreapi.com/products/${idprod}`) 
    //   console.log(data)
    setproduit(data)
        } catch (error) {
            console.log(error)
        }
      }
      getoneprod()
    }, [idprod])
    
  return (
    <div>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={produit.image
            }
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {produit.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {produit.description}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small">Share</Button> */}
        <Link to="/">
        <Button size="small">Home</Button></Link>
      </CardActions>
    </Card>
    </div>
  )
}

export default ProdDetails