import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './Routes';
import Home from '../screens/home/Home';
import Login from '../screens/login/Login';
import Registration from '../screens/registration/Registration'
import SingleDonationItem from '../screens/singleDonationItem/singleDonationItem';

const Stack = createStackNavigator();
const MainNavigation = ()=>{
    return(
      <Stack.Navigator
        initialRouteName={Routes.Login}
        screenOptions={{header: ()=> null, headerShown: false}}>
          <Stack.Screen name={Routes.Login} component={Login}/>
          <Stack.Screen name={Routes.Registration} component={Registration}/>
          <Stack.Screen name={Routes.Home} component={Home}/>
          <Stack.Screen name={Routes.SingleDonationItem} component={SingleDonationItem}/>
      </Stack.Navigator>
    )
}
export default MainNavigation
