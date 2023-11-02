import auth from '@react-native-firebase/auth';
import store from '../redux/store';
import {updateToken} from '../redux/reducers/User';

export const createUser = async (fullName, email, password) => {
    try {
        const user = await auth().createUserWithEmailAndPassword(email, password);
        await user.user.updateProfile({displayName: fullName});
        //console.log(user);
        return user;
    } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
            return {error: 'That email address is already in use!'}
          //  console.log('That email address is already in use!');
        } else if (error.code === 'auth/invalid-email') {
            return {error: 'That email address is invalid'}
          //  console.log('That email address is invalid');
        }
       // console.log(error);
        return {error: 'Something went wrong'}
    }
};

export const loginUser = async (email, password) =>{
    try{
        const response = await auth().signInWithEmailAndPassword(email, password);
        const token = await response.user.getIdToken();

        return {
            status: true,
            data: {
                displayName: response.user.displayName,
                email: response.user.email,
                token
            }
        }
    } catch(error) {
        if (error.code === 'auth/invalid-login'){
            return {status: false, error:"Please enter valid email and password"}
        }
        return {status: false, error: error.message}
    }
};

export const logOut = async ()=>{
    await auth().signOut();
};
export const checkToken = async ()=>{
    try {
      let response = await auth().currentUser.getIdToken(true);
      console.log("Updating token");
      store.dispatch(updateToken(response))
      return response
    } catch (error) {
        return error
    }
};
