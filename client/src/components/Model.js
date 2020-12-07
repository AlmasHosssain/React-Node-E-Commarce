import React, { Component } from 'react'
import { ButtonContainer } from './Button'
import { Link } from 'react-router-dom'
import { ProductConsumer } from '../context'
import styled from 'styled-components'

export default class Model extends Component {
   render() {
      return (
         <ProductConsumer>
            {
               (value)=>{
                  let {openModel,removeFromModel} = value
                  let {img,title,price} = value.modelProduct
                  if(!openModel){
                     return null
                  }else{
                     return(
                     <ModelContainer>
                        <div className="container">
                           <div className="row">
                              <div 
                              id="model"
                              className="col-8 mx-auto text-capitalize text-center col-md-6 col-lg-4 py-5">
                                 <h4 className="text-capitalize">Already in The Cart</h4>
                                 <img src={img} alt="modelIMage" className="img-fluid" />
                                 <h5>{title}</h5>
                                 <h5 className="text-muted">Price : <span className="text-blue font-weight-bold font-italic">${price}</span></h5>
                                 <Link to="/">
                                    <ButtonContainer onClick={()=>{removeFromModel()}}>
                                       Store
                                    </ButtonContainer>
                                 </Link>
                                 <Link to="/cart">
                                    <ButtonContainer cart onClick={()=>{removeFromModel()}}>
                                       Go Cart
                                    </ButtonContainer>
                                 </Link>
                              </div>
                           </div>
                        </div>
                     </ModelContainer>
                     
                  )
                  }
               }
            }
         </ProductConsumer>
      )
   }
}

const ModelContainer = styled.div`
   position : fixed;
   top : 0;
   left : 0;
   right : 0;
   bottom : 0;
   background : rgba(0,0,0,0.3);
   display : flex;
   align-items : center;
   justify-content : center;
   
   #model{
      background : var(--mainWhite);
      border-radius: 0.3rem;
   }
`
