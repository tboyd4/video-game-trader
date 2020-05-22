import React from 'react'

import CartDisplay from '../../gameDisplay/cartDisplay';
// import SearchBar from "./SearchBar"

import './cartPage.css'


function Cart(props) {
    return (
        <main className="inner-cont">
            <h1 class="black-text center-align cart-title">Your Cart</h1>
            <CartDisplay removeCart={props.removeCart} purchaseCart={props.purchaseCart} />            
        </main>
    )
}

export default Cart;