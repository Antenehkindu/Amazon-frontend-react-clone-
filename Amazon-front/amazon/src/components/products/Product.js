import React from 'react'
import "./Product.css"

function Product() {
  return (
    <div className ="product">
      <div className ="product__info">
          <p>title</p>
          <p className ="product__price">
              <small>$</small>
              <strong>price</strong>
          </p>
          <div className ="product__rating">
              <p>*</p>
          </div>
        </div>
        <img src ="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_2x._SY608_CB432774322_.jpg" alt=""/>
        <button>Add to Basket</button>
    </div>
  )
}

export default Product
