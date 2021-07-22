export const initialState = {
    wishlist: [],
    cart: [],
    lifeTimeAccess: false,
    trending: false,
    category: null
}

export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_WISHLIST":
            return { ...state, wishlist: [...state.wishlist, action.payload] };

        case "ADD_TO_CART":
            return { ...state, cart: [...state.cart, { ...action.payload, quantity: 1 }] };

        case "REMOVE_FROM_WISHLIST":
            return { ...state, wishlist: state.wishlist.filter(item => item._id !== action.payload._id) };

        case "REMOVE_FROM_CART":
            return { ...state, cart: state.cart.filter(item => item._id !== action.payload._id) };

            case 'SET_CATEGORY':
                console.log(action.payload)
                return {...state, category: action.payload};
            case 'SET_TRENDING':
                return {...state, trending: !state.trending};
            case 'SET_LIFETIME_ACCESS':
                return {...state, lifeTimeAccess: !state.lifeTimeAccess};
            case 'SET_CLEAR_FILTERS':
                return { ...state, category: null, lifeTimeAccess: false, trending: false };
        default:
            return state
    }
}
