import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Pressable } from 'react-native';
import style from './style';
import globalStyles from '../../assets/styles/globalStyles';
import Input from '../../components/input/Input';
import Header from '../../components/header/Header';
import Button from '../../components/button/Button';
import { Routes } from '../../navigation/Routes';


const Login = ({navigation}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
      <SafeAreaView style={[globalStyles.backgroundWhite, globalStyles.flex]}>
          <ScrollView
            contentContainerStyle={style.container}
            showsVerticalScrollIndicator={false}>
              <View style={globalStyles.margiBottom24}>
                  <Header type={1} title={'Welcome back'}/>
              </View>
              <View style={globalStyles.margiBottom24}>
                  <Input
                    keyboardType={'email-address'}
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
                  <Button title={'Login'}/>
              </View>
              <Pressable
                onPress={()=>{navigation.navigate(Routes.Registration)}}
                style={style.registrationButton}>
                  <Header
                    type={3}
                    title={"Don't have an account?"}
                    color={"#156CF7"}
                  />

              </Pressable>
          </ScrollView>

      </SafeAreaView>
    );
};
export default Login;
