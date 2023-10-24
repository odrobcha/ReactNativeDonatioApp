import React from 'react';
import { SafeAreaView} from 'react-native';

import Header from '../../components/header/Header'

import globalStyles from '../../assets/styles/globalStyles';
import style from './style';

const Home = ()=>{
    return(
      <SafeAreaView style={[globalStyles.backgroundWhite, globalStyles.flex]}>
         <Header title={'Azari A.'} types={1}/>
         <Header title={'Azari A.'} types={2}/>
         <Header title={'Azari A.'} types={3}/>

      </SafeAreaView>
    )
}

export default Home;
