import React from 'react'

export default function CartItem({item,value}) {
   let {img,price,title,total,count,id} = item
   let {increment,decrement,removeItem} = value
   return (
    <>
      
      <div className="row my-auto">
         <div className="col-10 col-lg-2 mx-auto text-capitalize text-center">
            <img style={{height:"5rem",width:"5rem"}} src={img} className="img-fluid my-auto" alt="cartModelImage" />
         </div>
         <div className="col-10 col-lg-2 mx-auto text-center text-capitalize">
            <strong>
               <span className="d-lg-none">product : </span>
               {title}
            </strong>
         </div>
         <div className="col-10 font-italic text-muted col-lg-2 mx-auto text-center text-capitalize">
            <strong>
               <span className="d-lg-none text-blue">price :  </span>
               ${price}
            </strong>
         </div>
         <div className="col-10 col-lg-2 mx-auto text-center text-capitalize">
            <div className="d-flex justify-content-center align-items-center">
               <span className="btn btn-black mr-1" onClick={()=>decrement(id,title)}>-</span>
               <span className="btn btn-black mr-1">{count}</span>
               <span className="btn btn-black" onClick={()=>increment(id,title)}>+</span>
            </div>
         </div>
         <div className="col-10 col-lg-2 mx-auto text-center text-capitalize">
            <span className="btn btn-black text-capitalize my-2 btn-outline-danger" onClick={()=>{removeItem(id)
               value.deleteFromDb(item.id)
            }} >Delete</span>
         </div>
         <div className="col-10 col-lg-2 mx-auto text-center text-capitalize">
            <strong>item total:<span className="text-blue">${total}</span></strong>
         </div>
      </div>
      <hr/>
    </>
   )
}
