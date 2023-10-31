import React, { useRef, useState } from 'react';

import style from './style';
import PropTypes from 'prop-types';
import { Pressable, Image, View } from 'react-native';
import Badge from '../badge/Badge';
import Header from '../header/Header';

const DonationItem = (props) => {
    return (
      <Pressable
        onPress={()=>{
            props.onPress(props.donationItemId)
        }}
      >
          <View>
              <View style={style.badge}>
                  <Badge title={props.badgeTitle}/>
              </View>
              <Image
                resizeMode={'cover'}
                source={{ uri: props.uri }}
                style={style.image}
              />
          </View>
          <View style={style.donationInfo}>
              <Header
                title={props.donationTitle}
                color={'#0A043C'}
                type={3}
                numberOfLines = {1}
              />
              <View style={style.price}>
                  <Header
                    title={'$' + props.price.toFixed(2)}
                    color={'#156CF7'}
                    type={3}
                  />
              </View>
          </View>
      </Pressable>

    );
};

DonationItem.default = {
    onPress: ()=>{}
}

DonationItem.propTypes = {
    uri: PropTypes.string.isRequired,
    badgeTitle: PropTypes.string.isRequired,
    donationTitle: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    onPress: PropTypes.func,
    donationItemId:PropTypes.number.isRequired
};

export default DonationItem;
