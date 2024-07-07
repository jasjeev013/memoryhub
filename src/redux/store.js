import { configureStore} from "@reduxjs/toolkit";
import searchSlice from './slices/searchSlice'
import categorySlice from "./slices/categorySlice";
import toastSlice from "./slices/toastSlice";
export const store = configureStore({
    reducer:{
        search: searchSlice,
        category:categorySlice,
        toast:toastSlice,
    },
    devTools:true,
});