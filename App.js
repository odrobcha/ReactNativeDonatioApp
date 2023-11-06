import React, { useEffect, useRef } from 'react';
import {AppState} from 'react-native'; //to track to App state Changing
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store, { persistor } from './redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import RootNavigation from './navigation/RootNavigation';
import { checkToken } from './api/user';

const App = () => {
    const appState = useRef(AppState.currentState);
    useEffect(()=>{
        const subscription = AppState.addEventListener('change', async (nexAppState)=>{   //add listener to app state. whernewver the AppState changes do an action
            if (appState.current.match(/inactive|background/) && nexAppState === "active"){
                //we are coming from backGround to the foreground;
                console.log("You have come back to the App");
                await checkToken()
            }

            appState.current = nexAppState // to set new state
        });

        console.log("App has rendered");
        checkToken();
    }, [])

    return (
      <Provider store={store}>
          <PersistGate persistor={persistor} loading={null}>
          <NavigationContainer>
              <RootNavigation/>
          </NavigationContainer>
          </PersistGate>
      </Provider>
    );
};

export default App;
