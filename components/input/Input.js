import React, {useState} from 'react';
import {View, Text, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import style from './style';

const Input = (props) => {
    const[value, setValue] = useState('');

    return (
     <View>
         <Text>{props.label}</Text>
         <TextInput
           placeholder={props.placeholder ? props.placeholder : null}
           style={style.input}
           value={value}
           onChangeText={(val) => {
               setValue(val);
               props.onChangeText(val)
           }}
           keyboardType={props.keyboardType}


         />

     </View>
    );
};
Input.defaultProps = {
    onChangeText: ()=>{},
    keyboardType: "default",
    secureTextEntry: false,
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    onChangeText: PropTypes.func,
    keyboardType: PropTypes.string,
    secureTextEntry: PropTypes.bool,
};
export default Input;
