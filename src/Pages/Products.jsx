import React from 'react';
import { products } from "../data/data";
import { discountCalculator } from "../utils/functions"
import { useApp } from "../contexts/AppContext"
import { IoIosArrowDropdown } from 'react-icons/io'
import { useState } from 'react'

const categoryFilter = (data, category) => {
    if (category) {
        return data.filter(course => course.category === category)
    } else return data
}

const trending = (data, trending) => {
    if (trending === true) {
        return data.filter(item => item.trending === true)
    } else return data
}
const lifeTimeAccess = (data, lifeTimeAccess) => {
    if (lifeTimeAccess === true) {
        return data.filter(item => item.lifeTimeAccess === true)
    } else return data
}

const ProductPage = () => {
    const { state, dispatch } = useApp();
    const [showFilters, setShowFilters] = useState(false)
    const data = categoryFilter(lifeTimeAccess(trending(products, state.trending), state.lifeTimeAccess), state.category)
    return (
        <div>
            <div className="pageHeading">
                <p ></p>
                <button className="filter filterHeadingButton" onClick={() => setShowFilters(!showFilters)}>Filters<IoIosArrowDropdown /></button>
                <div style={{ display: showFilters ? "block" : "none" }} className="filtersContainer">
                    <div className="categoryFilters">
                        <p className="filterHeading">Categories:</p>
                        <label>
                            <input
                                className="filterName"
                                type="radio"
                                checked={state.category && state.category === "programming"}
                                onChange={() => dispatch({ type: "SET_CATEGORY", payload: "programming" })}
                            ></input>
                            Programming
                        </label>
                        <label>
                            <input
                                className="filterName"
                                type="radio"
                                checked={state.category && state.category === "design"}
                                onChange={() => dispatch({ type: "SET_CATEGORY", payload: "design" })}
                            ></input>
                            Design
                        </label>
                        <label>
                            <input
                                className="filterName"
                                type="radio"
                                checked={state.category && state.category === "marketing"}
                                onChange={() => dispatch({ type: "SET_CATEGORY", payload: "marketing" })}
                            ></input>
                            Marketing
                        </label>
                        <label>
                            <input
                                className="filterName"
                                type="radio"
                                checked={state.category && state.category === "finance"}
                                onChange={() => dispatch({ type: "SET_CATEGORY", payload: "finance" })}
                            ></input>
                            Finance
                        </label>
                        <label>
                            <input
                                className="filterName"
                                type="radio"
                                checked={state.category && state.category === "business"}
                                onChange={() => dispatch({ type: "SET_CATEGORY", payload: "business" })}
                            ></input>
                            Business
                        </label>
                        <label>
                            <input
                                className="filterName"
                                type="radio"
                                checked={state.category && state.category === "personalDevelopment"}
                                onChange={() => dispatch({ type: "SET_CATEGORY", payload: "personalDevelopment" })}
                            />
                            Personal Development
                        </label>
                        <label>
                            <input
                                className="filterName"
                                type="radio"
                                checked={state.category && state.category === "photographyAndVideo"}
                                onChange={() => dispatch({ type: "SET_CATEGORY", payload: "photographyAndVideo" })}
                            />
                            Photography & Video
                        </label>
                    </div>
                    <div className="otherFilters">
                        <p className="filterHeading">Others:</p>
                        <label>
                            <input
                                className="filterName"
                                type="checkbox"
                                checked={state.trending}
                                onChange={() => dispatch({ type: "SET_TRENDING" })}
                            />
                            Trending
                            <input
                                className="filterName"
                                checked={state.lifeTimeAccess}
                                onChange={() => dispatch({ type: "SET_LIFETIME_ACCESS" })}
                                type="checkbox" />
                            Life-Time Access
                        </label>
                    </div>
                    <button className="btn btnPrimary filterBtn" onClick={() => dispatch({ type: "SET_CLEAR_FILTERS" })}>Clear Filters</button>
                </div>
            </div>
            <div className="productsContainer">
                {data.map(product => {
                    return (
                        <div class="card">
                            <div class="cardImgDiv">
                                <img class="cardImg" alt="Product" src={product.image} />
                            </div>
                            <div class="titleAndCtaBtn">
                                <div class="title">
                                    <p class="productTitle">{product.name}</p>
                                </div>
                            </div>
                            <div class="descriptionAndPrice">
                                <p>{product.instructor}</p>
                                <p>Language: {product.language}</p>
                                <p class="priceAndDetails">
                                    <span class="price">Rs. {discountCalculator(product.discount, product.price)}</span>
                                    <span class="cutPrice">Rs. {product.price}</span>
                                    <span class="discount">({product.discount}% OFF)</span>
                                </p>
                            </div>
                            <div>
                                <p className="inclusiveOfAllTaxes">inclusive of all taxes</p>
                            </div>
                            <div class="cardButtons">
                                <button class="btn btnPrimary" disabled={state.cart.find(item => item._id === product._id) && true} onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })} >{state.cart.find(item => item._id === product._id) ? "ADDED TO CART" : "ADD TO CART"}</button>
                                <button class="btn btnLink" disabled={state.wishlist.includes(product) && true} onClick={() => dispatch({ type: "ADD_TO_WISHLIST", payload: product })} >{state.wishlist.includes(product) ? "In Wishlist" : "Wishlist"}</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ProductPage;