import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text } from 'react-native';
import { Routes } from '../../navigation/Routes';
import style from './style';
import globalStyles from '../../assets/styles/globalStyles';
import Header from '../../components/header/Header';
import Button from '../../components/button/Button';
import { useSelector } from 'react-redux';

const Payment = () => {
    const donationItemInformation = useSelector(state => state.donations.selectedDonationInformation);
    return (
      <SafeAreaView style={[globalStyles.backgroundWhite, globalStyles.flex]}>
          <ScrollView contentContainerStyle={style.paymentContainer}>
              <Header title={'Make donation'}/>
              <Text style={style.donationAmountInfo}>
                  You are about to donati {donationItemInformation.price}
              </Text>
          </ScrollView>
          <View style={style.button}>
              <Button title={'Donate'}/>
          </View>
      </SafeAreaView>
    );
};

export default Payment;
