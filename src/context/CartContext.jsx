import { useState,useEffect } from "react";
import { createContext } from "react"; 

export const CartContext=createContext()
const articulos = JSON.parse(localStorage.getItem('carrito')) || []

export const CartProvider=({children})=>{
    const [cart,setCart]= useState(articulos);
    useEffect(()=>{
        localStorage.setItem('carrito', JSON.stringify(cart))
    },[cart])
    const addItem=(item,qty)=>{
        if(isInCart(item.id)){
            const carritoActualizado=cart.map((prod)=>{
                if(item.id===prod.id){
                    return {...item,quantity:prod.quantity+qty}
                }
                else{
                    return prod
                }
            })
            setCart(carritoActualizado)
        }
        else{
            setCart([...cart,{...item,quantity:qty}])
        }
    }
    const clear=()=>{
        setCart([])
    }
    const removeItem=(id)=>{
        setCart(cart.filter((prod)=>prod.id!==id))
    }
    const isInCart=(id)=>{
        return cart.some((prod)=>prod.id===id)
    }
    const cartQuantity=()=>{
        return cart.reduce((acc,prod)=>acc+=prod.quantity,0)
    }
    const total=()=>{
        return cart.reduce((acc, prod)=> 
            acc += (prod.price * prod.quantity)
        , 0)
    }
    const subTotal=(qty,price)=>{
        return qty*price;
    }
    const itemQuantity = (id)=>{
        const itemInCart = cart.find((prod)=> prod.id === id)
        if(itemInCart){
        return itemInCart.quantity
        }else{
        return 0
        }
    }
    return(
        <CartContext.Provider value={{cart,addItem,clear,removeItem,cartQuantity,total,subTotal,itemQuantity}}>
            {children}
        </CartContext.Provider>
    )
}