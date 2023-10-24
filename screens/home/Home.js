import React from 'react';
import { SafeAreaView,Text } from 'react-native';

import globalStyles from '../../assets/styles/globalStyles';
import style from './style';

const Home = ()=>{
    return(
      <SafeAreaView style={[globalStyles.backgroundWhite, globalStyles.flex]}>
          <Text>Hello</Text>

      </SafeAreaView>
    )
}

export default Home;
