import React, { useContext, useEffect, useState } from 'react';
import { myContext } from '../Context/MyContextFile';
import { Link } from 'react-router-dom';


export let CartArray = new Array();


export const PutInCart = (myObj,cart,setCart,finalPrice,setFinalPrice) => {
  // finalPrice = finalPrice + (myObj.price) * (myObj.quantity);
  setFinalPrice(finalPrice + (myObj.price) * (myObj.quantity));
  CartArray.push(myObj);
  setCart(CartArray);
  console.log(CartArray);
  console.log('Hello putinCart' + myObj);
}

//  const deleteItem = ()=>{
//   CartArray.pop();
//   cardContext.setCart(CartArray);
//   console.log(CartArray);

// }


function Cart() {

  const cartContext = useContext(myContext);

  useEffect(() => {
    console.log("Hello I AM CHANGING!!!!!!");
    
  }, [cartContext.cart])




  return (
    <>
      <div className='Cart row'>


        {




          cartContext.cart.map((element) => {

            return <div className="col-md-3 shadow m-2 d-flex flex-column singleItem" >

              <img src={element.image} className='m-auto' style={{ width: '250px', height: '250px' }} />
              <b>{element.name}</b>
              <h4 style={{ color: 'red' }}>₹{element.price}x{element.quantity}={(element.price) * (element.quantity)}</h4>
              <p className='primary'>Quantity : {element.quantity}</p>
              <button id='deleteItem' onClick={()=>{cartContext.deleteItem(element.id,element.price)}} style={{ background: 'none', border: 'none' }}><i class="fa fa-2x fa-trash" aria-hidden="true"></i></button>
            </div>





          })


        }


      </div>
      <div id='price-details' className='shadow-sm'>
        <h2>Price Details:</h2>
        <br />
        <hr />
        <p id='finalPrice'>
          <span>Price :  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  ₹ {cartContext.finalPrice} </span><br />
          <span>Discount :  &nbsp; &nbsp; &nbsp; ₹ {cartContext.finalPrice * 0.1}</span> <br />
          <span>Delivery Charges :  &nbsp; &nbsp; &nbsp; FREE</span> <br />
          <hr />
          <span>Total Amount : &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ₹  {cartContext.finalPrice - cartContext.finalPrice * 0.1}</span>

        </p>

      </div>

      <Link to='/checkout'><button className='btn btn-success w-25 m-3 checkout'>Checkout</button></Link>

    </>
  )
}

export default Cart;

