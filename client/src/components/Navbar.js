import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'
import { FaAlignRight } from 'react-icons/fa'
import {ButtonContainer} from './Button'
import styled from 'styled-components'

export default class Navbar extends Component {
   render() {
      return (
         <NavWrap className="navbar navbar-expand navbar-dark px-sm-5">
            <Link to="/">
               <img src={logo} className="navbar-brand" alt="brandPic" />
            </Link>
            <ul className="navbar-nav align-items-center">
               <li className="nav-item">
                  <Link to="/" className="nav-link">
                     Products
                  </Link>
               </li>
            </ul>
            <Link className="ml-auto" to="/cart">
               <ButtonContainer>
                  <FaAlignRight />
                   <span className="mr-2">myCart</span>
               </ButtonContainer>
            </Link>
         </NavWrap>
      )
   }
}

const NavWrap = styled.nav`
   background: #800000;
   .nav-link{
      font-size: 1.3rem;
      color: var(--mainWhite) !important;
      text-transform: capitalize
   }
`
