import React,{useContext} from 'react'
import { myContext,mainData } from '../Context/MyContextFile';
import {CartArray} from './Cart'
import order from './order.jpg'




function View_Order() {

    const orderContext = useContext(myContext)
    

    return (
        <div>
             
             <img src={order} alt="" />

            
             {/* <p>Hello Data is : {mainData}</p> */}
            {/* <h3>Order ID : {orderContext.data.order._id}</h3> */}
           {/* <p>
                Name : {data.order.customer.name} <br/>
                Delivery Address : {data.delivery_address} <br/>
                Total Amount : {data.total_amount} <br/>
                Order Status : {data.order_status} <br/>
                Payment Status : {data.payment_status} <br/>
                <br/>
                <br/>
            </p>
            <div>
               <h3> Items Ordered : </h3>
               <p>
                   {data.Order_Items}
               </p>
            </div> */}

        </div>
    )
}

export default View_Order




// myenv\Scripts\activate
