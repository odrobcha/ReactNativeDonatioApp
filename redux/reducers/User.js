import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    firstName : "Oksana",
    lastName: "Drobchak",
    userId: 1,
    profileImage: 'https://cdn.dribbble.com/users/1577045/screenshots/4914645/media/028d394ffb00cb7a4b2ef9915a384fd9.png?compress=1&resize=400x300&vertical=top'
};

export const User = createSlice({
    name: 'user', //the name to identify it in redux
    initialState: initialState,
    reducers: {
        updateFirstName : (state, action) =>{
            state.firstName = action.payload.firstName
        },
        resetToInitialState: (state) => {
            return initialState;
        },


    }
});

export const {updateFirstName, resetToInitialState} = User.actions;

export default User.reducer;
