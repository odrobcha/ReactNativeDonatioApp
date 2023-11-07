import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './Routes';
import Home from '../screens/home/Home';
import Login from '../screens/login/Login';
import Registration from '../screens/registration/Registration'
import SingleDonationItem from '../screens/singleDonationItem/singleDonationItem';
import Payment from '../screens/payment/Payment';
import Test from '../screens/test/Test'

const Stack = createStackNavigator();
export const NonAuthenticated = ()=>{
    return(
      <Stack.Navigator
        initialRouteName={Routes.Login}
        screenOptions={{header: ()=> null, headerShown: false}}>
          <Stack.Screen name={Routes.Login} component={Login}/>
          <Stack.Screen name={Routes.Registration} component={Registration}/>
      </Stack.Navigator>
    )
};


export const Authenticated = () =>{
   return(  <Stack.Navigator
      initialRouteName={Routes.Home}
      screenOptions={{header: ()=> null, headerShown: false}}>
        <Stack.Screen name={Routes.Home} component={Home}/>
        <Stack.Screen name={Routes.Payment} component={Payment}/>
        <Stack.Screen name={Routes.Test} component={Test}/>
        <Stack.Screen name={Routes.SingleDonationItem} component={SingleDonationItem}/>
    </Stack.Navigator>
   )
}

