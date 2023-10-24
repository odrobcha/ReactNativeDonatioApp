import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import MainNavigation from './navigation/MainNavigation';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {

  return (
    <NavigationContainer>
       <MainNavigation/>
    </NavigationContainer>
  );
};


export default App;
