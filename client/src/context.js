import React, { Component } from 'react'
import { storeProducts,detailProduct } from './data'
import Axios from 'axios'

const ProductContext = React.createContext() 

class ProductProvider extends Component {
   state={
      products : [],
      detailProduct : [],
      carts : [],
      openModel : false,
      modelProduct : detailProduct,
      cartSubTotal : 0,
      Tax : 0,
      Total : 0
   }

   componentDidMount(){
      this.setProduct()
   }

   setProduct=()=>{
      let tempProduct = storeProducts.map(item=>{
         let product = {...item}
         return product
      })
      this.setState({
         products : tempProduct
      })
   }

   handelDetail=(id)=>{
      let tempProduct = [...this.state.products]
      let singleProduct = tempProduct.find(product=>product.id===id)
      this.setState({
         detailProduct : singleProduct
      })
   }

   addToCart=(id)=>{
      let tempProduct = [...this.state.products]
      let findProduct = tempProduct.find(product=>product.id === id)
      let index = tempProduct.indexOf(findProduct);
      let SelectedProduct = tempProduct[index];
      SelectedProduct.inCart = true;
      SelectedProduct.count = 1;
      let price = SelectedProduct.price
      SelectedProduct.total = price ;

      this.setState({
         products : tempProduct,
         carts : [...this.state.carts,SelectedProduct]   
      },this.addTotal)
   }

   addToModel=(id)=>{
      let tempModelProduct = [...this.state.products]
      let selectedTempModelProduct = tempModelProduct.find(singleTempModel => singleTempModel.id === id)
      this.setState({
         modelProduct : selectedTempModelProduct,
         openModel : true
      })
   }

   removeFromModel=()=>{
      this.setState({
         openModel : false
      })
   }

   increment=(id,title)=>{
      let tempIncrement = [...this.state.carts]
      let selectedProduct = tempIncrement.find(item=>item.id === id)
      selectedProduct.count = selectedProduct.count + 1;
      selectedProduct.total = selectedProduct.price*selectedProduct.count

      let updateProduct = {
         ...selectedProduct,
         count : selectedProduct.count,
         total : selectedProduct.total
      }
      //console.log(updateProduct)
      Axios.put(`/api/info/product/${title}`,updateProduct)
            .then((response)=>{
               console.log(response)
            })
            .catch((error)=>{
               console.log(error)
            })

      this.setState({
         carts : tempIncrement
      },this.addTotal)
      
   }

   decrement=(id,title)=>{
     let tempCart = [...this.state.carts]
     let selectForDec = tempCart.find(item=>item.id === id)
     selectForDec.count = selectForDec.count - 1;
     if (selectForDec.count === 0) {
        this.removeItem(id)
     }else{
      selectForDec.total = selectForDec.price* selectForDec.count

      let updateProduct = {
         ...selectForDec,
         count : selectForDec.count,
         total : selectForDec.total
      }
      Axios.put(`/api/info/product/${title}`,updateProduct)
            .then((response)=>{
               console.log(response)
            })
            .catch((error)=>{
               console.log(error)
            })
       this.setState({
         carts : tempCart
      },this.addTotal)
     }
     
   }

   removeItem=(id)=>{
      let tempCart = [...this.state.carts];
      let tempProduct = [...this.state.products]

     tempCart = tempCart.filter(item => item.id !== id)
     let findProduct= tempProduct.find(item => item.id === id);
      findProduct.inCart = false
      findProduct.count = 0
      findProduct.total = findProduct.price
     this.setState({
        carts : tempCart,
        products : tempProduct
     },this.addTotal)
   }

   clearAll=()=>{
      this.setState(()=>{
         return{
            carts : []
         }
      },()=>{
         this.setProduct()
         this.addTotal()
      })
   }

   addTotal=()=>{
      let subTotal = 0
      let tempCart = [...this.state.carts]
      tempCart.map(item=> (subTotal+=item.total))
      let tax = subTotal * 0.2;
      let finalTax = parseFloat(tax.toFixed(3));
      let total = finalTax + subTotal

      let totalCost = {
         subTotal,
         Tax : tax,
         Total : total
      }

      Axios.post('/api/getTotal/total',totalCost)
            .then((total)=>{
               //console.log(total)
            })
            .catch((error)=>{
               console.log(error)
            })

      this.setState({
         Total : total,
         Tax :finalTax,
         cartSubTotal : subTotal
      })
   }

   addToDb =(productInfo)=>{
      Axios.post('/api/info/product',productInfo)
         .then((product)=>{
            console.log(product)
         })
         .catch((error)=>{
            console.log(error)
         })
   }

   deleteFromDb=(id)=>{
      Axios.delete(`/api/info/product/${id}`)
            .then((response)=>{
               console.log(response)
               console.log("It's done bro")
            })
            .catch((error)=>{
               console.log(error)
            })
   }

   render() {
      return (
         <ProductContext.Provider value={{
            ...this.state,
            handelDetail : this.handelDetail,
            addToCart : this.addToCart,
            addToModel : this.addToModel,
            removeFromModel : this.removeFromModel,
            increment : this.increment,
            decrement : this.decrement,
            removeItem : this.removeItem,
            clearAll : this.clearAll,
            addToDb : this.addToDb,
            deleteFromDb : this.deleteFromDb
         }}>
            {this.props.children}
         </ProductContext.Provider>
      )
   }
}

const ProductConsumer = ProductContext.Consumer;
export {ProductProvider,ProductContext,ProductConsumer}
