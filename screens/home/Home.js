import React from 'react';
import { SafeAreaView} from 'react-native';

import Header from '../../components/header/Header'

import globalStyles from '../../assets/styles/globalStyles';
import style from './style';
import Button from '../../components/button/Button';

const Home = ()=>{
    return(
      <SafeAreaView style={[globalStyles.backgroundWhite, globalStyles.flex]}>
         <Header title={'Azari A.'} types={1}/>
         <Header title={'Azari A.'} types={2}/>
         <Header title={'Azari A.'} types={3}/>
         <Button title={'Donate'} onPress={()=>{console.log("pressed")}}/>
          <Button title={'Donate'} isDisabled={true}/>

      </SafeAreaView>
    )
}

export default Home;
