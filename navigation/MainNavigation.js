import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './Routes';
import Home from '../screens/home/Home';
import SingleDonationItem from '../screens/singleDonationItem/singleDonationItem';

const Stack = createStackNavigator();
const MainNavigation = ()=>{
    return(
      <Stack.Navigator
        initialRouteName={Routes.Home}
        screenOptions={{header: ()=> null, headerShown: false}}>
          <Stack.Screen name={Routes.Home} component={Home}/>
          <Stack.Screen name={Routes.SingleDonationItem} component={SingleDonationItem}/>
      </Stack.Navigator>
    )
}
export default MainNavigation
