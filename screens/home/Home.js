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
import Search from '../../components/search/Search';


const Home = ()=>{
    const handleSearch = (val)=>{
        console.log(val)
    }
    const [isActive, setIsActive] = useState(true)
    return(
      <SafeAreaView style={[globalStyles.backgroundWhite, globalStyles.flex]}>


          <Search onSearch={handleSearch}/>

      </SafeAreaView>
    )
}

export default Home;
