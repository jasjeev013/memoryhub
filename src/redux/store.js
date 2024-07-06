import { configureStore} from "@reduxjs/toolkit";
import searchSlice from './slices/searchSlice'
import categorySlice from "./slices/categorySlice";
export const store = configureStore({
    reducer:{
        search: searchSlice,
        category:categorySlice
    },
    devTools:true,
});