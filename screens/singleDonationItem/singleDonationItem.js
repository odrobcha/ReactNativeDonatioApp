import React from 'react';
import { useSelector } from 'react-redux';
import { SafeAreaView, ScrollView, Image, View, Text } from 'react-native';

import style from './style';
import globalStyles from '../../assets/styles/globalStyles';
import BackButton from '../../components/backButton/BackButton';
import Badge from '../../components/badge/Badge';
import Header from '../../components/header/Header'
import Button from '../../components/button/Button';
import { Routes } from '../../navigation/Routes';

const SingleDonationItem = ({ navigation, route }) => {
    const donationItemInformation = useSelector(state => state.donations.selectedDonationInformation);
    const categoryInformation = route.params.categoryInformation;
    const navigateToPaymentPage = () =>{
        navigation.navigate(Routes.Payment)
    }


    return (
      <SafeAreaView style={[globalStyles.backgroundWhite, globalStyles.flex]}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={style.container}
          >
              <BackButton onPress={() => {navigation.goBack();}}/>
              <Image source={{ uri: donationItemInformation.image }}
                     style={style.image}
              />
              <View style={style.badge}>
                  <Badge title={categoryInformation.name}/>
              </View>

                  <Header title={donationItemInformation.name} type={1}/>
              <Text style={style.description}>
                  {donationItemInformation.description}
              </Text>

          </ScrollView>
          <View style={style.button}>
              <Button title={"Donate"}
                      onPress={navigateToPaymentPage}
              />
          </View>

      </SafeAreaView>
    );
};

export default SingleDonationItem;
