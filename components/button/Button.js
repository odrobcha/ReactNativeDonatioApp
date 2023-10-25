import React from 'react';
import style from './style';
import {Pressable, Text} from 'react-native';
import PropTypes from 'prop-types'

const Button = (props) =>{
    const handlePress = () =>{
      props.onPress()
    };

    return(
      <Pressable
        style={[style.button, props.isDisabled && style.disabled]}
        disabled={props.isDisabled}
        onPress={handlePress}
      >
          <Text
            style={style.text}
          >
              {props.title}
          </Text>
      </Pressable>
    )
};

Button.default = {
    isDisabled: false,
    onPress: ()=>{}
}

Button.propTypes = {
    title: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool,
    onPress: PropTypes.func
}
export default Button;
