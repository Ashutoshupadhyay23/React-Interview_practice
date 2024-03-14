import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {useParams} from 'react-router-dom'

const ProductDetails = () => {

    const {id} =  useParams()
    const [product, setProduct] = useState(null) 

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`).then(res => res.json())
        .then((res) => {
            
            setProduct(res)
        })
    }, [])


  return (
    <div>
        <h2>Product-Details </h2>
        {product? (
            <div style={{display: 'flex'}}>
                <img 
                 src={product.thumbnail} 
                 alt={product.title} 
                 style={{height: 300}} 
                />
                <div>
                    <h3> ${product.title} </h3>
                    <h3> ${product.price} </h3>
                    <p> {product.description} </p>
                </div>
                
            </div>
        ) : <p> loading... </p>}
    </div>
  )
}

export default ProductDetails