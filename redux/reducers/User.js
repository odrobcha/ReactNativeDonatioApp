import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    firstName : "Oksana",
    lastName: "Drobchak",
    userId: 1
};

export const User = createSlice({
    name: 'user', //the name to identify it in redux
    initialState: initialState,
    reducers: {
        updateFirstName : (state, action) =>{
            state.firstName = action.payload.firstName
        },

    }
});

export const {updateFirstName} = User.actions;

export default User.reducer;
