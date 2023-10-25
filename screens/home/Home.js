import React, { useState } from 'react';
import { SafeAreaView, View } from 'react-native';

import globalStyles from '../../assets/styles/globalStyles';

import Search from '../../components/search/Search';
import DonationItem from '../../components/donationItem/DonationItem';
import { horizontalScale } from '../../assets/styles/scaling';

const Home = () => {
    const handleSearch = (val) => {
        console.log(val);
    };
    const [isActive, setIsActive] = useState(true);
    return (
      <SafeAreaView style={[globalStyles.backgroundWhite, globalStyles.flex]}>


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

      </SafeAreaView>
    );
};

export default Home;
