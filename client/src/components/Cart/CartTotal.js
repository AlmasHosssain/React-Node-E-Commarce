import React from 'react'
import { Link } from 'react-router-dom'

export default function CartTotal({value}) {
   let {cartSubTotal, Tax, Total, clearAll} = value
   return (
      <div className="container">
         <div className="row">
            <div className="col-10 col-sm-8 ml-sm-5 ml-md-auto text-right text-capitalize text-center">
               <Link to="/">
                  <button className="btn btn-outline-danger text-uppercase mx-2" type="button" onClick={()=>{clearAll()}}>
                     Clear Cart
                   </button>
               </Link>
            </div>
            <div className="col-10 col-sm-8 ml-sm-5 ml-md-auto text-right text-capitalize text-center mt-2 mb-1">
               <h5>
                  <span className="text-title">SubTotal:</span>
                  <strong>${cartSubTotal}</strong>
               </h5>  
            </div>
            <div className="col-10 col-sm-8 ml-sm-5 ml-md-auto text-right text-capitalize text-center ">
               <h5>
                  <span className="text-title">Tax:</span>
                  <strong>${Tax}</strong>
               </h5>  
            </div>
            <div className="col-10 col-sm-8 ml-sm-5 ml-md-auto text-right text-capitalize text-center ">
               <h5>
                  <span className="text-title">Total:</span>
                  <strong>${Total}</strong>
               </h5>  
            </div>
         </div>
      </div>
   )
}
