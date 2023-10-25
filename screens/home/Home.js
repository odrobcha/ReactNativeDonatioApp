import React, { useState } from 'react';
import { SafeAreaView} from 'react-native';

import Header from '../../components/header/Header'

import globalStyles from '../../assets/styles/globalStyles';
import style from './style';
import Button from '../../components/button/Button';
import Tab from '../../components/tab/Tab'
import Badge from '../../components/badge/Badge';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons'


const Home = ()=>{
    const [isActive, setIsActive] = useState(true)
    return(
      <SafeAreaView style={[globalStyles.backgroundWhite, globalStyles.flex]}>
         <Header title={'Azari A.'} types={1}/>
         <Header title={'Azari A.'} types={2}/>
         <Header title={'Azari A.'} types={3}/>
         <Button title={'Donate'} onPress={()=>{console.log("pressed")}}/>
          <Button title={'Donate'} isDisabled={true}/>
          <Tab title={'Hilglight'} />
          <Tab title={'Hilglight'} isInactive={isActive}/>
          <Badge title={"Badge"}/>
          <FontAwesomeIcon icon={faSearch}/>

      </SafeAreaView>
    )
}

export default Home;
