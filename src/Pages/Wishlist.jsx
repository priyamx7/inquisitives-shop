import React from 'react'
import { discountCalculator } from "../utils/functions"
import { useApp } from "../contexts/AppContext"

export const Wishlist = () => {
    const { state, dispatch } = useApp();
    console.log(state, "wishlist");
    return (
        <div className="wishlistContainer">
            {state.wishlist.map(wishlistItem => {
                return (
                <div class="card">
                    <div class="cardImgDiv">
                        <img class="cardImg" alt="Product" src={wishlistItem.image} />
                    </div>
                    <div class="titleAndCtaBtn">
                        <div class="title">
                            <p class="productTitle">{wishlistItem.brand}</p>
                        </div>
                    </div>
                    <div class="descriptionAndPrice">
                        <p>{wishlistItem.name}</p>
                        <p>Language: {wishlistItem.language}</p>
                        <p class="priceAndDetails">
                            <span class="price">Rs. {discountCalculator(wishlistItem.discount, wishlistItem.price)}</span>
                            <span class="cutPrice">Rs. {wishlistItem.price}</span>
                            <span class="discount">({wishlistItem.discount}% OFF)</span>
                        </p>
                    </div>
                    <div className="cardButtons">
                    <button className="btn btnPrimary" onClick={() => {
                                dispatch({ type: "ADD_TO_CART", payload: wishlistItem })
                                dispatch({ type: "REMOVE_FROM_WISHLIST", payload: wishlistItem })
                            }}>Move to cart</button>
                            <button className="btn btnLink" onClick={() => dispatch({ type: "REMOVE_FROM_WISHLIST", payload: wishlistItem })}>Remove</button>
                    </div>
                </div>)
            })}
        </div>
    )
}

export default Wishlist;
