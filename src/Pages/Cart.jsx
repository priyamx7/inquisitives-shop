import React from 'react';
import { useApp } from "../contexts/AppContext";
import { discountCalculator } from "../utils/functions"

const Cart = () => {
    const { state, dispatch } = useApp();
    const cartPrices = state.cart.map(item => parseInt(discountCalculator(item.discount, item.price), 10))
    const cartTotal = cartPrices.reduce((curr, acc) => curr + acc, 0)
    return (
        <div>
            {state.cart.length < 1 ? <h2 className="emptyMsg">Cart is empty</h2> :
            <div className="cartPageDiv">
            <div className="productsContainer cartContainer">
            {state.cart.map(cartItem => {
                return (
                <div class="card">
                    <div class="cardImgDiv">
                        <img class="cardImg" alt="Product" src={cartItem.image} />
                    </div>
                    <div class="titleAndCtaBtn">
                        <div class="title">
                            <p class="productTitle">{cartItem.name}</p>
                        </div>
                    </div>
                    <div class="descriptionAndPrice">
                        <p>{cartItem.instructor}</p>
                        <p>Language: {cartItem.language}</p>
                        <p class="priceAndDetails">
                            <span class="price">Rs. {discountCalculator(cartItem.discount, cartItem.price)}</span>
                            <span class="cutPrice">Rs. {cartItem.price}</span>
                            <span class="discount">({cartItem.discount}% OFF)</span>
                        </p>
                    </div>
                    <div class="cardButtons">
                    <button className="btn btnLink"
                    onClick={() => {
                                dispatch({ type: "ADD_TO_WISHLIST", payload: cartItem })
                                dispatch({ type: "REMOVE_FROM_CART", payload: cartItem })
                            }}>Move to Wishlist</button>
                        <button className="btn btnLink" onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: cartItem })}>Remove</button>
                    </div>
                </div>
                )
            })}
            </div>
            <div className="cartDetailsDiv">
                <p className="checkoutCardTitle">Order Details:</p>
                {state.cart.map(cartItem => {
                    return (
                        <div>
                        <div>
                            <div className="checkoutCard">
                                <div>
                                    <p className="checkoutCardDetails">{cartItem.name}</p>
                                </div>
                                <div>
                                    <p className="checkoutCardDetails">{discountCalculator(cartItem.discount, cartItem.price)}</p>
                                </div>
                        </div>
                        </div>
                </div>
                    )
                })}
                <div className="lineElement"></div>
                        <div className="checkoutCard">
                            <p className="checkoutCardDetails">Total Amount</p>
                            <p className="checkoutCardDetails"><b>Rs {cartTotal}</b></p>
                        </div>
                        <button className="btn btnPrimary">Checkout</button>
            </div>
        </div>
            }
        </div>
        
    )
}

// const Cart = () => {
//     if (cart.length === 0) {
//         return <h1>Cart  is empty!</h1>
//     } else return <CartContent /> 
// }

export default Cart;