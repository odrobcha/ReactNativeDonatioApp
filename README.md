This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.js` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.

## to restart app and reset cache
- run `npm start -- --reset-cache`

## To add fonts
- add font to './assets/fonts'
- add react-native.config.js //See the configs in the file
- run `npx react-native-asset`
- check the android/app/src/main/assets/font if all fonts are added

## To install prop-types (to chek the type of props)
- run `npm install prop-types --save`

## To install fontawesome
Documentation can be found here https://fontawesome.com/docs/web/use-with/react-native
- run `npm i --save @fortawesome/react-native-fontawesome @fortawesome/fontawesome-svg-core react-native-svg`
- to install free branding run 
    - `npm i --save @fortawesome/free-solid-svg-icons`
    - `npm i --save @fortawesome/free-brands-svg-icons`
    - `npm i --save @fortawesome/free-regular-svg-icons`

## To install react-native-info run
to get info over the device (such as hasNotch())
`npm install react-native-device-info --save`

## Navigation
Documentation can be found here https://reactnavigation.org
   - to install Navigation run 
          `npm install @react-navigation/native`
   - install dependencies into bare React Native project run 
        - `npm install react-native-screens react-native-safe-area-context`
   - Add   
    - import android.os.Bundle;
    - @Override
           protected void onCreate(Bundle savedInstanceState) {
             super.onCreate(null);
           }
           to MainActivity.java in Android folder
   - Wrap App with NavigationContainer container
## to install Stack navigation
Documentation can be found here https://reactnavigation.org/docs/stack-navigator
- run `npm install @react-navigation/stack`
- run `npm install react-native-gesture-handler';`        
 - Add import 'react-native-gesture-handler' to index.js
 - run `npm install @react-native-masked-view/masked-view`
 - set MainNavigation (create folder navigation and MainNavigation.js) 
 - add MainNavigation component to the NavigationContainer inside App component
## Drawing navigation   
Documentation can be found here https://reactnavigation.org/docs/drawer-navigator/
- install drawer , run `npm install @react-navigation/drawer`
- install react-native-gesture-handler and react-native-reanimated, run`npm install react-native-gesture-handler react-native-reanimated`
- edit babel.config. Add plugins: ['react-native-reanimated/plugin'], to babe.config.js


## Redux end Redux ToolKits
Documentation can be found here https://redux-toolkit.js.org/introduction/getting-started
- run `npm install @reduxjs/toolkit`
- run `npm install redux`
- run`npm install react-redux`
- run `npm install --save-dev @redux-devtools/core`
- to create slice and combined reducer
     - create slice (redux/reducers/User.js)
     - create combinedReducer (redux/store.js)
     - import {Provider} and store in App.js
     - wrap app component to <Provider store={store}></Provider>
        
- to use data from store import {useSelector} from 'redux'
- to dispatch action import {useDispatch} from 'redux'

##Redux-logger
to keep track of store changes
- run `npm install redux-logger`
- import {logger} from 'redux-logger'   to redux/store.js
- add middleware to configureStore
middleware: getDefaultMiddleware => {
        return getDefaultMiddleware().concat(logger)
    }
##Redux-persist
Library to persist(save state of reactApp(data) event in reload app)

- run `npm install redux-persist`
- import {persistReducer, persistStore} from 'redux-persist' to redux/store.js;
- set the persistent in  redux/store.js
const configuration = {
    key: 'root',  // given name
    storage: AsyncStorage,  //storage we use 
    version: 1   //version (given)
}
const persistedReducer = persistReducer(configuration, rootReducer);

export const persistor = persistStore(store); // save the store data

- import {PersistGate} from 'redux-persist/integration/react'; in App.js
- wrap App in <PersistGate persistor={persistor} loading={null}></PersistGate>

##AsyncStorage
AsyncStorage is unencrypted,async and persistent key-value storage, that is global to the App. Used to save data even when App is closed and restrart
- run `npm install @react-native-async-storage/async-storage`
- import AsyncStorage from '@react-native-async-storage/async-storage' to redux/store.js


#FireBase SetUp
Documentation can be found here :https://rnfirebase.io/

- Create a new Firebase project https://console.firebase.google.com/u/0/

- Install the React Native Firebase "app" module, run `npm install --save @react-native-firebase/app`
###Android Setup 
- On the Firebase console, add a new Android application and enter your projects details. 
    The "Android package name" must match your local projects package name which can be found inside of 
    the namespace field in /android/app/build.gradle, or in the manifest tag 
    within the /android/app/src/main/AndroidManifest.xml file within your project 
    for projects using android gradle plugin v7 and below
    
- then in Firebase new Project generate and google-service.json and add it to android/app folder
- continue to console (in course)
    OR follow the documanetation
- get signing certificate run `cd android && ./gradlew signingReport`
- go to android/build.gradle
        Configure Firebase with Android credentials
            First, add the google-services plugin as a dependency inside of your /android/build.gradle file:
            buildscript {
              dependencies {
                // ... other dependencies
                classpath 'com.google.gms:google-services:4.3.15'
                // Add me --- /\
              }
            }
- Lastly, execute the plugin by adding the following to your /android/app/build.gradle file:
                 apply plugin: 'com.android.application'
                 apply plugin: 'com.google.gms.google-services' // <- Add this line

###iOS Setup

follow the instruction here Documentation can be found here :https://rnfirebase.io/

## FireBase Authentication
Documentation can be found here https://rnfirebase.io/auth/usage

-install auth module,run `npm install @react-native-firebase/auth`
-Go to FireBase project, Chose Authentication tab -> getStarted->email/password -> enable it-> Save

##NodeJS and ExpressJS

## Payment
#### Stripe
Payment processes platform. Go to stripe.com, and create our account
Documentation can be found here 
- https://stripe.com/docs/libraries/react-native
- https://github.com/stripe/stripe-react-native

####Install
run `npm install @stripe/stripe-react-native`

- For Android 
  - Add below dependency to your android/app/build.gradle file with specified version
        implementation 'com.google.android.material:material:<version>'
  - Set appropriate style in your android/src/main/res/values/styles.xml file
  <style name="Theme.MyApp" parent="Theme.MaterialComponents.DayNight">
      <!-- ... -->
  </style>


##Deployment
####App Icon
- Icon can be generated here https://makeappicon.com/. DownLoad generated icons
####Android 
All icons are in android/app/src/main/res. Replace the items by generated above items
####iOS 
Do the same for the iOS folder
####Custom splash
