import { data } from "jquery";
import React, { createContext, useState, useEffect } from "react";
import { PutInCart, CartArray } from "../components/Cart";

export const myContext = createContext();

export let mainData;

const AllState = (props) => {


    const [cartNum, setCartNum] = useState(0);
    const [getItems, setGetItems] = useState([]);
    const [cart, setCart] = useState([]);
    const [finalPrice, setFinalPrice] = useState(0);
    const [data, setData] = useState({});

    const dispData =(data)=>{
        mainData=data;
        console.log("Data is :"+data);
    }

    const AddtoCart = (myObj) => {
        setCartNum((cartNum + 1)); //Have to Add Quantity in Cart
        // localStorage.setItem("cartNum", cartNum);
        console.log(cartNum);
        console.log(myObj);
        PutInCart(myObj, cart, setCart, finalPrice, setFinalPrice);
    }

    const deleteItem = (id, price) => {
        console.log("Delete id :" + id)
        let i = 0;
        while (CartArray[i].id !== id) {
            i++;
           
        }
        CartArray.splice(i,1);
        setCartNum(cartNum - 1);
        // CartArray.pop();
        setCart(CartArray);
        setFinalPrice(finalPrice - price);
    }





    return (
        <myContext.Provider value={{ cartNum, setCartNum, getItems, setGetItems, AddtoCart, cart, setCart, deleteItem, finalPrice, setFinalPrice ,data, setData,dispData}}>
            {props.children}
        </myContext.Provider>
    )


}

export default AllState;



