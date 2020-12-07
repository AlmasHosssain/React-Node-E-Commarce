import React, { Component } from 'react'
import { ButtonContainer } from './Button'
import { Link } from 'react-router-dom'

export default class Default extends Component {
   render() {
      return (
         <div className="container my-5 d-flex justify-content-center align-items-center">
         <div className="row my-5">
            <div className="col-10 mx-auto mt-5 text-center text-uppercase text-title">
               <h1>Error</h1>
               <h2>Page Not Found</h2>
               <h3>
                  The requested url 
                  <strong className="text-danger mx-2">{this.props.location.pathname}</strong>
                  Is Not Found
               </h3>
               <Link to="/">
                  <ButtonContainer>
                     Back to the home
                  </ButtonContainer>
               </Link>
            </div>
         </div>
      </div>
      )
   }
}
