import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text } from 'react-native';
import style from './style';
import globalStyles from '../../assets/styles/globalStyles';
import Input from '../../components/input/Input';
import Header from '../../components/header/Header';
import Button from '../../components/button/Button';
import BackButton from '../../components/backButton/BackButton';
import {createUser} from '../../api/user';


const Registration = ({navigation}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');


    const createNewUser = async ()=>{
      let user = await createUser(fullName, email, password);

      if(user.error){
          setError(user.error)
      } else {
          setError('');
          setSuccess("Register successfully");
          setTimeout(()=>{
              navigation.goBack()
          }, 3000)
      }
    };

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
              <View>
                  {error.length>0 &&
                    <Text style={style.error}>{error}</Text>
                  }
                  {success.length>0 &&
                  <Text style={style.success}>{success}</Text>
                  }

              </View>
              <View style={globalStyles.margiBottom24}>
                  <Button
                    isDisabled={fullName.length<=2 || email.length<=5 || password.length<=6}
                    title={'Registration'}
                   onPress={createNewUser}/>
              </View>

          </ScrollView>

      </SafeAreaView>
    );
};
export default Registration;
