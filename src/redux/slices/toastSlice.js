import { createSlice} from "@reduxjs/toolkit";


const toastSlice = createSlice({
    name: 'toast',
    initialState: {
        showUpdate: "false",
        showAdd: "false",
        message:'',
    },
    reducers: {
        handleShowUpdateToast: (state,action) => {
            state.message = action.payload.message;
            state.showUpdate = action.payload.showUpdate;
        },
        handleShowAddToast: (state,action) => {
            state.message = action.payload.message;
            state.showAdd = action.payload.showAdd;
        },
    }

})

export const { handleShowUpdateToast,handleShowAddToast} = toastSlice.actions
export default toastSlice.reducer;