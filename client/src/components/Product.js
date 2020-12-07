import React, { Component } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import ProtoTypes from 'prop-types'
import { ProductContext,ProductConsumer } from '../context'

export default class Product extends Component {
   static contextType = ProductContext
   render() {
      let {id,title,img,price,inCart,count,company,total,info} = this.props.product
      return (
         <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
            <div className="card">
            <ProductConsumer>
               {
                  value=>{
                     return(
                        <div className="img-container p-5" 
                        onClick={()=>value.handelDetail(id)}
                        >
                           <Link to="/details">
                              <img src={img} alt="productImage" className="card-img-top" />
                           </Link>
                          
                           <button className="cart-btn" 
                            onClick={()=>{
                                 value.addToCart(id)
                                 value.addToModel(id)
                                 value.addToDb({id,title,img,price,company,info,total,count})
                               }}

                            disabled={inCart? true : false}>
                              {inCart? (<p className="text-capitalize mb-0" >InCart</p>) : <span>Buy</span> }
                           </button>
                        </div>
                     )
                  }
               }
            </ProductConsumer>
               <div className="card-footer d-flex justify-content-between">
                  <p className="align-self-center mb-0">
                     {title}
                  </p>
                  <h5 className="mb-0 text-blue font-italic font-weight-bold">
                     <span className="mr-1">$</span>
                     {price}
                  </h5>
               </div>
            </div>
         </ProductWrapper>
      )
   }
}

Product.protoTypes = {
   product:ProtoTypes.shape({
      id : ProtoTypes.number,
      img : ProtoTypes.string,
      title : ProtoTypes.string,
      price : ProtoTypes.number,
      inCart : ProtoTypes.bool
   }).isRequired
}

const ProductWrapper = styled.div`
   .card{
      border-color: transparent;
      border-radius: 0.3rem;
      transition: all 1s linear; 
   }
   .card-footer{
      border-top: transparent;
      background: transparent;
      transition: all 1s linear;
   }

   &:hover{
      .card{
         border: 0.04rem solid rgba(0,0,0,0.2);
         box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
      }
      .card-footer{
         background: rgba(247, 247, 247);
      }
   }

   .img-container{
      position: relative;
      overflow: hidden;
   }
   .card-img-top{
      transition: all 1s linear;
   }
   &:hover .card-img-top{
      transform: scale(1.3);  
   }

   .cart-btn{
      position : absolute;
      bottom : 0;
      right : 0;
      background: var(--lightBlue);
      color: var(--mainWhite);
      padding: 0.2rem 0.4rem 0;
      border-radius: 0.5rem 0 0 0;
      border : none;
      ${'' /* width : 2.5rem; */}
      transform : translate(100%,100%);
      transition: all 1s linear;
   }
   &:hover .cart-btn{
      transform : translate(0,0);
   }

   .cart-btn:hover{
      color : var(--mainBlue);
      cursor: pointer;
   }
`
