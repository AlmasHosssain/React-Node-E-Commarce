import React, { Component } from 'react'
import {} from 'react-router-dom'
import {ButtonContainer} from './Button'
import { ProductContext,ProductConsumer } from '../context'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default class Details extends Component {
   static contextType = ProductContext;
   render() {
     return(
      <ProductConsumer>
         {
           value=>{
              let{id,company,img,info,price,total,title,count,inCart} = value.detailProduct
              return(
               <div className="container py-5">
            <div className="row">
               <div className="col-10 mx-auto text-center text-slanted font-weight-bold text-blue my-5">
                  {title}
               </div>
            </div>
            <div className="row">
               <div className="col-10 col-md-6 mx-auto">
                  <img src={img} alt="productImage" className="img-fluid" />
               </div>
               <div className="col-10 col-md-6 mx-auto text-capitalize">
                  <h2>model : {title}</h2>
                  <h4 className="text-title font-weight-bold text-uppercase text-muted lead">
                     made By : <span>{company}</span>
                  </h4>
                  <h4 className="text-blue">
                     <strong><span className="text-muted">price</span> : <span className="mr-1">$</span>{price}</strong>
                  </h4>
                  <h5 className="font-weight-bold mt-4 mb-3"><u>Some Information About The Product</u></h5>
                  <p className="text-muted justify">{info}</p>
                  <Link to="/">
                     <ButtonContainer>
                        Back To Product
                     </ButtonContainer>
                  </Link>
                  <ButtonContainer
                     onClick= {()=>{
                        value.addToCart(id)
                        value.addToModel(id)
                        value.addToDb({id,title,img,price,company,info,total,count})
                        }}
                   cart disabled={inCart? true : false}>
                     {inCart? "In Cart" : "Add To Cart"}
                  </ButtonContainer>
               </div>
            </div>
         </div>
              )
           }
         }
      </ProductConsumer>
     ) 
   }
}
