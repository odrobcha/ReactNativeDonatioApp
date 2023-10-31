import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Pressable } from 'react-native';
import style from './style';
import globalStyles from '../../assets/styles/globalStyles';
import Input from '../../components/input/Input';
import Header from '../../components/header/Header';
import Button from '../../components/button/Button';
import BackButton from '../../components/backButton/BackButton';


const Registration = ({navigation}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');

    return (
      <SafeAreaView style={[globalStyles.backgroundWhite, globalStyles.flex]}>
          <View style={style.backButton}>
              <BackButton onPress={()=>{navigation.goBack()}}/>
          </View>
          <ScrollView
            contentContainerStyle={style.container}
            showsVerticalScrollIndicator={false}>
              <View style={globalStyles.margiBottom24}>
                  <Header type={1} title={'Hello ans Welcome!'}/>
              </View>
              <View style={globalStyles.margiBottom24}>
                  <Input
                    keyboardType={'email-address'}
                    label={'Full name'}
                    placeholder={'Enter you full name...'}
                    secureTextEntry={true}
                    onChangeText={(fullName) => {setFullName(fullName);}}
                  />
              </View>
              <View style={globalStyles.margiBottom24}>
                  <Input
                    label={'Email'}
                    placeholder={'Enter you email...'}
                    secureTextEntry={true}
                    onChangeText={(email) => {setEmail(email);}}
                  />
              </View>
              <View style={globalStyles.margiBottom24}>
                  <Input
                    label={'Password'}
                    placeholder={'*****'}
                    secureTextEntry={true}
                    onChangeText={(password) => {setPassword(password);}}
                  />
              </View>
              <View style={globalStyles.margiBottom24}>
                  <Button title={'Registration'}/>
              </View>

          </ScrollView>

      </SafeAreaView>
    );
};
export default Registration;
