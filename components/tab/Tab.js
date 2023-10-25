import React, {useState, useRef} from 'react';
import style from './style';
import { Pressable, Text } from 'react-native';
import PropTypes from 'prop-types';
import { horizontalScale } from '../../assets/styles/scaling';

const Tab = (props) => {
    const handlePress = () => {
        props.onPress();
    };
    const [width, setWidth] = useState(0);
    const textRef = useRef(null);
    const paddingHorizontal= 33;
    const tabWidth = {
        width: horizontalScale((paddingHorizontal*2  + width))
    }


    return (
      <Pressable
        style={[style.tab, props.isInactive && style.isInactiveTab, tabWidth]}
        disabled={props.isInactive}
        onPress={handlePress}
      >
          <Text
            onTextLayout={(event)=>{
                setWidth(event.nativeEvent.lines[0].width);
            }}
            ref={textRef}
            style={[style.text, props.isInactive && style.isInactiveTitle]}
          >
              {props.title}
          </Text>
      </Pressable>
    );
};

Tab.default = {
    isInactive: false,
    onPress: () => {},
};

Tab.propTypes = {
    title: PropTypes.string.isRequired,
    isInactive: PropTypes.bool,
    onPress: PropTypes.func,
};
export default Tab;
