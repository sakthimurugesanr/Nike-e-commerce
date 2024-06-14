import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const initialState = {
    cartState: false,
    cartItems: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
    cartTotalAmount:0,
    cartTotalQantity:0,
    
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setOpenCart: (state, action) => {
            state.cartState = action.payload.cartState;
        },
        setCloseCart: (state, action) => {
            state.cartState = action.payload.cartState;
        },
        setAddItemToCart: (state, action) => {
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1;
                toast.success('Item quantity increased by 1');
            } else {
                const temp = { ...action.payload, cartQuantity: 1 };
                state.cartItems.push(temp);
                toast.success(`${action.payload.title} added to cart`);
            }
            localStorage.setItem("cart", JSON.stringify(state.cartItems));
        },
        setRemoveItemFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id);
            localStorage.setItem("cart", JSON.stringify(state.cartItems));
            toast.success(`${action.payload.title} removed from cart`);
        },
        setIncreaseItemQty: (state, action) => {
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1;
                toast.success('Item quantity increased by 1');
            }
            localStorage.setItem("cart", JSON.stringify(state.cartItems));
        },
        setDecreaseItemQty: (state, action) => {
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
            if (itemIndex >= 0 && state.cartItems[itemIndex].cartQuantity > 1) {
                state.cartItems[itemIndex].cartQuantity -= 1;
                toast.success('Item quantity decreased by 1');
            }
            localStorage.setItem("cart", JSON.stringify(state.cartItems));
        },
        setClearCartItems: (state) => {
            state.cartItems = [];
            toast.success('Cart is cleared');
            localStorage.setItem("cart", JSON.stringify(state.cartItems));
        },
        setgetTotals:(state,action)=>{

         let{totalAmount , totalQTY} = state.cartItems.reduce((cartTotal , cartItem)=>{ const {price,cartQuantity}=cartItem;
                const totalPrice = price * cartQuantity;

                cartTotal.totalAmount += totalPrice;
                cartTotal.totalQTY += cartQuantity;

                return cartTotal;
        
        },{

                totalAmount:0,
                totalQTY:0,
            })
            state.cartTotalAmount= totalAmount;
            state.cartTotalQantity= totalQTY;

        }


        //  setgetTotals : (state, action) => {
        //     // Ensure initial values are set
        //     if (state.cartTotalAmount === undefined) state.cartTotalAmount = 0;
        //     if (state.cartTotalQuantity === undefined) state.cartTotalQuantity = 0;
          
        //     // Destructure totalAmount and totalQTY from the result of reduce method
        //     let { totalAmount, totalQTY } = state.cartItems.reduce(
        //       (cartTotal, cartItem) => {
        //         // Destructure price and cartQuantity from cartItem
        //         const { price, cartQuantity } = cartItem;
        //         // Calculate total price for the current cartItem
        //         const totalPrice = price * cart Quantity;
          
        //         // Accumulate the total amount and total quantity
        //         cartTotal.totalAmount += totalPrice;
        //         cartTotal.totalQTY += cartQuantity;
          
        //         // Return the accumulated values for the next iteration
        //         return cartTotal;
        //       },
        //       {
        //         totalAmount: 0, // Initial total amount
        //         totalQTY: 0, // Initial total quantity
        //       }
        //     );
          
        //     // Update the state with the calculated total amount and total quantity
        //     state.cartTotalAmount = totalAmount;
        //     state.cartTotalQuantity = totalQTY;
        //   };
          
    },
});

// Export actions
export const {
    setOpenCart,
    setCloseCart,
    setAddItemToCart,
    setRemoveItemFromCart,
    setIncreaseItemQty,
    setDecreaseItemQty,
    setClearCartItems,
    setgetTotals
} = cartSlice.actions;

// Selectors
export const selectCartState = (state) => state.cart.cartState;
export const selectCartItems = (state) => state.cart.cartItems;
export const selectTotalAmount = (state) => state.cart.cartTotalAmount;
export const selectTotalQTY = (state) => state.cart.cartTotalQantity;


// Export reducer
export default cartSlice.reducer;
