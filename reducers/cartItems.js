
const cartItems = (state = [], action={}) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return [...state, action.payload]
        case 'REMOVE_FROM_CART':
            return state.filter(cartItem => cartItem.id !== action.payload.id)
        case 'REMOVE_ONE_ITEM_FROM_CART':
            {
                let index=state.findIndex(item => item.id === action.payload.id)
                let itemToRemove= state.splice(index,1,null);
                return state.filter(cartItem => cartItem !== null)

            }
        case 'RESET_CART':
            // return module.exports.default();
            { 
                state=[];
                return state
            }
            
        default:
              return state;          
    }

    return state
}

export default cartItems
