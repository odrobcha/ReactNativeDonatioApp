import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Pressable, Text } from 'react-native';
import style from './style';
import globalStyles from '../../assets/styles/globalStyles';
import Input from '../../components/input/Input';
import Header from '../../components/header/Header';
import Button from '../../components/button/Button';
import { Routes } from '../../navigation/Routes';
import { loginUser } from '../../api/user';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/reducers/User'
//import { resetToInitialState } from '../../redux/reducers/User'

const Login = ({ navigation }) => {

 const dispatch = useDispatch();
 //dispatch(resetToInitialState());

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    const login = async () => {
        let user = await loginUser(email, password);
        if (!user.status) {
            setError(user.error);
        } else {
            setError('');
            dispatch(logIn(user.data))
            navigation.navigate(Routes.Home);
        }
    };

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
              <View>
                  {error.length > 0 &&
                  <Text style={style.error}>{error}</Text>
                  }
                  {success.length > 0 &&
                  <Text style={style.success}>{success}</Text>
                  }

              </View>
              <View style={globalStyles.margiBottom24}>
                  <Button
                    title={'Login'}
                    isDisabled={email.length <= 5 || password.length <= 6}
                    onPress={login}
                  />
              </View>
              <Pressable
                onPress={() => {navigation.navigate(Routes.Registration);}}
                style={style.registrationButton}>
                  <Header
                    type={3}
                    title={'Don\'t have an account?'}
                    color={'#156CF7'}
                  />

              </Pressable>
          </ScrollView>

      </SafeAreaView>
    );
};
export default Login;
