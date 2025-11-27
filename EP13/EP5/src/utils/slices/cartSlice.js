import { createSlice, current } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{

        addItems:(state,action)=>{

            //older version of redux => we can not mutate the state directly and new state returning was mandatory.
            //we need to return a new state
            //we need to copy the state first and then add then modify the  new state ex:=>

            //const newState = [...state];
            //newState.items.push(action.payload);
            //return newState


            //newer version of redux we have to mutate the state and returning is not mandatory
            //BUT behaand the scene redux creates the new state which is immutable using immer and return it.
            //so we can mutate the state directly 
            //immer is a library which creates the new state which is immutable.

            //how immer works?
            //current state => we mutate the state directly => new state(immutable) => redux return new state
            state.items.push(action.payload);

        },

        removeItems:(state,action)=>{
            state.items.slice(action.payload);

        },

        clearCart:(state)=>{
            console.log(current(state));

            //RTK says either you can mutate the state directly or return a new state
            // state.items=[];
            //state.items.splice(0,state.items.length);
            state.items.length = 0;
            // return {items:[]} 
        }
    } 
})

export const {addItems,removeItems,clearCart} = cartSlice.actions;
export default cartSlice.reducer;