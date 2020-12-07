import React, { Component } from 'react'
import Product from './Product'
import Title from './Title'
import { ProductContext } from '../context'

export default class ProductList extends Component {
   static contextType = ProductContext
   render() {
      let {products} = this.context;
      return (
         <>
            <div className="my-5">
               <div className="container">
                  <Title name="our" title="products" />
                  <div className="row">
                     {  
                        products.map((product)=>{
                           
                           return <Product key={product.id} product={product} />
                        })
                     }
                  </div>
               </div>
            </div>
         </>
      )
   }
}
