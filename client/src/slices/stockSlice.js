import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    openBuyWindow: false,
    stockId: null
}

const stockSlice = createSlice({
    name: "buyStock",
    initialState: initialState,
    reducers: {
        setOpenBuyWindow: (state, value) => {
            state.openBuyWindow = value.payload;
        },
        setStockId: (state, value) => {
            state.stockId = value.payload;
        }
    }
})

export const { setOpenBuyWindow, setStockId } = stockSlice.actions;
export default stockSlice.reducer;