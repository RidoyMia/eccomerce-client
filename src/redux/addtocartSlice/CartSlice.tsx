import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IProduct {
    id?: number;
    categoryId: number; // Corrected the typo
    name: string;
    price: number;
    size: string;
    descriptions: string;
    SellerId: number;
    oldPrice: number;
    quantity: number;
    brand: string;
    picture: string;
    buyQuantity?: number;
}

interface ICart {
    products: IProduct[];
}

const initialState: ICart = {
    products: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addTocart: (state, action: PayloadAction<IProduct>) => {
            
            const existingProduct = state.products.find(p => p.id === action.payload.id);
            if(existingProduct  ){
                if(existingProduct.quantity ==existingProduct.buyQuantity){
                //    const product = {...state.products}
                console.log('object')
                //    state.products.push(product)
                }
                else{
                    existingProduct.buyQuantity  =  existingProduct.buyQuantity! + 1; 
                }
                
            }
            else{
                state.products.push({ ...action.payload, buyQuantity: 1 });
                console.log('nai')
            }
        console.log(state.products,'finallly')
        },
        decrementToCart: (state, action: PayloadAction<IProduct>) => {
            const productToDecrement = state.products.find(p => p.id === action.payload.id);
            if (productToDecrement) {
                if (productToDecrement.buyQuantity && productToDecrement.buyQuantity > 1) {
                    productToDecrement.buyQuantity -= 1;
                } else {
                    state.products = state.products.filter(p => p.id !== action.payload.id);
                }
            }
        },
        RemoveIteam: (state, action: PayloadAction<IProduct>) => {
            state.products = state.products.filter(p => p.id !== action.payload.id);
        }
    },
})

export const { addTocart, decrementToCart, RemoveIteam } = cartSlice.actions

export default cartSlice.reducer;
