import React, { Component } from 'react'
import Title from '../Title'
import CartColumn from './CartColumn'
import EmptyCart from './EmptyCart'
import { ProductConsumer } from '../../context'
import CartList from './CartList'
import CartTotal from './CartTotal'

export default class Cart extends Component {
   render() {
      return (
        <section>
           <ProductConsumer>
            {
               (value)=>{
                  let { carts } = value
                  if(carts.length > 0){
                     return(
                        <>
                           <Title name = "Our" title="cart" />
                           <CartColumn />
                           <CartList value={value} />
                           <CartTotal value={value} />
                        </>
                     );
                  }else{
                     return(
                        <EmptyCart />
                     )
                  }

               }
            }
           </ProductConsumer>
        </section>
      )
   }
}

           