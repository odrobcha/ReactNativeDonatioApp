import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, Alert } from 'react-native';
import { Routes } from '../../navigation/Routes';
import style from './style';
import globalStyles from '../../assets/styles/globalStyles';
import Header from '../../components/header/Header';
import Button from '../../components/button/Button';
import { useSelector } from 'react-redux';
import { CardForm, StripeProvider, useConfirmPayment } from '@stripe/stripe-react-native';

const Payment = ({navigation}) => {
    const donationItemInformation = useSelector(state => state.donations.selectedDonationInformation);
    const [isReady, setIsReady] = useState(false);
    const {confirmPayment, loading} = useConfirmPayment();
    const user = useSelector(state=> state.user)

    const fetchPaymentIntentClientSecret = async () => {
        const response = await fetch(
          'http://10.0.2.2:3000/create-payment-intent',
          {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                  email: user.email,
                  currency: 'eur',
                  amount: donationItemInformation.price * 100,
              }),
          },
        );
        const {clientSecret} = await response.json();
        return clientSecret;
    };
    const handlePayment = async()=>{

        const clientSecret = await fetchPaymentIntentClientSecret();
        const {error, paymentIntent} = await confirmPayment(clientSecret, {paymentMethodType: "Card"});

        if (error) {
            Alert.alert('Error has occurred', error.localizedMessage)
        } else if (paymentIntent){
            Alert.alert("Successful", "the payment was confirmed");

        }
    };
    return (
      <SafeAreaView style={[globalStyles.backgroundWhite, globalStyles.flex]}>
          <ScrollView contentContainerStyle={style.paymentContainer}>
              <Header title={'Make donation'}/>
              <Text style={style.donationAmountInfo}>
                  You are about to donation {donationItemInformation.price}
              </Text>
              <View>
                  <StripeProvider publishableKey={'pk_test_51O801dB0uofDRFaZ7nvSJXvfVHaWmpycFNIFz62JpfsnR8N84OuwLZ8fgX6odiurTktaUotRNm7qwqeaqnrz2dlB00AzUnMsEe'} >
                      <CardForm
                        style={style.cardForm}
                        onFormComplete={()=>{
                            setIsReady(true)
                        }}
                      >

                      </CardForm>
                  </StripeProvider>
              </View>
          </ScrollView>
          <View style={style.button}>
              <Button
                isDisabled={!isReady || loading}
                title={'Donate'}
                onPress={async ()=> await handlePayment()}
              />
          </View>
      </SafeAreaView>
    );
};

export default Payment;
