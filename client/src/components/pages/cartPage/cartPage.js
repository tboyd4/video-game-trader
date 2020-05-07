import React from 'react'

import CartDisplay from '../../gameDisplay/cartDisplay';
// import SearchBar from "./SearchBar"


function Cart(props) {
    return (
        <main>
            <h1>I am Cart Page</h1>
            <CartDisplay removeCart={props.removeCart}/>            
        </main>
    )
}

export default Cart;