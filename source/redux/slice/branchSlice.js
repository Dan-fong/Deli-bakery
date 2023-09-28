import { createSlice } from "@reduxjs/toolkit";
import { sucursales } from "../../data/Sucursales";
import { categorias } from "../../data/Categorias";
import { products } from "../../data/Productos";


const branchSlice = createSlice({

    name: "branches",

    initialState: {
        allBranches: sucursales,
        allCategories: categorias,
        allProducts: products,
        itemPressed: "",
        categoryPressed: "",
    },

    reducers: {
        setItemPressed: (state, action) => {
            state.itemPressed = action.payload;
        }
    },
})

export const {setCategoryPressed} = branchSlice.actions
export const { setItemPressed } =  branchSlice.actions
export default branchSlice.reducer;