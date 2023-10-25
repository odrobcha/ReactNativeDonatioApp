import React, { useState } from 'react';
import { SafeAreaView, View, Pressable, Text } from 'react-native';

import globalStyles from '../../assets/styles/globalStyles';

import Search from '../../components/search/Search';
import DonationItem from '../../components/donationItem/DonationItem';
import { horizontalScale } from '../../assets/styles/scaling';
import Header from '../../components/header/Header';
import { useDispatch, useSelector } from 'react-redux';
import {updateFirstName} from '../../redux/reducers/User'
import style from '../../components/search/style';

const Home = () => {
    const handleSearch = (val) => {
        console.log(val);

    };
    const handlePress = () =>{
      dispatch(updateFirstName({firstName: "O."}));

    };
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    const [isActive, setIsActive] = useState(true);
    return (
      <SafeAreaView style={[globalStyles.backgroundWhite, globalStyles.flex]}>
          <Header title={user.firstName + ' ' + user.lastName}/>


          <Search onSearch={handleSearch}/>
          <View style={{flexDirection: 'row', justifyContent: "space-between", paddingHorizontal: horizontalScale(24)}}>
              <DonationItem
                uri={'https://img.pixers.pics/pho_wat(s3:700/FO/44/24/64/31/700_FO44246431_ab024cd8251bff09ce9ae6ecd05ec4a8.jpg,525,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,305,650,jpg)/stickers-cactus-cartoon-illustration.jpg.jpg'}
                badgeTitle={'Environment'}
                donationTitle={'Tree cactus'}
                price={3}
              />
              <DonationItem
                uri={'https://img.pixers.pics/pho_wat(s3:700/FO/44/24/64/31/700_FO44246431_ab024cd8251bff09ce9ae6ecd05ec4a8.jpg,525,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,305,650,jpg)/stickers-cactus-cartoon-illustration.jpg.jpg'}
                badgeTitle={'Environment'}
                donationTitle={'Tree cactus'}
                price={3}
              />
          </View>
          <Pressable onPress={handlePress}>
              <Text>Change name3333</Text>
          </Pressable>

      </SafeAreaView>
    );
};

export default Home;
