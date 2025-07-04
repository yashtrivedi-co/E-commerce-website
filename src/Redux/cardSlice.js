import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    Additem : (state, action) => {
      state.push(action.payload);
    },
    Removeitem :(state,action) =>{
      return state.filter((item)=>(
        item.id !== action.payload
    ))
    }
  }
});
export const { Additem ,Removeitem} = cartSlice.actions;
export default cartSlice.reducer;
